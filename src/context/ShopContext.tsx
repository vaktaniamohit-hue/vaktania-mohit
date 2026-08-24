import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  Product,
  CartItem,
  ColorVariant,
  ShoeSize,
  FilterState,
  Order,
  UserProfile,
  PromoCode,
  ToastMessage,
  Category,
  Gender
} from '../types';
import { INITIAL_PRODUCTS, PROMO_CODES } from '../data/products';

export type ActiveView = 
  | 'home'
  | 'shop'
  | 'product'
  | 'cart'
  | 'wishlist'
  | 'checkout'
  | 'confirmation'
  | 'tracking'
  | 'account'
  | 'membership'
  | 'about'
  | 'stores'
  | 'contact';

export interface NavigateOptions {
  productId?: string;
  category?: Category;
  gender?: Gender;
  onSale?: boolean;
  newOnly?: boolean;
  search?: string;
  activityType?: string;
}

const DEFAULT_FILTERS: FilterState = {
  gender: [],
  category: [],
  sizes: [],
  priceRange: [0, 20000],
  colors: [],
  minRating: null,
  features: [],
  onSaleOnly: false,
  newOnly: false,
  searchQuery: '',
  sortBy: 'featured'
};

const DEFAULT_USER: UserProfile = {
  name: 'Aryan Varma',
  email: 'aryan.varma@voltathletics.com',
  phone: '+91 98201 54321',
  membershipTier: 'Pro',
  voltPoints: 1250,
  defaultSize: 9,
  preferredCategories: ['Running', 'Lifestyle'],
  addresses: [
    {
      id: 'addr-1',
      fullName: 'Aryan Varma',
      phone: '+91 98201 54321',
      street: '402, Sea Green Apartments, Perry Cross Road',
      apartment: 'Flat 402',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400050',
      isDefault: true,
      type: 'home'
    }
  ]
};

const INITIAL_DEMO_ORDER: Order = {
  id: 'VOLT-IND-89421',
  date: '2026-08-20T10:30:00Z',
  items: [
    {
      id: 'volt-01-red-9',
      productId: 'volt-01',
      product: INITIAL_PRODUCTS[0],
      selectedColor: INITIAL_PRODUCTS[0].colors[0],
      selectedSize: 9,
      quantity: 1,
      price: 8999
    }
  ],
  subtotal: 8999,
  discount: 899,
  shipping: 0,
  tax: 0,
  total: 8100,
  shippingAddress: DEFAULT_USER.addresses[0],
  paymentMethod: 'UPI',
  status: 'Shipped',
  estimatedDelivery: 'Tomorrow by 8:00 PM',
  trackingNumber: 'BD-8472910482',
  carrier: 'BlueDart Express'
};

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: string[];
  recentlyViewed: string[];
  orders: Order[];
  user: UserProfile | null;
  toasts: ToastMessage[];
  activeView: ActiveView;
  selectedProductId: string | null;
  lastOrder: Order | null;
  filters: FilterState;
  quickViewProduct: Product | null;
  isSizeGuideOpen: boolean;
  isCartDrawerOpen: boolean;
  isSearchOpen: boolean;
  isAuthModalOpen: boolean;
  appliedPromo: PromoCode | null;
  
  // Cart totals
  cartSubtotal: number;
  cartDiscount: number;
  cartShipping: number;
  cartTax: number;
  cartTotal: number;
  cartItemsCount: number;
  
  // Actions
  addToCart: (product: Product, color: ColorVariant, size: ShoeSize, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  moveToCartFromWishlist: (productId: string, size?: ShoeSize, color?: ColorVariant) => void;
  addRecentlyViewed: (productId: string) => void;
  applyPromoCode: (codeStr: string) => boolean;
  removePromoCode: () => void;
  addToast: (type: 'success' | 'info' | 'warning' | 'error', message: string, description?: string) => void;
  removeToast: (id: string) => void;
  navigateTo: (view: ActiveView, options?: NavigateOptions) => void;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  createOrder: (order: Omit<Order, 'id' | 'date' | 'trackingNumber' | 'carrier'>) => Order;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  openSizeGuide: () => void;
  closeSizeGuide: () => void;
  setCartDrawerOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  setAuthModalOpen: (open: boolean) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>('volt-01');
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [lastOrder, setLastOrder] = useState<Order | null>(INITIAL_DEMO_ORDER);

  // Local storage state with safe parsers
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('volt_cart_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
    }
    // Default demo item in cart for great first experience
    return [
      {
        id: 'volt-01-red-9',
        productId: 'volt-01',
        product: INITIAL_PRODUCTS[0],
        selectedColor: INITIAL_PRODUCTS[0].colors[0],
        selectedSize: 9,
        quantity: 1,
        price: 8999
      }
    ];
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('volt_wishlist_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read wishlist', e);
    }
    return ['volt-03', 'volt-04'];
  });

  const [recentlyViewed, setRecentlyViewed] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('volt_recent_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read recent', e);
    }
    return ['volt-01', 'volt-02', 'volt-03'];
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('volt_orders_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read orders', e);
    }
    return [INITIAL_DEMO_ORDER];
  });

  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('volt_user_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read user', e);
    }
    return DEFAULT_USER;
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('volt_cart_v2', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('volt_wishlist_v2', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('volt_recent_v2', JSON.stringify(recentlyViewed));
    } catch (e) {
      console.error(e);
    }
  }, [recentlyViewed]);

  useEffect(() => {
    try {
      localStorage.setItem('volt_orders_v2', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem('volt_user_v2', JSON.stringify(user));
    } catch (e) {
      console.error(e);
    }
  }, [user]);

  // Toast Helper
  const addToast = (type: 'success' | 'info' | 'warning' | 'error', message: string, description?: string) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, type, message, description }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart Calculations
  const cartSubtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const cartDiscount = useMemo(() => {
    if (!appliedPromo) return 0;
    if (appliedPromo.minOrder && cartSubtotal < appliedPromo.minOrder) return 0;
    if (appliedPromo.discountPercent) {
      return Math.round((cartSubtotal * appliedPromo.discountPercent) / 100);
    }
    if (appliedPromo.discountAmount) {
      return Math.min(appliedPromo.discountAmount, cartSubtotal);
    }
    return 0;
  }, [cartSubtotal, appliedPromo]);

  // Free shipping above ₹4,999, else standard ₹299
  const cartShipping = useMemo(() => {
    if (cart.length === 0) return 0;
    return cartSubtotal >= 4999 ? 0 : 299;
  }, [cartSubtotal, cart.length]);

  const cartTax = 0; // Inclusive of GST in India
  const cartTotal = Math.max(0, cartSubtotal - cartDiscount + cartShipping);
  const cartItemsCount = useMemo(() => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  // Actions
  const addToCart = (product: Product, color: ColorVariant, size: ShoeSize, quantity = 1) => {
    const itemId = `${product.id}-${color.name.replace(/\s+/g, '-').toLowerCase()}-${size}`;
    
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === itemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }
      return [
        ...prev,
        {
          id: itemId,
          productId: product.id,
          product,
          selectedColor: color,
          selectedSize: size,
          quantity,
          price: product.price
        }
      ];
    });

    addToast(
      'success',
      `Added to Bag: ${product.name}`,
      `Size UK ${size} • ${color.name} (Qty: ${quantity})`
    );
    setIsCartDrawerOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    const item = cart.find((i) => i.id === cartItemId);
    setCart((prev) => prev.filter((i) => i.id !== cartItemId));
    if (item) {
      addToast('info', 'Removed from Bag', `${item.product.name} (UK ${item.selectedSize})`);
    }
  };

  const updateCartQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    const exists = wishlist.includes(productId);
    const prod = products.find((p) => p.id === productId);
    if (exists) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      addToast('info', 'Removed from Wishlist', prod ? prod.name : '');
    } else {
      setWishlist((prev) => [...prev, productId]);
      addToast('success', 'Saved to Wishlist', prod ? prod.name : '');
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlist.includes(productId);
  };

  const moveToCartFromWishlist = (productId: string, size?: ShoeSize, color?: ColorVariant) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    const targetSize = size || product.availableSizes[0] || 8;
    const targetColor = color || product.colors[0];
    addToCart(product, targetColor, targetSize, 1);
    setWishlist((prev) => prev.filter((id) => id !== productId));
  };

  const addRecentlyViewed = (productId: string) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((id) => id !== productId);
      return [productId, ...filtered].slice(0, 6);
    });
  };

  const applyPromoCode = (codeStr: string): boolean => {
    const cleanCode = codeStr.trim().toUpperCase();
    const match = PROMO_CODES.find((p) => p.code === cleanCode);
    if (match) {
      if (match.minOrder && cartSubtotal < match.minOrder) {
        addToast(
          'warning',
          `Promo requires min order of ₹${match.minOrder.toLocaleString('en-IN')}`,
          `Add items worth ₹${(match.minOrder - cartSubtotal).toLocaleString('en-IN')} more.`
        );
        return false;
      }
      setAppliedPromo(match);
      addToast('success', `Promo code ${match.code} applied!`, match.description);
      return true;
    } else {
      addToast('error', 'Invalid Promo Code', 'Try codes like VOLT10, FIRSTDROP, or RUNFAST');
      return false;
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    addToast('info', 'Promo code removed');
  };

  const navigateTo = (view: ActiveView, options?: NavigateOptions) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (options?.productId) {
      setSelectedProductId(options.productId);
      addRecentlyViewed(options.productId);
    }
    if (options?.category || options?.gender || options?.onSale !== undefined || options?.newOnly !== undefined || options?.search) {
      setFilters((prev) => ({
        ...DEFAULT_FILTERS,
        category: options.category ? [options.category] : prev.category,
        gender: options.gender ? [options.gender] : prev.gender,
        onSaleOnly: options.onSale !== undefined ? options.onSale : false,
        newOnly: options.newOnly !== undefined ? options.newOnly : false,
        searchQuery: options.search || ''
      }));
    }
    setActiveView(view);
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  const createOrder = (orderData: Omit<Order, 'id' | 'date' | 'trackingNumber' | 'carrier'>): Order => {
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const trackingSuffix = Math.floor(1000000000 + Math.random() * 9000000000);
    const carriers = ['BlueDart Express', 'Delhivery Surface', 'Shadowfax Air'];
    const carrier = carriers[Math.floor(Math.random() * carriers.length)];

    const newOrder: Order = {
      ...orderData,
      id: `VOLT-IND-${randomSuffix}`,
      date: new Date().toISOString(),
      trackingNumber: `BD-${trackingSuffix}`,
      carrier
    };

    setOrders((prev) => [newOrder, ...prev]);
    setLastOrder(newOrder);
    clearCart();
    setAppliedPromo(null);
    return newOrder;
  };

  const updateUserProfile = (profile: Partial<UserProfile>) => {
    setUser((prev) => (prev ? { ...prev, ...profile } : null));
    addToast('success', 'Profile updated successfully');
  };

  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);
  const openSizeGuide = () => setIsSizeGuideOpen(true);
  const closeSizeGuide = () => setIsSizeGuideOpen(false);

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        recentlyViewed,
        orders,
        user,
        toasts,
        activeView,
        selectedProductId,
        lastOrder,
        filters,
        quickViewProduct,
        isSizeGuideOpen,
        isCartDrawerOpen,
        isSearchOpen,
        isAuthModalOpen,
        appliedPromo,
        cartSubtotal,
        cartDiscount,
        cartShipping,
        cartTax,
        cartTotal,
        cartItemsCount,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        moveToCartFromWishlist,
        addRecentlyViewed,
        applyPromoCode,
        removePromoCode,
        addToast,
        removeToast,
        navigateTo,
        setFilters,
        resetFilters,
        createOrder,
        updateUserProfile,
        openQuickView,
        closeQuickView,
        openSizeGuide,
        closeSizeGuide,
        setCartDrawerOpen: setIsCartDrawerOpen,
        setSearchOpen: setIsSearchOpen,
        setAuthModalOpen: setIsAuthModalOpen
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

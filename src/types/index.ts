export type Category = 
  | 'Running'
  | 'Basketball'
  | 'Lifestyle'
  | 'Training'
  | 'Football'
  | 'Walking'
  | 'Hiking'
  | 'Kids';

export type Gender = 'Men' | 'Women' | 'Unisex' | 'Kids';

export type ShoeSize = 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ColorVariant {
  name: string;
  hex: string;
  image: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  userLocation?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: Category;
  gender: Gender;
  description: string;
  price: number; // in INR
  originalPrice: number; // in INR
  discountPercent?: number;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isMemberExclusive?: boolean;
  isOnSale?: boolean;
  isLimitedDrop?: boolean;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  images: {
    main: string;
    side: string;
    top: string;
    sole: string;
    lifestyle: string;
    detail?: string;
  };
  colors: ColorVariant[];
  availableSizes: ShoeSize[];
  features: string[];
  technology: {
    title: string;
    description: string;
  }[];
  materials: {
    upper: string;
    midsole: string;
    outsole: string;
    weight: string;
    offset: string;
  };
  tags: string[];
  reviews: Review[];
  recommendedWith?: string[]; // array of product IDs
  activityType?: 'Daily Running' | 'Race Day' | 'Trail Running' | 'Streetwear' | 'Court Performance' | 'Gym & HIIT' | 'Outdoor';
}

export interface CartItem {
  id: string; // unique item id: productId-color-size
  productId: string;
  product: Product;
  selectedColor: ColorVariant;
  selectedSize: ShoeSize;
  quantity: number;
  price: number;
}

export interface WishlistItem {
  productId: string;
  product: Product;
  addedAt: string;
}

export type SortOption = 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'rating' | 'best-selling';

export interface FilterState {
  gender: Gender[];
  category: Category[];
  sizes: ShoeSize[];
  priceRange: [number, number];
  colors: string[];
  minRating: number | null;
  features: string[];
  onSaleOnly: boolean;
  newOnly: boolean;
  searchQuery: string;
  sortBy: SortOption;
}

export interface Address {
  id: string;
  fullName: string;
  phone: string;
  street: string;
  apartment: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
  type: 'home' | 'work' | 'other';
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: Address;
  paymentMethod: 'UPI' | 'Card' | 'NetBanking' | 'COD';
  status: 'Placed' | 'Confirmed' | 'Packed' | 'Shipped' | 'Out for Delivery' | 'Delivered';
  estimatedDelivery: string;
  trackingNumber: string;
  carrier: string;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  membershipTier: 'Rookie' | 'Pro' | 'Elite';
  voltPoints: number;
  defaultSize: ShoeSize;
  preferredCategories: Category[];
  addresses: Address[];
}

export interface PromoCode {
  code: string;
  discountPercent?: number;
  discountAmount?: number;
  minOrder?: number;
  description: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  description?: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  pincode: string;
  phone: string;
  hours: string;
  features: string[];
  isFlagship?: boolean;
}

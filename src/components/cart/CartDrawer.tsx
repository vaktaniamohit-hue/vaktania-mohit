import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Tag, 
  Check, 
  Truck, 
  Heart,
  ShieldCheck
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartDrawerOpen,
    setCartDrawerOpen,
    cart,
    cartSubtotal,
    cartDiscount,
    cartShipping,
    cartTotal,
    cartItemsCount,
    removeFromCart,
    updateCartQuantity,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    toggleWishlist,
    navigateTo
  } = useShop();

  const [promoInput, setPromoInput] = useState('');

  if (!isCartDrawerOpen) return null;

  const freeShippingThreshold = 4999;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingProgress = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput) {
      applyPromoCode(promoInput);
      setPromoInput('');
    }
  };

  const handleProceedToCheckout = () => {
    setCartDrawerOpen(false);
    navigateTo('checkout');
  };

  const handleViewFullCart = () => {
    setCartDrawerOpen(false);
    navigateTo('cart');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => setCartDrawerOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-black flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-black" />
              <h3 className="text-xl font-black uppercase tracking-tight text-black">
                YOUR BAG ({cartItemsCount})
              </h3>
            </div>
            <button
              onClick={() => setCartDrawerOpen(false)}
              className="p-1.5 text-black hover:bg-black hover:text-white border border-black transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="bg-black text-white p-3.5 text-xs space-y-2 border-b border-black">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider">
                <Truck className="w-3.5 h-3.5 text-[#ccff00]" />
                {remainingForFreeShipping === 0 ? (
                  <span className="text-[#ccff00]">You've unlocked FREE Express Shipping!</span>
                ) : (
                  <span>Add <strong className="text-[#ccff00]">₹{remainingForFreeShipping.toLocaleString('en-IN')}</strong> for Free Express</span>
                )}
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">{freeShippingProgress}%</span>
            </div>
            <div className="w-full h-1 bg-zinc-800 overflow-hidden">
              <div
                className="h-full bg-[#ccff00] transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-black/10 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 border border-black bg-zinc-100 flex items-center justify-center text-black">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-black uppercase tracking-tight text-black">Your bag is empty</p>
                  <p className="text-xs text-zinc-500 max-w-xs">
                    Explore our latest marathon drops and court sneakers engineered for performance.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setCartDrawerOpen(false);
                    navigateTo('shop');
                  }}
                  className="px-6 py-3 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors cursor-pointer border border-black"
                >
                  Shop New Arrivals
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex gap-3.5">
                  {/* Thumbnail */}
                  <div className="w-20 h-20 bg-zinc-50 overflow-hidden shrink-0 border border-black flex items-center justify-center p-1">
                    <img
                      src={item.selectedColor.image || item.product.images.main}
                      alt={item.product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-black uppercase tracking-wider text-black truncate">
                          {item.product.name}
                        </h4>
                        <span className="text-xs font-black italic text-black shrink-0">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mt-0.5">
                        UK {item.selectedSize} • {item.selectedColor.name}
                      </p>
                    </div>

                    {/* Quantity Stepper & Delete */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-black bg-white">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-black hover:bg-zinc-100 cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-black text-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-black hover:bg-zinc-100 cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleWishlist(item.productId)}
                          className="p-1 text-zinc-400 hover:text-black transition-colors cursor-pointer"
                          title="Save for later"
                        >
                          <Heart className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 text-zinc-400 hover:text-black transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Order Summary */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-black space-y-4">
              
              {/* Promo Code input */}
              {appliedPromo ? (
                <div className="flex items-center justify-between p-2.5 bg-zinc-100 border border-black text-xs">
                  <div className="flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-black" />
                    <span className="font-black uppercase tracking-wider text-black">{appliedPromo.code}</span>
                    <span className="text-zinc-600 font-bold">(-₹{cartDiscount.toLocaleString('en-IN')})</span>
                  </div>
                  <button
                    onClick={removePromoCode}
                    className="text-xs font-black uppercase tracking-wider text-black underline cursor-pointer hover:text-zinc-600"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-1.5">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="PROMO CODE (E.G. VOLT10)"
                    className="flex-1 text-xs px-3 py-2 bg-white border border-black uppercase font-bold focus:outline-hidden"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white text-xs font-black uppercase tracking-wider hover:bg-zinc-800 transition-colors cursor-pointer shrink-0 border border-black"
                  >
                    Apply
                  </button>
                </form>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-black">
                <div className="flex justify-between font-medium">
                  <span className="uppercase text-[10px] tracking-wider text-zinc-500 font-bold">Subtotal</span>
                  <span className="font-bold">₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {cartDiscount > 0 && (
                  <div className="flex justify-between font-bold text-red-600">
                    <span className="uppercase text-[10px] tracking-wider">Discount</span>
                    <span>-₹{cartDiscount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between font-medium">
                  <span className="uppercase text-[10px] tracking-wider text-zinc-500 font-bold">Express Delivery</span>
                  <span className="font-bold">
                    {cartShipping === 0 ? <span className="text-black font-black uppercase tracking-wider">FREE</span> : `₹${cartShipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-zinc-400 text-[10px] uppercase tracking-wider font-bold">
                  <span>Taxes (GST)</span>
                  <span>Included</span>
                </div>
                <div className="flex justify-between text-base font-black text-black pt-2 border-t border-black uppercase tracking-tight">
                  <span>Total</span>
                  <span className="italic">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full py-3.5 bg-black hover:bg-zinc-800 text-white text-xs font-black tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer border border-black"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 text-[#ccff00]" />
                </button>
                <button
                  onClick={handleViewFullCart}
                  className="w-full py-2 text-xs font-black uppercase tracking-wider text-black underline hover:text-zinc-600 transition-colors cursor-pointer text-center"
                >
                  View Complete Bag & Sizing Notes
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wider text-zinc-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-black" />
                <span>30-Day Guaranteed Returns • Verified Genuine</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

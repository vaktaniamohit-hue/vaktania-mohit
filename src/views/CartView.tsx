import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  Heart, 
  Tag, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/product/ProductCard';

export const CartView: React.FC = () => {
  const {
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
    products,
    navigateTo
  } = useShop();

  const [promoInput, setPromoInput] = useState('');

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

  const trendingPicks = products.filter((p) => p.isBestSeller).slice(0, 4);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="w-20 h-20 border border-black bg-zinc-100 flex items-center justify-center mx-auto text-black">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">YOUR BAG IS EMPTY</h1>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto">
            There are no items in your shopping bag. Explore our championship marathon racers, court shoes, and daily comfort trainers.
          </p>
        </div>
        <button
          onClick={() => navigateTo('shop')}
          className="px-8 py-4 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors border border-black cursor-pointer"
        >
          Explore VOLT Footwear Lineup
        </button>

        {/* Recommended Products */}
        <div className="pt-12 text-left space-y-6 border-t border-black">
          <h3 className="text-2xl font-black uppercase tracking-tight text-black">RECOMMENDED FOR YOU</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trendingPicks.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Header */}
      <div className="border-b border-black pb-4">
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
          SHOPPING BAG ({cartItemsCount})
        </h1>
        <p className="text-xs text-zinc-500 mt-1 uppercase font-bold tracking-wider">
          Review selected sizes, colors, and promotional discounts before proceeding to checkout.
        </p>
      </div>

      {/* Main Grid: Bag Items vs Order Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT: Items List */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Free Shipping Alert Banner */}
          <div className="p-4 bg-black text-white border border-black space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 font-black uppercase tracking-wider text-[11px]">
                <Truck className="w-4 h-4 text-[#ccff00]" />
                {remainingForFreeShipping === 0 ? (
                  <span className="text-[#ccff00]">You've unlocked FREE Express Shipping!</span>
                ) : (
                  <span>Add <strong className="text-[#ccff00]">₹{remainingForFreeShipping.toLocaleString('en-IN')}</strong> for FREE Express</span>
                )}
              </span>
              <span className="text-zinc-400 font-mono text-[11px]">{freeShippingProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 overflow-hidden">
              <div
                className="h-full bg-[#ccff00] transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Line items list */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 bg-white border border-black flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-24 h-24 bg-[#f8f8f8] overflow-hidden shrink-0 border border-black flex items-center justify-center p-2">
                    <img
                      src={item.selectedColor.image || item.product.images.main}
                      alt={item.product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                      {item.product.gender}'s {item.product.category}
                    </p>
                    <h3
                      onClick={() => navigateTo('product', { productId: item.productId })}
                      className="font-black uppercase tracking-wider text-sm text-black hover:underline cursor-pointer"
                    >
                      {item.product.name}
                    </h3>
                    <p className="text-xs font-bold text-zinc-600 uppercase tracking-wider">
                      UK Size: <strong className="text-black">{item.selectedSize}</strong> • Color: <strong className="text-black">{item.selectedColor.name}</strong>
                    </p>
                    <p className="text-xs font-black italic text-black pt-1 sm:hidden">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>

                {/* Right controls: Qty & Actions */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-black/10">
                  <span className="hidden sm:inline-block text-base font-black italic text-black">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </span>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-black bg-white">
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 text-black hover:bg-zinc-100 cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2.5 text-xs font-black text-black">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 text-black hover:bg-zinc-100 cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => toggleWishlist(item.productId)}
                      className="p-2 text-zinc-400 hover:text-black transition-colors cursor-pointer border border-black/20 hover:border-black"
                      title="Save for Later"
                    >
                      <Heart className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-zinc-400 hover:text-black transition-colors cursor-pointer border border-black/20 hover:border-black"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT: Order Summary Card */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-black space-y-6">
          <h2 className="text-2xl font-black uppercase tracking-tight text-black">
            ORDER SUMMARY
          </h2>

          {/* Promo Code Input */}
          <div className="space-y-2">
            {appliedPromo ? (
              <div className="flex items-center justify-between p-3 bg-zinc-100 border border-black text-xs">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-black" />
                  <div>
                    <p className="font-black uppercase tracking-wider text-black">{appliedPromo.code} APPLIED</p>
                    <p className="text-[11px] text-zinc-600">{appliedPromo.description}</p>
                  </div>
                </div>
                <button
                  onClick={removePromoCode}
                  className="text-xs font-black uppercase tracking-wider text-black underline cursor-pointer hover:text-zinc-600"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="PROMO CODE (E.G. VOLT10)"
                  className="flex-1 text-xs px-3.5 py-2.5 bg-white border border-black uppercase font-bold focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-black text-white text-xs font-black uppercase tracking-wider hover:bg-zinc-800 transition-colors cursor-pointer shrink-0 border border-black"
                >
                  Apply
                </button>
              </form>
            )}
          </div>

          {/* Line by line price calculations */}
          <div className="space-y-2.5 text-xs text-black border-t border-b border-black py-4">
            <div className="flex justify-between">
              <span className="uppercase text-[10px] font-bold tracking-wider text-zinc-500">Subtotal ({cartItemsCount} items)</span>
              <span className="font-bold">₹{cartSubtotal.toLocaleString('en-IN')}</span>
            </div>
            {cartDiscount > 0 && (
              <div className="flex justify-between text-red-600 font-bold">
                <span className="uppercase text-[10px] tracking-wider">Promo Code Discount</span>
                <span>-₹{cartDiscount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="uppercase text-[10px] font-bold tracking-wider text-zinc-500">Estimated Express Delivery</span>
              <span className="font-bold">
                {cartShipping === 0 ? <span className="text-black font-black uppercase tracking-wider">FREE</span> : `₹${cartShipping}`}
              </span>
            </div>
            <div className="flex justify-between text-zinc-400 text-[10px] uppercase tracking-wider font-bold">
              <span>Goods & Services Tax (GST 18%)</span>
              <span>Included</span>
            </div>
            <div className="flex justify-between text-base font-black text-black pt-3 border-t border-black uppercase tracking-tight">
              <span>Total</span>
              <span className="text-xl italic">₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Checkout CTA */}
          <div className="space-y-3">
            <button
              onClick={() => navigateTo('checkout')}
              className="w-full py-4 bg-black hover:bg-zinc-800 text-white text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer border border-black"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#ccff00]" />
            </button>

            <button
              onClick={() => navigateTo('shop')}
              className="w-full py-2.5 text-xs font-black uppercase tracking-wider text-black underline hover:text-zinc-600 transition-colors cursor-pointer text-center"
            >
              Continue Shopping
            </button>
          </div>

          {/* Perks Guarantee */}
          <div className="space-y-2 pt-2 border-t border-black text-xs text-zinc-600">
            <div className="flex items-center gap-2 font-bold text-[11px] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-black" />
              <span>30-Day Zero-Hassle Return & Exchange Guarantee</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-[11px] uppercase tracking-wider">
              <Truck className="w-4 h-4 text-black" />
              <span>Dispatches via BlueDart Express Air</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

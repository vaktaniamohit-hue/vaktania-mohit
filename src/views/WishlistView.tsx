import React from 'react';
import { Heart, ShoppingBag, Trash2, ArrowRight, Star } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/product/ProductCard';

export const WishlistView: React.FC = () => {
  const { wishlist, products, toggleWishlist, moveToCartFromWishlist, navigateTo } = useShop();

  const savedProducts = wishlist
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  const trendingProducts = products.filter((p) => p.isBestSeller).slice(0, 4);

  if (savedProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="w-20 h-20 border border-black bg-zinc-100 flex items-center justify-center mx-auto text-black">
          <Heart className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">YOUR WISHLIST IS EMPTY</h1>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto">
            Save shoes you want to track, monitor limited drop release dates, or compare colorways before making your move.
          </p>
        </div>
        <button
          onClick={() => navigateTo('shop')}
          className="px-8 py-4 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors border border-black cursor-pointer"
        >
          Explore All Performance Shoes
        </button>

        <div className="pt-12 text-left space-y-6 border-t border-black">
          <h3 className="text-2xl font-black uppercase tracking-tight text-black">POPULAR RIGHT NOW</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trendingProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <div className="border-b border-black pb-4 flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
            SAVED WISHLIST ({savedProducts.length})
          </h1>
          <p className="text-xs text-zinc-500 mt-1 uppercase font-bold tracking-wider">
            Shoes saved for your upcoming training cycles, race days, and street rotations.
          </p>
        </div>
        <button
          onClick={() => navigateTo('shop')}
          className="text-xs font-black uppercase tracking-wider text-black underline flex items-center gap-1 cursor-pointer hover:text-zinc-600"
        >
          <span>Continue Shopping</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {savedProducts.map((product) => product && (
          <div
            key={product.id}
            className="group relative flex flex-col bg-white border border-black overflow-hidden hover:shadow-lg transition-all"
          >
            {/* Image */}
            <div
              onClick={() => navigateTo('product', { productId: product.id })}
              className="aspect-square bg-[#f8f8f8] relative cursor-pointer overflow-hidden border-b border-black flex items-center justify-center p-3"
            >
              <img
                src={product.images.main}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(product.id);
                }}
                className="absolute top-2.5 right-2.5 p-2 bg-white text-black border border-black cursor-pointer hover:bg-black hover:text-white transition-colors"
                title="Remove from Wishlist"
              >
                <Heart className="w-3.5 h-3.5 fill-black" />
              </button>
            </div>

            {/* Info */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  {product.gender}'s {product.category}
                </p>
                <h3
                  onClick={() => navigateTo('product', { productId: product.id })}
                  className="font-black uppercase tracking-wider text-xs sm:text-sm text-black hover:underline line-clamp-1 cursor-pointer"
                >
                  {product.name}
                </h3>
                <p className="text-xs font-black italic text-black">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => moveToCartFromWishlist(product.id)}
                className="w-full py-2.5 bg-black hover:bg-zinc-800 text-white text-xs font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-black"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>Move to Bag</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

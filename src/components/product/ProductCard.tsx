import React, { useState } from 'react';
import { Heart, Eye, Star, Plus, Check } from 'lucide-react';
import { Product, ColorVariant, ShoeSize } from '../../types';
import { useShop } from '../../context/ShopContext';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, compact = false }) => {
  const { 
    isInWishlist, 
    toggleWishlist, 
    addToCart, 
    openQuickView, 
    navigateTo 
  } = useShop();

  const [selectedColor, setSelectedColor] = useState<ColorVariant>(product.colors[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);

  const isSaved = isInWishlist(product.id);

  // Dynamic image: selected color's image, or secondary image on hover
  const displayImage = isHovered && product.images.side
    ? product.images.side
    : selectedColor.image || product.images.main;

  const handleCardClick = () => {
    navigateTo('product', { productId: product.id });
  };

  const handleQuickAddSize = (size: ShoeSize, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedColor, size, 1);
    setIsQuickAddOpen(false);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsQuickAddOpen(false);
      }}
      onClick={handleCardClick}
      className="group relative flex flex-col bg-white border border-black transition-colors duration-200 cursor-pointer overflow-hidden"
    >
      {/* Product Image Area */}
      <div className="relative w-full aspect-square bg-[#f8f8f8] border-b border-black overflow-hidden flex items-center justify-center p-4">
        
        {/* Main/Hover Image */}
        <img
          src={displayImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.isLimitedDrop && (
            <span className="bg-black text-[#ccff00] text-[9px] font-black px-2 py-0.5 tracking-wider uppercase border border-black">
              LIMITED DROP
            </span>
          )}
          {product.isMemberExclusive && !product.isLimitedDrop && (
            <span className="bg-[#ccff00] text-black text-[9px] font-black px-2 py-0.5 tracking-wider uppercase border border-black">
              MEMBER PASS
            </span>
          )}
          {product.discountPercent && (
            <span className="bg-red-600 text-white text-[9px] font-black px-2 py-0.5 tracking-wide uppercase border border-black">
              -{product.discountPercent}%
            </span>
          )}
          {product.isNewArrival && !product.discountPercent && (
            <span className="bg-white text-black border border-black text-[9px] font-black px-2 py-0.5 tracking-wide uppercase">
              NEW
            </span>
          )}
          {product.isBestSeller && !product.isNewArrival && !product.discountPercent && (
            <span className="bg-black text-white text-[9px] font-black px-2 py-0.5 tracking-wide uppercase border border-black">
              BESTSELLER
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 flex items-center justify-center transition-all duration-200 cursor-pointer border border-black ${
            isSaved 
              ? 'bg-[#ccff00] text-black' 
              : 'bg-white text-black hover:bg-black hover:text-white'
          }`}
          title={isSaved ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-black' : ''}`} />
        </button>

        {/* Quick View Button (Desktop Hover) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            openQuickView(product);
          }}
          className="hidden md:flex absolute bottom-2.5 right-2.5 z-10 px-3 py-1.5 bg-black hover:bg-zinc-800 text-white text-[10px] font-black uppercase tracking-widest items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer border border-black"
        >
          <Eye className="w-3.5 h-3.5 text-[#ccff00]" />
          <span>Quick View</span>
        </button>

        {/* Quick Add Size Popover Overlay */}
        {isQuickAddOpen ? (
          <div 
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-0 bottom-0 bg-white p-3 border-t border-black z-20 animate-in slide-in-from-bottom duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-black">Select UK Size:</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsQuickAddOpen(false);
                }}
                className="text-[9px] font-bold uppercase tracking-wider text-zinc-500 hover:text-black"
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {product.availableSizes.map((size) => (
                <button
                  key={size}
                  onClick={(e) => handleQuickAddSize(size, e)}
                  className="py-1 text-[10px] font-black bg-zinc-100 hover:bg-black hover:text-white border border-black transition-colors cursor-pointer"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Quick Add Trigger Button (Mobile/Desktop) */
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsQuickAddOpen(true);
            }}
            className="md:hidden absolute bottom-2.5 left-2.5 z-10 px-2.5 py-1 bg-black text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1 border border-black cursor-pointer"
          >
            <Plus className="w-3 h-3 text-[#ccff00]" />
            <span>Add</span>
          </button>
        )}

      </div>

      {/* Product Content Details */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2">
        
        {/* Colors Swatches & Category */}
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
            {product.gender}'s {product.category}
          </p>

          {/* Color Dots */}
          {product.colors.length > 1 && (
            <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-3 h-3 rounded-full border transition-transform cursor-pointer ${
                    selectedColor.name === color.name ? 'scale-125 border-black ring-1 ring-black' : 'border-zinc-300'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Title */}
        <div>
          <h3 className="font-black text-xs sm:text-sm text-black uppercase tracking-tight line-clamp-1 group-hover:text-zinc-700">
            {product.name}
          </h3>
          <p className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">
            {product.tagline}
          </p>
        </div>

        {/* Rating & Price */}
        <div className="pt-2 flex items-baseline justify-between border-t border-black/10">
          <div className="flex items-baseline gap-2">
            <span className="text-sm sm:text-base font-black italic text-black tracking-tight">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-zinc-400 line-through font-bold italic">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-[10px] text-zinc-600 font-bold uppercase tracking-wider">
            <Star className="w-3 h-3 text-black fill-black" />
            <span>{product.rating}</span>
            <span className="text-zinc-400 font-normal">({product.reviewCount})</span>
          </div>
        </div>

      </div>

    </div>
  );
};

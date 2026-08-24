import React, { useState, useEffect } from 'react';
import { X, Star, Heart, Check, ArrowRight, ShieldCheck, Ruler } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ColorVariant, ShoeSize } from '../../types';

export const QuickViewModal: React.FC = () => {
  const { 
    quickViewProduct, 
    closeQuickView, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    navigateTo, 
    openSizeGuide 
  } = useShop();

  const product = quickViewProduct;

  const [selectedColor, setSelectedColor] = useState<ColorVariant | null>(null);
  const [selectedSize, setSelectedSize] = useState<ShoeSize | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0] || null);
      setSelectedSize(product.availableSizes[0] || null);
      setActiveImage(product.images.main);
    }
  }, [product]);

  if (!product || !selectedColor) return null;

  const isSaved = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedColor, selectedSize, 1);
    closeQuickView();
  };

  const handleColorChange = (c: ColorVariant) => {
    setSelectedColor(c);
    setActiveImage(c.image || product.images.main);
  };

  const handleViewFullPage = () => {
    closeQuickView();
    navigateTo('product', { productId: product.id });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-black animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <div className="flex justify-end p-4 pb-0">
          <button
            onClick={closeQuickView}
            className="p-1.5 text-black hover:bg-black hover:text-white border border-black transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 pt-2">
          
          {/* Left: Product Images */}
          <div className="space-y-3">
            <div className="w-full aspect-square bg-[#f8f8f8] border border-black overflow-hidden relative flex items-center justify-center p-4">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-contain transition-all duration-300"
              />
              {product.discountPercent && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 border border-black">
                  -{product.discountPercent}% OFF
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-1.5">
              {[
                product.images.main,
                product.images.side,
                product.images.top,
                product.images.sole
              ].map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square bg-[#f8f8f8] border transition-all cursor-pointer p-1 flex items-center justify-center ${
                    activeImage === img ? 'border-black ring-1 ring-black' : 'border-black/30 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Buy Info */}
          <div className="space-y-5">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                {product.gender}'s {product.category}
              </p>
              <h2 className="text-2xl font-black uppercase tracking-tight text-black mt-0.5">
                {product.name}
              </h2>
              <p className="text-xs text-zinc-600 mt-1">{product.tagline}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-black">
                  <Star className="w-3.5 h-3.5 fill-black" />
                  <span className="text-xs font-black ml-1">{product.rating}</span>
                </div>
                <span className="text-zinc-400">•</span>
                <span className="text-[10px] font-black uppercase tracking-wider text-black underline cursor-pointer hover:text-zinc-600" onClick={handleViewFullPage}>
                  {product.reviewCount} verified reviews
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2.5 pb-2 border-b border-black">
              <span className="text-2xl font-black italic text-black">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm font-bold italic text-zinc-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">All taxes included</span>
            </div>

            {/* Color Swatches */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider">
                <span className="text-black">Color: <span className="font-bold text-zinc-600">{selectedColor.name}</span></span>
              </div>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleColorChange(color)}
                    className={`w-7 h-7 border transition-all p-0.5 flex items-center justify-center cursor-pointer ${
                      selectedColor.name === color.name ? 'border-black ring-2 ring-black' : 'border-black/30'
                    }`}
                    title={color.name}
                  >
                    <span className="w-full h-full" style={{ backgroundColor: color.hex }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider">
                <span className="text-black">Select UK Size:</span>
                <button
                  onClick={openSizeGuide}
                  className="text-black hover:underline flex items-center gap-1 cursor-pointer font-bold text-[10px]"
                >
                  <Ruler className="w-3 h-3" />
                  <span>Size Guide</span>
                </button>
              </div>

              <div className="grid grid-cols-4 gap-1.5">
                {product.availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-xs font-black uppercase tracking-wider border transition-all cursor-pointer ${
                      selectedSize === size
                        ? 'bg-black text-white border-black ring-1 ring-black'
                        : 'bg-white text-black border-black/30 hover:border-black'
                    }`}
                  >
                    UK {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <div className="flex gap-2">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className="flex-1 py-3 bg-black hover:bg-zinc-800 disabled:bg-zinc-300 text-white text-xs font-black tracking-widest uppercase transition-colors cursor-pointer border border-black"
                >
                  Add to Bag (₹{product.price.toLocaleString('en-IN')})
                </button>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3 border transition-colors cursor-pointer ${
                    isSaved
                      ? 'border-black bg-[#ccff00] text-black'
                      : 'border-black bg-white text-black hover:bg-black hover:text-white'
                  }`}
                  title={isSaved ? 'Remove from Wishlist' : 'Add to Wishlist'}
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-black' : ''}`} />
                </button>
              </div>

              <button
                onClick={handleViewFullPage}
                className="w-full py-2 text-xs font-black uppercase tracking-wider text-black hover:text-zinc-600 underline transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>View Full Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  Zap, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  Ruler, 
  MapPin, 
  Check, 
  ArrowRight, 
  ChevronRight,
  Flame,
  Clock,
  Sparkles,
  Share2
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ColorVariant, ShoeSize, Product } from '../types';
import { ProductCard } from '../components/product/ProductCard';

export const ProductDetailView: React.FC = () => {
  const { 
    products, 
    selectedProductId, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    openSizeGuide, 
    navigateTo, 
    addToast 
  } = useShop();

  const product = products.find((p) => p.id === selectedProductId) || products[0];

  const [selectedColor, setSelectedColor] = useState<ColorVariant>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<ShoeSize | null>(product.availableSizes[0] || 9);
  const [activeImage, setActiveImage] = useState<string>(product.images.main);
  const [pincodeInput, setPincodeInput] = useState<string>('400050');
  const [pincodeResult, setPincodeResult] = useState<string | null>('Express Delivery by Tomorrow 8 PM to Bandra West, Mumbai. Free Shipping.');
  const [activeTab, setActiveTab] = useState<'specs' | 'tech' | 'reviews'>('specs');
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.availableSizes[0] || 9);
      setActiveImage(product.images.main);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [product]);

  if (!product) return null;

  const isSaved = isInWishlist(product.id);

  const handleColorChange = (c: ColorVariant) => {
    setSelectedColor(c);
    setActiveImage(c.image || product.images.main);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      addToast('warning', 'Please choose your UK shoe size');
      return;
    }
    addToCart(product, selectedColor, selectedSize, 1);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      addToast('warning', 'Please choose your UK shoe size');
      return;
    }
    addToCart(product, selectedColor, selectedSize, 1);
    navigateTo('checkout');
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincodeInput || pincodeInput.length !== 6) {
      addToast('warning', 'Please enter a valid 6-digit Indian PIN code');
      return;
    }
    const metroCodes = ['400', '110', '560', '500', '600', '411', '700'];
    const isMetro = metroCodes.some((prefix) => pincodeInput.startsWith(prefix));
    
    if (isMetro) {
      setPincodeResult(`Express Delivery guaranteed within 24-48 Hours to PIN ${pincodeInput}. Free Shipping & COD Available.`);
    } else {
      setPincodeResult(`Standard Delivery in 3-4 Business Days to PIN ${pincodeInput}. Free Shipping & COD Available.`);
    }
    addToast('success', 'PIN Code Serviceable', 'Express courier network active for this location.');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast('success', 'Link copied to clipboard', product.name);
    }
  };

  // Related products from same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs text-zinc-500">
        <button onClick={() => navigateTo('home')} className="hover:text-black cursor-pointer">
          Home
        </button>
        <ChevronRight className="w-3 h-3 text-zinc-400" />
        <button onClick={() => navigateTo('shop')} className="hover:text-black cursor-pointer">
          Shop
        </button>
        <ChevronRight className="w-3 h-3 text-zinc-400" />
        <button 
          onClick={() => navigateTo('shop', { category: product.category })} 
          className="hover:text-black cursor-pointer"
        >
          {product.category}
        </button>
        <ChevronRight className="w-3 h-3 text-zinc-400" />
        <span className="text-zinc-900 font-bold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT: Multi-Angle High Res Images */}
        <div className="lg:col-span-7 space-y-4 sticky top-24">
          
          {/* Main Large Display */}
          <div className="relative w-full aspect-square bg-[#f8f8f8] overflow-hidden border border-black group p-6 flex items-center justify-center">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
              {product.isLimitedDrop && (
                <span className="bg-black text-[#ccff00] text-[10px] font-black px-2.5 py-1 uppercase tracking-widest border border-black">
                  LIMITED DROP
                </span>
              )}
              {product.discountPercent && (
                <span className="bg-red-600 text-white text-[10px] font-black px-2.5 py-1 uppercase tracking-widest border border-black">
                  -{product.discountPercent}% OFF
                </span>
              )}
              {product.isNewArrival && !product.discountPercent && (
                <span className="bg-white text-black border border-black text-[10px] font-black px-2.5 py-1 uppercase tracking-widest">
                  NEW ARRIVAL
                </span>
              )}
            </div>

            {/* Share action */}
            <button
              onClick={handleShare}
              className="absolute top-4 right-4 w-9 h-9 bg-white text-black border border-black hover:bg-black hover:text-white flex items-center justify-center cursor-pointer transition-colors"
              title="Share this sneaker"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { img: product.images.main, label: 'Hero 3/4' },
              { img: product.images.side, label: 'Lateral' },
              { img: product.images.top, label: 'Top View' },
              { img: product.images.sole, label: 'Outsole' }
            ].map((view, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(view.img)}
                className={`group relative aspect-square bg-[#f8f8f8] overflow-hidden border transition-all cursor-pointer p-2 flex items-center justify-center ${
                  activeImage === view.img ? 'border-black ring-2 ring-black' : 'border-black/20 opacity-75 hover:opacity-100 hover:border-black'
                }`}
              >
                <img src={view.img} alt="" className="w-full h-full object-contain" />
                <span className="absolute bottom-1 left-1 bg-black text-[8px] font-black uppercase tracking-wider text-white px-1.5 py-0.5">
                  {view.label}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* RIGHT: Product Buy Box & Configuration */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Header Title & Tagline */}
          <div className="space-y-1.5 border-b border-black pb-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                {product.gender}'s {product.category}
              </span>
              <div className="flex items-center gap-1 text-[11px] font-black text-black uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 text-black fill-black" />
                <span>{product.rating}</span>
                <span className="text-zinc-400 font-medium">({product.reviewCount})</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black leading-none">
              {product.name}
            </h1>
            <p className="text-xs text-zinc-600 font-medium">
              {product.tagline}
            </p>
          </div>

          {/* Pricing Details */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black italic tracking-tight text-black">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-base font-bold italic text-zinc-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              {product.discountPercent && (
                <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2 py-0.5">
                  Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
              MRP inclusive of all taxes. Free express shipping across India.
            </p>
          </div>

          {/* Colorway Selector */}
          <div className="space-y-2.5 pt-2">
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider">
              <span className="text-black">
                Colorway: <span className="font-bold text-zinc-600">{selectedColor.name}</span>
              </span>
              <span className="text-[10px] text-zinc-400">{product.colors.length} Colorways</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleColorChange(color)}
                  className={`flex items-center gap-2 px-3 py-1.5 border transition-all cursor-pointer ${
                    selectedColor.name === color.name
                      ? 'border-black bg-black text-white'
                      : 'border-black/30 bg-white text-black hover:border-black'
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 border border-black/30 shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-xs font-black uppercase tracking-wider">{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="space-y-2.5 pt-2">
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider">
              <span className="text-black">Select UK Size:</span>
              <button
                onClick={openSizeGuide}
                className="text-black hover:text-zinc-600 flex items-center gap-1 cursor-pointer underline font-bold"
              >
                <Ruler className="w-3.5 h-3.5" />
                <span>Size Guide</span>
              </button>
            </div>

            <div className="grid grid-cols-4 gap-1.5">
              {[5, 6, 7, 8, 9, 10, 11, 12].map((size) => {
                const isAvailable = product.availableSizes.includes(size as ShoeSize);
                const isSelected = selectedSize === size;

                return (
                  <button
                    key={size}
                    disabled={!isAvailable}
                    onClick={() => setSelectedSize(size as ShoeSize)}
                    className={`py-3 text-xs font-black uppercase tracking-wider border transition-all cursor-pointer flex flex-col items-center justify-center ${
                      !isAvailable
                        ? 'bg-zinc-100 text-zinc-300 border-zinc-200 line-through cursor-not-allowed opacity-50'
                        : isSelected
                        ? 'bg-black text-white border-black ring-1 ring-black'
                        : 'bg-white text-black border-black/30 hover:border-black'
                    }`}
                  >
                    <span>UK {size}</span>
                    {isAvailable && (
                      <span className={`text-[8px] font-bold uppercase tracking-widest ${isSelected ? 'text-[#ccff00]' : 'text-zinc-400'}`}>
                        In Stock
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-2.5 pt-3">
            <div className="flex gap-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-black hover:bg-zinc-800 text-white text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer border border-black"
              >
                <ShoppingBag className="w-4 h-4 text-[#ccff00]" />
                <span>Add to Bag</span>
              </button>

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-4 border transition-colors cursor-pointer ${
                  isSaved
                    ? 'border-black bg-[#ccff00] text-black'
                    : 'border-black bg-white text-black hover:bg-black hover:text-white'
                }`}
                title={isSaved ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                <Heart className={`w-5 h-5 ${isSaved ? 'fill-black' : ''}`} />
              </button>
            </div>

            <button
              onClick={handleBuyNow}
              className="w-full py-3.5 bg-[#ccff00] hover:bg-lime-400 text-black text-xs font-black uppercase tracking-widest transition-colors cursor-pointer border border-black"
            >
              Instant Express Checkout
            </button>
          </div>

          {/* India Pincode Delivery Checker */}
          <div className="p-4 bg-white border border-black space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black">
              <MapPin className="w-4 h-4 text-black" />
              <span>Check Delivery Speed to Your PIN</span>
            </div>

            <form onSubmit={handleCheckPincode} className="flex gap-1.5">
              <input
                type="text"
                maxLength={6}
                value={pincodeInput}
                onChange={(e) => setPincodeInput(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter 6-digit Indian PIN"
                className="flex-1 text-xs font-bold px-3.5 py-2.5 bg-white border border-black focus:outline-hidden focus:ring-1 focus:ring-black"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-black text-white text-xs font-black uppercase tracking-wider hover:bg-zinc-800 transition-colors cursor-pointer shrink-0 border border-black"
              >
                Check
              </button>
            </form>

            {pincodeResult && (
              <p className="text-xs text-black leading-relaxed font-medium bg-zinc-50 p-2.5 border border-black/20 flex items-start gap-2">
                <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <span>{pincodeResult}</span>
              </p>
            )}
          </div>

          {/* Value Perks */}
          <div className="grid grid-cols-3 gap-2 pt-1 text-center text-[10px] text-zinc-600">
            <div className="p-3 bg-white border border-black space-y-1">
              <Truck className="w-4 h-4 text-black mx-auto" />
              <p className="font-black uppercase tracking-wider text-black">Free Express</p>
              <p className="text-[9px] text-zinc-500">Over ₹4,999</p>
            </div>
            <div className="p-3 bg-white border border-black space-y-1">
              <RotateCcw className="w-4 h-4 text-black mx-auto" />
              <p className="font-black uppercase tracking-wider text-black">30-Day Returns</p>
              <p className="text-[9px] text-zinc-500">Free Pickup</p>
            </div>
            <div className="p-3 bg-white border border-black space-y-1">
              <ShieldCheck className="w-4 h-4 text-black mx-auto" />
              <p className="font-black uppercase tracking-wider text-black">100% Genuine</p>
              <p className="text-[9px] text-zinc-500">VOLT Tech</p>
            </div>
          </div>

        </div>

      </div>

      {/* Deep-Dive Specifications & Technology Tabs */}
      <section className="pt-8 border-t border-black space-y-6">
        
        {/* Tabs navigation */}
        <div className="flex border-b border-black">
          {[
            { id: 'specs' as const, label: 'Performance Specs' },
            { id: 'tech' as const, label: 'Propulsion Tech' },
            { id: 'reviews' as const, label: `Athlete Reviews (${product.reviewCount})` }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-4 sm:px-6 text-xs sm:text-sm font-black uppercase tracking-widest transition-colors cursor-pointer border-t border-x ${
                activeTab === tab.id
                  ? 'border-black bg-black text-white'
                  : 'border-transparent text-zinc-500 hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Specs Grid */}
        {activeTab === 'specs' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 animate-in fade-in duration-200">
            <div className="p-4 bg-white border border-black">
              <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Shoe Weight</p>
              <p className="text-xl font-black italic text-black mt-1">{product.specs.weight}</p>
            </div>
            <div className="p-4 bg-white border border-black">
              <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Heel-to-Toe Drop</p>
              <p className="text-xl font-black italic text-black mt-1">{product.specs.heelDrop}</p>
            </div>
            <div className="p-4 bg-white border border-black">
              <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Cushioning</p>
              <p className="text-xs font-black uppercase tracking-wider text-black mt-1">{product.specs.cushioning}</p>
            </div>
            <div className="p-4 bg-white border border-black">
              <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Arch Support</p>
              <p className="text-xs font-black uppercase tracking-wider text-black mt-1">{product.specs.archSupport}</p>
            </div>
            <div className="p-4 bg-white border border-black">
              <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Pronation</p>
              <p className="text-xs font-black uppercase tracking-wider text-black mt-1">{product.specs.pronation}</p>
            </div>
            <div className="p-4 bg-white border border-black">
              <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Best Terrain</p>
              <p className="text-xs font-black uppercase tracking-wider text-black mt-1">{product.specs.terrain}</p>
            </div>
          </div>
        )}

        {/* Tab 2: Technology Deep-Dive */}
        {activeTab === 'tech' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            <div className="p-6 bg-black text-white border border-black space-y-3">
              <div className="flex items-center gap-2 text-[#ccff00]">
                <Zap className="w-5 h-5" />
                <h4 className="text-xl font-black uppercase tracking-tight">AEROFOAM+ MATRIX</h4>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Supercritical gas-infused PEBA formulation with closed micro-cellular structure. Retains 98% of rebound potential after 500 kilometers of high-impact road pounding.
              </p>
            </div>

            <div className="p-6 bg-black text-white border border-black space-y-3">
              <div className="flex items-center gap-2 text-[#ccff00]">
                <Flame className="w-5 h-5" />
                <h4 className="text-xl font-black uppercase tracking-tight">3D CARBON ROCKER</h4>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Full-length spoon-shaped carbon fiber lever engineered to smooth transition from midfoot strike to explosive toe-off, minimizing calf strain during tempo runs.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Verified Athlete Reviews */}
        {activeTab === 'reviews' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            {/* Reviews Scorecard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white border border-black items-center">
              <div className="text-center space-y-1">
                <p className="text-5xl font-black italic text-black">{product.rating}</p>
                <div className="flex items-center justify-center gap-1 text-black">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black" />
                  ))}
                </div>
                <p className="text-[10px] font-black uppercase tracking-wider text-zinc-500">Based on {product.reviewCount} verified reviews</p>
              </div>

              <div className="space-y-1.5 text-xs font-bold">
                {[
                  { star: '5 Star', pct: '88%' },
                  { star: '4 Star', pct: '10%' },
                  { star: '3 Star', pct: '2%' },
                  { star: '2 Star', pct: '0%' },
                  { star: '1 Star', pct: '0%' }
                ].map((row) => (
                  <div key={row.star} className="flex items-center gap-2">
                    <span className="w-12 text-zinc-500 uppercase text-[10px]">{row.star}</span>
                    <div className="flex-1 h-2 bg-zinc-200 border border-black/20 overflow-hidden">
                      <div className="h-full bg-black" style={{ width: row.pct }} />
                    </div>
                    <span className="w-8 text-right font-mono text-[10px] text-zinc-700">{row.pct}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-zinc-50 border border-black space-y-2 text-center">
                <p className="text-xs font-black uppercase tracking-wider text-black">Tested this sneaker?</p>
                <p className="text-[10px] text-zinc-500">Share your mileage and fit feedback with the community.</p>
                <button
                  onClick={() => addToast('info', 'Review Form Active', 'You can submit your verified review below.')}
                  className="px-4 py-2 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-zinc-800 cursor-pointer border border-black"
                >
                  Write a Review
                </button>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-3">
              {product.reviews.map((rev) => (
                <div key={rev.id} className="p-5 bg-white border border-black space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase tracking-wider text-black">{rev.author}</span>
                      {rev.verified && (
                        <span className="text-[9px] font-black uppercase tracking-wider text-black bg-[#ccff00] border border-black px-2 py-0.5 flex items-center gap-1">
                          <Check className="w-3 h-3 text-black" />
                          <span>Verified Athlete</span>
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase">{rev.date}</span>
                  </div>

                  <div className="flex items-center gap-1 text-black">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-black" />
                    ))}
                  </div>

                  <p className="text-xs text-zinc-700 leading-relaxed font-medium">{rev.comment}</p>
                </div>
              ))}
            </div>

          </div>
        )}

      </section>

      {/* Related Products from same category */}
      {relatedProducts.length > 0 && (
        <section className="pt-8 border-t border-black space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              YOU MAY ALSO LIKE
            </h3>
            <button
              onClick={() => navigateTo('shop', { category: product.category })}
              className="text-xs font-black uppercase tracking-widest text-black hover:text-zinc-600 flex items-center gap-1 cursor-pointer"
            >
              <span>Explore All {product.category}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

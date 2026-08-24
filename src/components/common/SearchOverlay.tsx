import React, { useState, useEffect, useRef } from 'react';
import { Search, X, TrendingUp, ArrowRight, Sparkles, Star } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { Product } from '../../types';

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, setSearchOpen, products, navigateTo } = useShop();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const popularSearches = [
    'Volt Aero Run',
    'Carbon Plate',
    'Basketball High Tops',
    'Shoes under ₹5000',
    'White Leather Sneakers',
    'Trail Waterproof',
    'Daily Cushion'
  ];

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Global keydown for search shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isSearchOpen && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setSearchOpen]);

  if (!isSearchOpen) return null;

  // Filter products based on query
  const cleanQuery = query.toLowerCase().trim();
  const matchingProducts = cleanQuery
    ? products.filter((p) => {
        const matchesName = p.name.toLowerCase().includes(cleanQuery);
        const matchesCategory = p.category.toLowerCase().includes(cleanQuery);
        const matchesTagline = p.tagline.toLowerCase().includes(cleanQuery);
        const matchesTags = p.tags.some((t) => t.toLowerCase().includes(cleanQuery));
        const matchesGender = p.gender.toLowerCase().includes(cleanQuery);
        
        // Price query check: "under 5000", "under 6000"
        if (cleanQuery.includes('under 5000')) return p.price <= 5000;
        if (cleanQuery.includes('under 8000')) return p.price <= 8000;
        if (cleanQuery.includes('under 10000')) return p.price <= 10000;

        return matchesName || matchesCategory || matchesTagline || matchesTags || matchesGender;
      }).slice(0, 6)
    : [];

  const handleSelectProduct = (product: Product) => {
    setSearchOpen(false);
    navigateTo('product', { productId: product.id });
  };

  const handleViewAllResults = () => {
    setSearchOpen(false);
    navigateTo('shop', { search: query });
  };

  const handleTagClick = (tag: string) => {
    setQuery(tag);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200 flex flex-col justify-start items-center p-4 sm:p-6 md:p-12 overflow-y-auto">
      <div className="max-w-4xl w-full bg-white border border-black animate-in slide-in-from-top-4 duration-300">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-black flex items-center gap-3">
          <Search className="w-5 h-5 text-black shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH MODELS, RUNNING, BASKETBALL, COLORWAY..."
            className="w-full text-base sm:text-lg font-black uppercase tracking-tight text-black placeholder-zinc-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1.5 text-black hover:bg-zinc-100 border border-black cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setSearchOpen(false)}
            className="px-3 py-1.5 bg-black text-white hover:bg-zinc-800 text-[10px] font-black uppercase tracking-widest cursor-pointer transition-colors border border-black"
          >
            ESC
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          
          {/* Trending Suggestions Pills */}
          <div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-black" />
              <span>Trending Searches</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((item) => (
                <button
                  key={item}
                  onClick={() => handleTagClick(item)}
                  className="px-3 py-1.5 bg-white hover:bg-black hover:text-white text-black text-xs font-black uppercase tracking-wider border border-black transition-colors cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Results Grid */}
          {query && (
            <div className="space-y-4 pt-2 border-t border-black">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  Matching Products ({matchingProducts.length})
                </p>
                {matchingProducts.length > 0 && (
                  <button
                    onClick={handleViewAllResults}
                    className="text-xs font-black uppercase tracking-wider text-black underline flex items-center gap-1 cursor-pointer hover:text-zinc-600"
                  >
                    <span>View all results for "{query}"</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {matchingProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {matchingProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleSelectProduct(product)}
                      className="group flex flex-col p-3 border border-black hover:bg-zinc-50 transition-all cursor-pointer bg-white"
                    >
                      <div className="w-full aspect-square bg-[#f8f8f8] overflow-hidden relative mb-2.5 flex items-center justify-center p-2 border border-black">
                        <img
                          src={product.images.main}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.discountPercent && (
                          <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-black uppercase px-1.5 py-0.5 border border-black">
                            -{product.discountPercent}%
                          </span>
                        )}
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                          {product.gender}'s {product.category}
                        </p>
                        <h4 className="text-xs font-black uppercase tracking-wider text-black group-hover:underline line-clamp-1">
                          {product.name}
                        </h4>
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-xs font-black italic text-black">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          <div className="flex items-center gap-1 text-[11px] font-bold text-black">
                            <Star className="w-3 h-3 text-black fill-black" />
                            <span>{product.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center space-y-2">
                  <p className="text-sm font-black uppercase tracking-wider text-black">
                    No exact matches found for "{query}"
                  </p>
                  <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                    Try searching for terms like "Running", "Basketball", "Carbon Plate", or browse our featured collections.
                  </p>
                  <div className="pt-3">
                    <button
                      onClick={() => {
                        setSearchOpen(false);
                        navigateTo('shop');
                      }}
                      className="px-4 py-2 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors cursor-pointer border border-black"
                    >
                      Browse Entire Catalog
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Quick Category Jump */}
          {!query && (
            <div className="space-y-3 pt-2 border-t border-black">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                BROWSE BY SPORT & CATEGORY
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { name: 'Road Running', category: 'Running' as const },
                  { name: 'Court Basketball', category: 'Basketball' as const },
                  { name: 'Gym & Training', category: 'Training' as const },
                  { name: 'Lifestyle Sneakers', category: 'Lifestyle' as const },
                  { name: 'Trail & Hiking', category: 'Hiking' as const },
                  { name: 'Junior & Kids', category: 'Kids' as const }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setSearchOpen(false);
                      navigateTo('shop', { category: item.category });
                    }}
                    className="p-3 text-left bg-white hover:bg-black hover:text-white border border-black transition-colors cursor-pointer group"
                  >
                    <p className="text-xs font-black uppercase tracking-wider group-hover:text-white">{item.name}</p>
                    <p className="text-[10px] text-zinc-400 group-hover:text-[#ccff00] mt-0.5 font-bold uppercase tracking-wider">Explore Drops →</p>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

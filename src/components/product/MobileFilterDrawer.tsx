import React from 'react';
import { X, RotateCcw, Check, Star } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { Category, Gender, ShoeSize } from '../../types';

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  resultsCount: number;
}

export const MobileFilterDrawer: React.FC<MobileFilterDrawerProps> = ({
  isOpen,
  onClose,
  resultsCount
}) => {
  const { filters, setFilters, resetFilters } = useShop();

  if (!isOpen) return null;

  const categories: Category[] = [
    'Running',
    'Basketball',
    'Training',
    'Lifestyle',
    'Football',
    'Walking',
    'Hiking',
    'Kids'
  ];

  const genders: Gender[] = ['Men', 'Women', 'Unisex', 'Kids'];
  const sizes: ShoeSize[] = [5, 6, 7, 8, 9, 10, 11, 12];

  const priceRanges = [
    { label: 'Under ₹5,000', min: 0, max: 5000 },
    { label: '₹5,000 – ₹8,000', min: 5000, max: 8000 },
    { label: '₹8,000 – ₹12,000', min: 8000, max: 12000 },
    { label: '₹12,000+', min: 12000, max: 25000 }
  ];

  const colors = [
    { name: 'Black', hex: '#111827' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Grey', hex: '#6B7280' },
    { name: 'Blue', hex: '#2563EB' },
    { name: 'Red', hex: '#DC2626' },
    { name: 'Volt Lime', hex: '#CCFF00' },
    { name: 'Orange', hex: '#EA580C' }
  ];

  const toggleCategory = (cat: Category) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category.includes(cat)
        ? prev.category.filter((c) => c !== cat)
        : [...prev.category, cat]
    }));
  };

  const toggleGender = (gen: Gender) => {
    setFilters((prev) => ({
      ...prev,
      gender: prev.gender.includes(gen)
        ? prev.gender.filter((g) => g !== gen)
        : [...prev.gender, gen]
    }));
  };

  const toggleSize = (sz: ShoeSize) => {
    setFilters((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(sz)
        ? prev.sizes.filter((s) => s !== sz)
        : [...prev.sizes, sz]
    }));
  };

  const toggleColor = (clr: string) => {
    setFilters((prev) => ({
      ...prev,
      colors: prev.colors.includes(clr)
        ? prev.colors.filter((c) => c !== clr)
        : [...prev.colors, clr]
    }));
  };

  const setPrice = (min: number, max: number) => {
    const isCurrent = filters.priceRange[0] === min && filters.priceRange[1] === max;
    setFilters((prev) => ({
      ...prev,
      priceRange: isCurrent ? [0, 20000] : [min, max]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-sm bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-4 border-b border-black flex items-center justify-between bg-white">
            <h3 className="text-xl font-black uppercase tracking-tight text-black">
              FILTERS
            </h3>
            <button
              onClick={onClose}
              className="p-1.5 text-black hover:bg-black hover:text-white border border-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            
            {/* Quick Toggles */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilters((p) => ({ ...p, onSaleOnly: !p.onSaleOnly }))}
                className={`flex-1 py-2 text-xs font-black uppercase tracking-wider border transition-colors ${
                  filters.onSaleOnly
                    ? 'bg-red-600 text-white border-black'
                    : 'bg-white text-black border-black/30'
                }`}
              >
                On Sale
              </button>
              <button
                onClick={() => setFilters((p) => ({ ...p, newOnly: !p.newOnly }))}
                className={`flex-1 py-2 text-xs font-black uppercase tracking-wider border transition-colors ${
                  filters.newOnly
                    ? 'bg-black text-[#ccff00] border-black'
                    : 'bg-white text-black border-black/30'
                }`}
              >
                New Arrivals
              </button>
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Gender</p>
              <div className="grid grid-cols-2 gap-1.5">
                {genders.map((gen) => (
                  <button
                    key={gen}
                    onClick={() => toggleGender(gen)}
                    className={`py-2 text-xs font-black uppercase tracking-wider border transition-colors ${
                      filters.gender.includes(gen)
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-black/30 hover:border-black'
                    }`}
                  >
                    {gen}
                  </button>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Category</p>
              <div className="grid grid-cols-2 gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`py-2 text-xs font-black uppercase tracking-wider border transition-colors ${
                      filters.category.includes(cat)
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-black/30 hover:border-black'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Size (UK) */}
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">UK Size</p>
              <div className="grid grid-cols-4 gap-1.5">
                {sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => toggleSize(sz)}
                    className={`py-2 text-xs font-black uppercase tracking-wider border transition-colors ${
                      filters.sizes.includes(sz)
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-black/30 hover:border-black'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Ranges */}
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Price (INR)</p>
              <div className="space-y-1.5">
                {priceRanges.map((range) => {
                  const isSelected =
                    filters.priceRange[0] === range.min && filters.priceRange[1] === range.max;
                  return (
                    <button
                      key={range.label}
                      onClick={() => setPrice(range.min, range.max)}
                      className={`w-full py-2 px-3 text-xs font-black uppercase tracking-wider border transition-colors flex items-center justify-between ${
                        isSelected
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-black/30 hover:border-black'
                      }`}
                    >
                      <span>{range.label}</span>
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Colors */}
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Color</p>
              <div className="flex flex-wrap gap-2">
                {colors.map((clr) => {
                  const isSelected = filters.colors.includes(clr.name);
                  return (
                    <button
                      key={clr.name}
                      onClick={() => toggleColor(clr.name)}
                      className={`w-7 h-7 border transition-all p-0.5 flex items-center justify-center ${
                        isSelected ? 'border-black ring-2 ring-black' : 'border-black/30'
                      }`}
                      title={clr.name}
                    >
                      <span
                        className="w-full h-full"
                        style={{ backgroundColor: clr.hex }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Footer actions */}
          <div className="p-4 border-t border-black bg-white flex items-center gap-2">
            <button
              onClick={resetFilters}
              className="px-4 py-3 bg-white border border-black text-xs font-black uppercase tracking-wider text-black hover:bg-zinc-100 transition-colors flex items-center gap-1 cursor-pointer shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors cursor-pointer border border-black"
            >
              Show {resultsCount} Shoes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

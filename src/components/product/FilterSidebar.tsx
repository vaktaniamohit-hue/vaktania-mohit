import React from 'react';
import { RotateCcw, Check, Sparkles, Star, ChevronDown } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { Category, Gender, ShoeSize } from '../../types';

export const FilterSidebar: React.FC = () => {
  const { filters, setFilters, resetFilters, products } = useShop();

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

  const featureTags = [
    'Lightweight',
    'Carbon Plate',
    'Cushioned',
    'Waterproof',
    'Breathable',
    'Trail',
    'Stability',
    'Retro'
  ];

  // Helper toggle functions
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

  const setPrice = (min: number, max: number) => {
    const isCurrent = filters.priceRange[0] === min && filters.priceRange[1] === max;
    setFilters((prev) => ({
      ...prev,
      priceRange: isCurrent ? [0, 20000] : [min, max]
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

  const toggleFeature = (feat: string) => {
    setFilters((prev) => ({
      ...prev,
      features: prev.features.includes(feat)
        ? prev.features.filter((f) => f !== feat)
        : [...prev.features, feat]
    }));
  };

  const hasActiveFilters = 
    filters.category.length > 0 ||
    filters.gender.length > 0 ||
    filters.sizes.length > 0 ||
    filters.colors.length > 0 ||
    filters.features.length > 0 ||
    filters.minRating !== null ||
    filters.onSaleOnly ||
    filters.newOnly ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 20000;

  return (
    <div className="w-64 shrink-0 space-y-6 pr-4">
      {/* Filter Header & Reset */}
      <div className="flex items-center justify-between pb-3 border-b border-black">
        <h3 className="font-black text-xs uppercase tracking-widest text-black">
          Refine By
        </h3>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-black hover:bg-[#ccff00] px-1.5 py-0.5 border border-black transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Quick Toggles: Sale & New */}
      <div className="space-y-2">
        <label className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-black cursor-pointer select-none">
          <input
            type="checkbox"
            checked={filters.onSaleOnly}
            onChange={(e) => setFilters((p) => ({ ...p, onSaleOnly: e.target.checked }))}
            className="w-4 h-4 rounded-none text-red-600 focus:ring-0 border-black cursor-pointer accent-black"
          />
          <span className="text-red-600">On Sale Only</span>
        </label>
        <label className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-black cursor-pointer select-none">
          <input
            type="checkbox"
            checked={filters.newOnly}
            onChange={(e) => setFilters((p) => ({ ...p, newOnly: e.target.checked }))}
            className="w-4 h-4 rounded-none text-black focus:ring-0 border-black cursor-pointer accent-black"
          />
          <span>New Arrivals</span>
        </label>
      </div>

      {/* Gender */}
      <div className="space-y-3 pt-4 border-t border-black/20">
        <p className="text-[10px] font-black uppercase tracking-widest text-black">
          Gender
        </p>
        <div className="space-y-2">
          {genders.map((gen) => {
            const checked = filters.gender.includes(gen);
            return (
              <label key={gen} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-800 hover:text-black cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleGender(gen)}
                  className="w-4 h-4 rounded-none text-black focus:ring-0 border-black cursor-pointer accent-black"
                />
                <span>{gen}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Category */}
      <div className="space-y-3 pt-4 border-t border-black/20">
        <p className="text-[10px] font-black uppercase tracking-widest text-black">
          Sport & Category
        </p>
        <div className="space-y-2">
          {categories.map((cat) => {
            const checked = filters.category.includes(cat);
            return (
              <label key={cat} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-800 hover:text-black cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleCategory(cat)}
                  className="w-4 h-4 rounded-none text-black focus:ring-0 border-black cursor-pointer accent-black"
                />
                <span>{cat}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Shoe Sizes (UK) */}
      <div className="space-y-3 pt-4 border-t border-black/20">
        <p className="text-[10px] font-black uppercase tracking-widest text-black">
          Shoe Size (UK)
        </p>
        <div className="grid grid-cols-4 gap-1.5">
          {sizes.map((sz) => {
            const isSelected = filters.sizes.includes(sz);
            return (
              <button
                key={sz}
                onClick={() => toggleSize(sz)}
                className={`py-1.5 text-xs font-black border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-black/30 hover:border-black'
                }`}
              >
                {sz}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3 pt-4 border-t border-black/20">
        <p className="text-[10px] font-black uppercase tracking-widest text-black">
          Shop by Price
        </p>
        <div className="space-y-1.5">
          {priceRanges.map((range) => {
            const isSelected =
              filters.priceRange[0] === range.min && filters.priceRange[1] === range.max;
            return (
              <button
                key={range.label}
                onClick={() => setPrice(range.min, range.max)}
                className={`w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider border transition-colors cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-black text-white border-black'
                    : 'text-black bg-white border-black/20 hover:border-black'
                }`}
              >
                <span>{range.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#ccff00]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color Palette */}
      <div className="space-y-3 pt-4 border-t border-black/20">
        <p className="text-[10px] font-black uppercase tracking-widest text-black">
          Color
        </p>
        <div className="flex flex-wrap gap-2">
          {colors.map((clr) => {
            const isSelected = filters.colors.includes(clr.name);
            return (
              <button
                key={clr.name}
                onClick={() => toggleColor(clr.name)}
                className={`w-6 h-6 border transition-all p-0.5 flex items-center justify-center cursor-pointer ${
                  isSelected ? 'border-black ring-2 ring-black scale-105' : 'border-zinc-300 hover:border-black'
                }`}
                title={clr.name}
              >
                <span
                  className="w-full h-full border border-black/20"
                  style={{ backgroundColor: clr.hex }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Performance Features */}
      <div className="space-y-3 pt-4 border-t border-black/20">
        <p className="text-[10px] font-black uppercase tracking-widest text-black">
          Key Features
        </p>
        <div className="flex flex-wrap gap-1.5">
          {featureTags.map((tag) => {
            const isSelected = filters.features.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleFeature(tag)}
                className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-wider border transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-black/30 hover:border-black'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-3 pt-4 border-t border-black/20">
        <p className="text-[10px] font-black uppercase tracking-widest text-black">
          Customer Rating
        </p>
        <div className="space-y-1.5">
          {[4.8, 4.5, 4.0].map((stars) => {
            const isSelected = filters.minRating === stars;
            return (
              <button
                key={stars}
                onClick={() =>
                  setFilters((p) => ({
                    ...p,
                    minRating: isSelected ? null : stars
                  }))
                }
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider border transition-colors cursor-pointer ${
                  isSelected ? 'bg-black text-white border-black' : 'text-black bg-white border-black/20 hover:border-black'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Star className={`w-3.5 h-3.5 ${isSelected ? 'text-[#ccff00] fill-[#ccff00]' : 'text-black fill-black'}`} />
                  <span>{stars}+ Stars</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#ccff00]" />}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  Grid3X3, 
  Grid2X2, 
  LayoutGrid, 
  ChevronDown, 
  X, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { Product, SortOption } from '../../types';
import { ProductCard } from './ProductCard';
import { useShop } from '../../context/ShopContext';

interface ProductGridProps {
  products: Product[];
  totalCount: number;
  onOpenMobileFilters: () => void;
  title?: string;
  subtitle?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  totalCount,
  onOpenMobileFilters,
  title,
  subtitle
}) => {
  const { filters, setFilters, resetFilters } = useShop();
  const [columns, setColumns] = useState<3 | 4>(3);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: e.target.value as SortOption
    }));
  };

  const removeFilterTag = (type: 'gender' | 'category' | 'sizes' | 'colors' | 'features' | 'sale' | 'new', val?: any) => {
    setFilters((prev) => {
      if (type === 'gender') return { ...prev, gender: prev.gender.filter((g) => g !== val) };
      if (type === 'category') return { ...prev, category: prev.category.filter((c) => c !== val) };
      if (type === 'sizes') return { ...prev, sizes: prev.sizes.filter((s) => s !== val) };
      if (type === 'colors') return { ...prev, colors: prev.colors.filter((c) => c !== val) };
      if (type === 'features') return { ...prev, features: prev.features.filter((f) => f !== val) };
      if (type === 'sale') return { ...prev, onSaleOnly: false };
      if (type === 'new') return { ...prev, newOnly: false };
      return prev;
    });
  };

  const hasActiveFilters = 
    filters.category.length > 0 ||
    filters.gender.length > 0 ||
    filters.sizes.length > 0 ||
    filters.colors.length > 0 ||
    filters.features.length > 0 ||
    filters.onSaleOnly ||
    filters.newOnly ||
    filters.searchQuery !== '';

  return (
    <div className="flex-1 space-y-5">
      
      {/* Top Header & Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-black">
        <div>
          {title && (
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-xs text-zinc-600 mt-1 max-w-xl">
              {subtitle}
            </p>
          )}
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mt-1">
            Showing <span className="text-black font-black">{products.length}</span> of {totalCount} performance models
          </p>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          {/* Mobile Filter Button */}
          <button
            onClick={onOpenMobileFilters}
            className="lg:hidden px-3.5 py-2 bg-black text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer border border-black"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#ccff00]" />
            <span>Filters</span>
          </button>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-1.5 text-xs text-black bg-white border border-black px-3 py-1.5">
            <span className="font-bold uppercase text-[10px] tracking-wider text-zinc-500 hidden sm:inline">Sort:</span>
            <select
              value={filters.sortBy}
              onChange={handleSortChange}
              className="bg-transparent font-black uppercase text-xs text-black focus:outline-hidden cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated (4.8+)</option>
              <option value="newest">Newest Releases</option>
            </select>
          </div>

          {/* Grid Layout Switcher (Desktop) */}
          <div className="hidden sm:flex items-center border border-black p-0.5 bg-white">
            <button
              onClick={() => setColumns(3)}
              className={`p-1.5 transition-colors cursor-pointer ${
                columns === 3 ? 'bg-black text-white' : 'text-zinc-500 hover:text-black'
              }`}
              title="3 Columns"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setColumns(4)}
              className={`p-1.5 transition-colors cursor-pointer ${
                columns === 4 ? 'bg-black text-white' : 'text-zinc-500 hover:text-black'
              }`}
              title="4 Columns"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Active Filter Chips */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mr-1">Active:</span>

          {filters.searchQuery && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider bg-black text-white border border-black">
              <span>"{filters.searchQuery}"</span>
              <button onClick={() => setFilters((p) => ({ ...p, searchQuery: '' }))} className="hover:text-red-400">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.gender.map((g) => (
            <span key={g} className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider bg-white text-black border border-black">
              <span>{g}</span>
              <button onClick={() => removeFilterTag('gender', g)} className="hover:text-zinc-500">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {filters.category.map((c) => (
            <span key={c} className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider bg-white text-black border border-black">
              <span>{c}</span>
              <button onClick={() => removeFilterTag('category', c)} className="hover:text-zinc-500">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {filters.sizes.map((s) => (
            <span key={s} className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider bg-white text-black border border-black">
              <span>UK {s}</span>
              <button onClick={() => removeFilterTag('sizes', s)} className="hover:text-zinc-500">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {filters.colors.map((clr) => (
            <span key={clr} className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider bg-white text-black border border-black">
              <span>{clr}</span>
              <button onClick={() => removeFilterTag('colors', clr)} className="hover:text-zinc-500">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {filters.features.map((f) => (
            <span key={f} className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider bg-white text-black border border-black">
              <span>{f}</span>
              <button onClick={() => removeFilterTag('features', f)} className="hover:text-zinc-500">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {filters.onSaleOnly && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider bg-red-600 text-white border border-black">
              <span>On Sale</span>
              <button onClick={() => removeFilterTag('sale')} className="hover:text-zinc-200">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.newOnly && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider bg-black text-[#ccff00] border border-black">
              <span>New Arrivals</span>
              <button onClick={() => removeFilterTag('new')} className="hover:text-zinc-300">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          <button
            onClick={resetFilters}
            className="text-[10px] font-black uppercase tracking-wider text-black underline ml-2 cursor-pointer hover:text-zinc-600"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Product Cards Grid */}
      {products.length > 0 ? (
        <div
          className={`grid grid-cols-2 gap-4 sm:gap-6 ${
            columns === 4
              ? 'md:grid-cols-3 xl:grid-cols-4'
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center space-y-4 bg-white border border-black p-8">
          <div className="w-16 h-16 bg-zinc-100 border border-black flex items-center justify-center mx-auto text-black">
            <RotateCcw className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-black uppercase tracking-tight text-black">
              No matching footwear found
            </h3>
            <p className="text-xs text-zinc-500 max-w-sm mx-auto">
              We couldn't find any shoes matching your specific filter criteria. Try clearing some filters to explore more options.
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors cursor-pointer border border-black"
            >
              Reset All Filters
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

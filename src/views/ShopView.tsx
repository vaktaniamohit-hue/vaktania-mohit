import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { FilterSidebar } from '../components/product/FilterSidebar';
import { MobileFilterDrawer } from '../components/product/MobileFilterDrawer';
import { ProductGrid } from '../components/product/ProductGrid';
import { Product } from '../types';

export const ShopView: React.FC = () => {
  const { products, filters } = useShop();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter & Sort logic
  const filteredProducts = useMemo(() => {
    return products.filter((p: Product) => {
      // Search
      if (filters.searchQuery) {
        const q = filters.searchQuery.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCat = p.category.toLowerCase().includes(q);
        const matchesTagline = p.tagline.toLowerCase().includes(q);
        const matchesTags = p.tags.some((t) => t.toLowerCase().includes(q));
        const matchesGender = p.gender.toLowerCase().includes(q);
        if (!matchesName && !matchesCat && !matchesTagline && !matchesTags && !matchesGender) {
          return false;
        }
      }

      // Gender
      if (filters.gender.length > 0) {
        if (!filters.gender.includes(p.gender) && p.gender !== 'Unisex') {
          return false;
        }
      }

      // Category
      if (filters.category.length > 0) {
        if (!filters.category.includes(p.category)) {
          return false;
        }
      }

      // Size
      if (filters.sizes.length > 0) {
        const hasSize = filters.sizes.some((s) => p.availableSizes.includes(s));
        if (!hasSize) return false;
      }

      // Price Range
      if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1]) {
        return false;
      }

      // Color
      if (filters.colors.length > 0) {
        const hasColor = p.colors.some((c) => 
          filters.colors.some((fc) => c.name.toLowerCase().includes(fc.toLowerCase()))
        );
        if (!hasColor) return false;
      }

      // Features
      if (filters.features.length > 0) {
        const hasFeature = filters.features.some((f) => 
          p.tags.some((t) => t.toLowerCase().includes(f.toLowerCase()))
        );
        if (!hasFeature) return false;
      }

      // Minimum Rating
      if (filters.minRating !== null) {
        if (p.rating < filters.minRating) return false;
      }

      // Sale only
      if (filters.onSaleOnly) {
        if (!p.isOnSale && !p.discountPercent) return false;
      }

      // New only
      if (filters.newOnly) {
        if (!p.isNewArrival) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      if (filters.sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      // default: featured
      return (b.isBestSeller ? 2 : 0) + (b.isNewArrival ? 1 : 0) - ((a.isBestSeller ? 2 : 0) + (a.isNewArrival ? 1 : 0));
    });
  }, [products, filters]);

  // Dynamic Header Title
  const getCatalogTitle = () => {
    if (filters.searchQuery) return `Search Results for "${filters.searchQuery}"`;
    if (filters.onSaleOnly) return 'Sale & Special Promotions';
    if (filters.newOnly) return 'New Arrivals & Fresh Drops';
    if (filters.category.length === 1 && filters.gender.length === 1) {
      return `${filters.gender[0]}'s ${filters.category[0]} Shoes`;
    }
    if (filters.category.length === 1) return `${filters.category[0]} Footwear`;
    if (filters.gender.length === 1) return `${filters.gender[0]}'s Footwear Collection`;
    return 'All Performance Footwear';
  };

  const getCatalogSubtitle = () => {
    if (filters.onSaleOnly) return 'Save up to 30% on tour-grade running, basketball, and training models with full manufacturer warranty.';
    if (filters.newOnly) return 'The latest innovations in propulsion foam, carbon fiber plates, and adaptive race knits.';
    return 'Engineered in our propulsion labs for athletes seeking maximum energy return, stability, and zero distraction.';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Main Catalog View Container */}
      <div className="flex gap-8 items-start">
        
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block">
          <FilterSidebar />
        </div>

        {/* Product Grid & Controls */}
        <ProductGrid
          products={filteredProducts}
          totalCount={products.length}
          onOpenMobileFilters={() => setIsMobileFilterOpen(true)}
          title={getCatalogTitle()}
          subtitle={getCatalogSubtitle()}
        />

      </div>

      {/* Mobile Filter Slide Drawer */}
      <MobileFilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        resultsCount={filteredProducts.length}
      />

    </div>
  );
};

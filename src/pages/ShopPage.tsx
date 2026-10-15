import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Filter, 
  X, 
  SlidersHorizontal, 
  ChevronDown, 
  AlertCircle,
  RotateCcw
} from 'lucide-react';
import { PRODUCTS, CATEGORIES_META } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SortOption, ProductCategory } from '../types';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL query params
  const categoryParam = searchParams.get('category') as ProductCategory | null;
  const auditParam = searchParams.get('audit') === 'true';

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 160]);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [showFlaggedOnly, setShowFlaggedOnly] = useState<boolean>(auditParam);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync category param if URL changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    if (searchParams.get('audit') === 'true') {
      setShowFlaggedOnly(true);
    }
  }, [categoryParam, searchParams]);

  // Extract all available sizes and colors from actual catalog
  const allAvailableSizes = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => p.sizes.forEach((s) => set.add(s)));
    return Array.from(set).sort();
  }, []);

  const allAvailableColors = useMemo(() => {
    const map = new Map<string, string>();
    PRODUCTS.forEach((p) => {
      p.colors.forEach((c) => {
        if (!map.has(c.name)) map.set(c.name, c.hex);
      });
    });
    return Array.from(map.entries()).map(([name, hex]) => ({ name, hex }));
  }, []);

  // Filter and Sort calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Flagged items audit filter
      if (showFlaggedOnly && !p.flaggedForReview) return false;
      if (!showFlaggedOnly && p.flaggedForReview && selectedCategory !== 'unrelated-review') return false;

      // Category filter
      if (selectedCategory !== 'all') {
        if (p.category !== selectedCategory) return false;
      }

      // Price filter
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;

      // Size filter
      if (selectedSizes.length > 0) {
        const hasSize = p.sizes.some((s) => selectedSizes.includes(s));
        if (!hasSize) return false;
      }

      // Color filter
      if (selectedColors.length > 0) {
        const hasColor = p.colors.some((c) => selectedColors.includes(c.name));
        if (!hasColor) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      // 'featured'
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, selectedSizes, selectedColors, priceRange, sortBy, showFlaggedOnly]);

  const toggleSize = (sz: string) => {
    setSelectedSizes((prev) =>
      prev.includes(sz) ? prev.filter((s) => s !== sz) : [...prev, sz]
    );
  };

  const toggleColor = (colName: string) => {
    setSelectedColors((prev) =>
      prev.includes(colName) ? prev.filter((c) => c !== colName) : [...prev, colName]
    );
  };

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([0, 160]);
    setShowFlaggedOnly(false);
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedSizes.length > 0 ||
    selectedColors.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < 160 ||
    showFlaggedOnly;

  return (
    <div className="bg-[#F8F7F4] min-h-screen pb-24">
      {/* Editorial Header */}
      <div className="bg-white border-b border-neutral-200 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-neutral-400 mb-3 flex items-center gap-1.5 uppercase tracking-wider">
            <Link to="/" className="hover:text-black">Home</Link>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">Shop All</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-neutral-950 tracking-tight">
                SHOP ALL APPAREL
              </h1>
              <p className="mt-2 text-sm text-neutral-600 max-w-xl">
                Explore the complete Fashion Martinez catalog. Heavyweight cotton tees, dense brushed fleece hoodies, engineered barrel trousers, and stand-collar outerwear.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
              <span className="bg-[#F8F7F4] px-3 py-1.5 border border-neutral-200">
                Showing <strong>{filteredProducts.length}</strong> items
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Controls Bar (Mobile Filter Toggle & Desktop Sort Dropdown) */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-200 gap-4">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border border-neutral-300 hover:border-black transition-colors"
          >
            <Filter className="w-4 h-4" /> Filters {hasActiveFilters && '(Active)'}
          </button>

          <div className="hidden lg:flex items-center gap-2 text-xs text-neutral-500">
            <SlidersHorizontal className="w-4 h-4 text-neutral-400" />
            <span>Refine by Category, Weight &amp; Sizing</span>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-xs uppercase tracking-wider text-neutral-500 hidden sm:inline">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort products by"
                className="appearance-none bg-white border border-neutral-300 text-xs font-semibold uppercase tracking-wider pl-3 pr-8 py-2.5 hover:border-black focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="newest">New Arrivals First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Alphabetical (A-Z)</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="pt-4 pb-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-neutral-500 mr-1">Active filters:</span>
            
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1.5 bg-neutral-900 text-white text-xs px-2.5 py-1">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory('all')} className="hover:text-red-400">✕</button>
              </span>
            )}

            {showFlaggedOnly && (
              <span className="inline-flex items-center gap-1.5 bg-amber-700 text-white text-xs px-2.5 py-1">
                Audit: Flagged Items
                <button onClick={() => setShowFlaggedOnly(false)} className="hover:text-amber-200">✕</button>
              </span>
            )}

            {selectedSizes.map((sz) => (
              <span key={sz} className="inline-flex items-center gap-1.5 bg-neutral-200 text-neutral-800 text-xs px-2.5 py-1">
                Size {sz}
                <button onClick={() => toggleSize(sz)} className="hover:text-black">✕</button>
              </span>
            ))}

            {selectedColors.map((col) => (
              <span key={col} className="inline-flex items-center gap-1.5 bg-neutral-200 text-neutral-800 text-xs px-2.5 py-1">
                Color: {col}
                <button onClick={() => toggleColor(col)} className="hover:text-black">✕</button>
              </span>
            ))}

            <button
              onClick={resetAllFilters}
              className="text-xs text-neutral-600 hover:text-black underline ml-2 flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Clear All
            </button>
          </div>
        )}

        {/* Main Content Layout: Sidebar + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          
          {/* Desktop Left Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 space-y-7 pr-4">
            
            {/* Category Filter */}
            <div className="pb-6 border-b border-neutral-200">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3">
                Categories
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setShowFlaggedOnly(false);
                    }}
                    className={`w-full text-left py-1 transition-colors flex justify-between ${
                      selectedCategory === 'all' && !showFlaggedOnly ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'
                    }`}
                  >
                    <span>All Streetwear</span>
                    <span>({PRODUCTS.filter(p => !p.flaggedForReview).length})</span>
                  </button>
                </li>
                {CATEGORIES_META.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setShowFlaggedOnly(false);
                      }}
                      className={`w-full text-left py-1 transition-colors flex justify-between ${
                        selectedCategory === cat.id && !showFlaggedOnly ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span>({cat.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="pb-6 border-b border-neutral-200">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3">
                Price Range
              </h3>
              <div className="space-y-2 text-xs">
                {[
                  { label: 'All Prices', range: [0, 160] as [number, number] },
                  { label: 'Under $35 (Tees)', range: [0, 35] as [number, number] },
                  { label: '$35 – $55 (Midweights & Sweats)', range: [35, 55] as [number, number] },
                  { label: '$55+ (Outerwear & Heavyweight)', range: [55, 160] as [number, number] }
                ].map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setPriceRange(p.range)}
                    className={`block w-full text-left py-1 ${
                      priceRange[0] === p.range[0] && priceRange[1] === p.range[1]
                        ? 'font-bold text-black'
                        : 'text-neutral-600 hover:text-black'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="pb-6 border-b border-neutral-200">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3">
                Sizes
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {allAvailableSizes.map((sz) => {
                  const active = selectedSizes.includes(sz);
                  return (
                    <button
                      key={sz}
                      onClick={() => toggleSize(sz)}
                      className={`min-w-[36px] px-2 py-1.5 text-xs font-semibold uppercase border transition-colors ${
                        active
                          ? 'border-black bg-black text-white'
                          : 'border-neutral-300 bg-white text-neutral-700 hover:border-black'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color Filter */}
            <div className="pb-6 border-b border-neutral-200">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3">
                Colors
              </h3>
              <div className="flex flex-wrap gap-2">
                {allAvailableColors.map((col) => {
                  const active = selectedColors.includes(col.name);
                  return (
                    <button
                      key={col.name}
                      onClick={() => toggleColor(col.name)}
                      title={col.name}
                      className={`w-5 h-5 rounded-full border transition-all ${
                        active
                          ? 'ring-2 ring-black scale-110 border-white'
                          : 'border-neutral-300 hover:scale-110'
                      }`}
                      style={{ backgroundColor: col.hex }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Client Audit / Flagged Merchandise Toggle */}
            <div className="p-4 bg-amber-500/10 border border-amber-600/30">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    Store Audit Mode
                  </h4>
                  <p className="text-[11px] text-neutral-600 mt-1 leading-snug">
                    Inspect WooCommerce sample items flagged for removal before launch.
                  </p>
                  <button
                    onClick={() => {
                      setShowFlaggedOnly(!showFlaggedOnly);
                      setSelectedCategory('all');
                    }}
                    className={`mt-2.5 text-xs font-semibold px-3 py-1.5 border uppercase tracking-wider transition-colors ${
                      showFlaggedOnly
                        ? 'bg-amber-700 text-white border-amber-800'
                        : 'bg-white text-neutral-900 border-neutral-300 hover:border-black'
                    }`}
                  >
                    {showFlaggedOnly ? 'Exit Audit Mode' : 'View Flagged Items (3)'}
                  </button>
                </div>
              </div>
            </div>

          </aside>

          {/* Product Grid Area */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-neutral-200 p-12 text-center my-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400">
                  <Filter className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-editorial text-xl font-bold uppercase text-neutral-900">
                    No matching apparel found
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 max-w-sm mx-auto">
                    Try adjusting your size, color, or category filters to see more of the Fashion Martinez catalog.
                  </p>
                </div>
                <button
                  onClick={resetAllFilters}
                  className="bg-[#111111] text-white text-xs font-semibold uppercase tracking-widest px-6 py-3 hover:bg-black transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-[#F8F7F4] shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <span className="font-editorial font-bold uppercase text-lg">Filters</span>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 text-neutral-500 hover:text-black"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-2">
                  Category
                </h4>
                <div className="space-y-1 text-xs">
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setShowFlaggedOnly(false);
                    }}
                    className={`block w-full text-left py-1.5 ${
                      selectedCategory === 'all' && !showFlaggedOnly ? 'font-bold text-black' : 'text-neutral-600'
                    }`}
                  >
                    All Streetwear
                  </button>
                  {CATEGORIES_META.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setShowFlaggedOnly(false);
                      }}
                      className={`block w-full text-left py-1.5 ${
                        selectedCategory === cat.id && !showFlaggedOnly ? 'font-bold text-black' : 'text-neutral-600'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-2">
                  Sizes
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {allAvailableSizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => toggleSize(sz)}
                      className={`min-w-[34px] px-2 py-1 text-xs border ${
                        selectedSizes.includes(sz) ? 'bg-black text-white border-black' : 'bg-white border-neutral-300'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Audit items */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setShowFlaggedOnly(!showFlaggedOnly);
                    setSelectedCategory('all');
                  }}
                  className={`w-full text-xs font-semibold py-2 px-3 border uppercase tracking-wider ${
                    showFlaggedOnly ? 'bg-amber-700 text-white' : 'bg-white text-neutral-900'
                  }`}
                >
                  {showFlaggedOnly ? 'Viewing Flagged Items' : 'Inspect Flagged Store Items'}
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200 flex gap-2">
              <button
                onClick={resetAllFilters}
                className="flex-1 py-3 text-xs uppercase tracking-wider border border-neutral-300 font-semibold"
              >
                Reset
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 bg-black text-white py-3 text-xs uppercase tracking-wider font-semibold"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

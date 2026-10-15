import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowRight, Tag } from 'lucide-react';
import { PRODUCTS, CATEGORIES_META } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const SearchResultsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchParams({ q: inputValue.trim() });
    }
  };

  const matchingProducts = PRODUCTS.filter((p) => {
    if (!query) return true;
    const q = query.toLowerCase();
    const matchName = p.name.toLowerCase().includes(q);
    const matchCat = p.categoryName.toLowerCase().includes(q);
    const matchDesc = p.description.toLowerCase().includes(q);
    const matchFabric = p.fabric?.toLowerCase().includes(q) || false;
    const matchWeight = p.fabricWeight?.toLowerCase().includes(q) || false;
    return matchName || matchCat || matchDesc || matchFabric || matchWeight;
  });

  return (
    <div className="bg-[#F8F7F4] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Header Bar */}
        <div className="mb-10 pb-6 border-b border-neutral-200">
          <nav className="text-xs text-neutral-400 mb-3 flex items-center gap-1.5 uppercase tracking-wider">
            <Link to="/" className="hover:text-black">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-black">Shop</Link>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">Search</span>
          </nav>

          <form onSubmit={handleSearchSubmit} className="max-w-2xl flex gap-2 mb-4">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search by product name, GSM, or category..."
                className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black font-medium"
              />
              <Search className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              Search
            </button>
          </form>

          <div className="flex items-center justify-between text-xs text-neutral-500">
            <span>
              {query ? (
                <>Search results for &ldquo;<strong>{query}</strong>&rdquo; ({matchingProducts.length} items)</>
              ) : (
                <>All Catalog Items ({matchingProducts.length})</>
              )}
            </span>
          </div>
        </div>

        {/* Results Grid or Empty State */}
        {matchingProducts.length === 0 ? (
          <div className="bg-white border border-neutral-200 p-12 text-center max-w-xl mx-auto space-y-4">
            <h3 className="font-editorial text-2xl font-bold uppercase text-neutral-900">
              No matching garments found
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-md mx-auto">
              We could not find any apparel matching &ldquo;{query}&rdquo;. Explore our signature categories below:
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-2">
              {CATEGORIES_META.map((cat) => (
                <Link
                  key={cat.id}
                  to={cat.slug}
                  className="bg-neutral-100 hover:bg-black hover:text-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <Tag className="w-3 h-3 text-neutral-400" />
                  {cat.name}
                </Link>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest"
              >
                Browse All Apparel <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {matchingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

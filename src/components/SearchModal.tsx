import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearchTerm('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }
    const q = searchTerm.toLowerCase();
    const filtered = PRODUCTS.filter((p) => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchCategory = p.categoryName.toLowerCase().includes(q);
      const matchSub = p.subtitle?.toLowerCase().includes(q) || false;
      const matchFabric = p.fabric?.toLowerCase().includes(q) || false;
      const matchWeight = p.fabricWeight?.toLowerCase().includes(q) || false;
      return matchName || matchCategory || matchSub || matchFabric || matchWeight;
    });
    setResults(filtered);
  }, [searchTerm]);

  if (!isOpen) return null;

  const handleSelectProduct = (slug: string) => {
    onClose();
    navigate(`/product/${slug}`);
  };

  const handleViewAllResults = () => {
    onClose();
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  const popularSearches = ['Heavyweight Hoodie', 'Boxy T-Shirt', 'Barrel Sweatpants', 'Vintage Denim', 'Stand Collar', 'Baby Tee'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative min-h-screen px-4 pt-16 pb-12 flex justify-center">
        <div className="relative w-full max-w-3xl bg-[#F8F7F4] shadow-2xl border border-neutral-200 z-10 self-start p-6 sm:p-8 animate-fade-in">
          
          {/* Top Bar with Input */}
          <div className="flex items-center gap-3 pb-4 border-b border-neutral-200">
            <Search className="w-5 h-5 text-neutral-500 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchTerm.trim()) {
                  handleViewAllResults();
                }
              }}
              placeholder="Search by garment, fabric weight (GSM), or style..."
              className="w-full text-base sm:text-lg bg-transparent border-none outline-none font-medium placeholder-neutral-400 text-neutral-900"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="p-1 text-neutral-400 hover:text-black"
                title="Clear input"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-500 hover:text-black ml-2 rounded-full hover:bg-neutral-200"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Popular Tag suggestions when search is empty */}
          {!searchTerm && (
            <div className="py-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 block mb-3">
                Suggested Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchTerm(term)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium bg-white hover:bg-black hover:text-white border border-neutral-200 px-3.5 py-1.5 transition-colors"
                  >
                    <Tag className="w-3 h-3 text-neutral-400" />
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results List */}
          {searchTerm && (
            <div className="py-5">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4">
                <span>Matching Products ({results.length})</span>
                {results.length > 0 && (
                  <button
                    onClick={handleViewAllResults}
                    className="text-neutral-900 hover:underline flex items-center gap-1"
                  >
                    View All Results <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>

              {results.length === 0 ? (
                <div className="text-center py-10 text-neutral-500">
                  <p className="font-editorial text-base text-neutral-800">No garments matched &ldquo;{searchTerm}&rdquo;</p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Try searching for &ldquo;Hoodie&rdquo;, &ldquo;Boxy Tee&rdquo;, or &ldquo;Denim&rdquo;.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
                  {results.slice(0, 6).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSelectProduct(item.slug)}
                      className="flex items-center gap-4 p-2.5 bg-white border border-neutral-200 hover:border-black transition-all cursor-pointer group"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-14 h-16 object-cover bg-neutral-100 shrink-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.pexels.com/photos/19273260/pexels-photo-19273260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=160';
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] uppercase tracking-wider text-neutral-400">
                          {item.categoryName} {item.fabricWeight && `• ${item.fabricWeight}`}
                        </div>
                        <h4 className="text-sm font-medium text-neutral-900 truncate group-hover:underline">
                          {item.name}
                        </h4>
                        <div className="text-xs font-semibold text-neutral-900 mt-0.5">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all mr-2" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

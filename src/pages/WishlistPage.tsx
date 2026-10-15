import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useStore } from '../context/StoreContext';

export const WishlistPage: React.FC = () => {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="bg-[#F8F7F4] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 pb-4 border-b border-neutral-200">
          <nav className="text-xs text-neutral-400 mb-2 flex items-center gap-1.5 uppercase tracking-wider">
            <Link to="/" className="hover:text-black">Home</Link>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">Wishlist</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <h1 className="font-editorial text-3xl sm:text-4xl font-bold uppercase text-neutral-950">
                Saved Items ({savedProducts.length})
              </h1>
              <p className="text-xs text-neutral-500 mt-1">
                Your curated streetwear pieces saved for future drops and orders.
              </p>
            </div>
            {savedProducts.length > 0 && (
              <Link
                to="/shop"
                className="text-xs font-bold uppercase tracking-wider text-neutral-900 hover:underline flex items-center gap-1"
              >
                Continue Browsing <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

        {savedProducts.length === 0 ? (
          <div className="bg-white border border-neutral-200 p-16 text-center max-w-md mx-auto shadow-xs space-y-4">
            <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="font-editorial text-2xl font-bold uppercase text-neutral-900">
              Your Wishlist is Empty
            </h2>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Explore our current edit of heavyweight hoodies, boxy tees, and street essentials to save your favorite garments.
            </p>
            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-[#111111] text-white text-xs uppercase tracking-widest font-semibold px-8 py-3.5 hover:bg-black transition-colors"
              >
                Shop All Apparel <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {savedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-neutral-200 flex flex-col justify-between group shadow-xs hover:border-black transition-all"
              >
                <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
                  <Link to={`/product/${product.slug}`} className="block w-full h-full">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-2.5 right-2.5 p-2 bg-white/90 hover:bg-white rounded-full text-neutral-600 hover:text-red-600 shadow-sm transition-colors"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400">
                      {product.categoryName}
                    </div>
                    <h3 className="font-medium text-xs sm:text-sm text-neutral-900 line-clamp-1 mt-0.5">
                      <Link to={`/product/${product.slug}`} className="hover:underline">
                        {product.name}
                      </Link>
                    </h3>
                    <div className="text-sm font-bold text-neutral-950 mt-1">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex gap-2">
                    <button
                      onClick={() => {
                        const defaultCol = product.colors[0]?.name || 'Standard';
                        const defaultSz = product.sizes[0] || 'Standard';
                        addToCart(product, defaultCol, defaultSz, 1);
                      }}
                      className="flex-1 bg-[#111111] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider py-2.5 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Move to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

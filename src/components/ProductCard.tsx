import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, AlertCircle } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isInWishlist, toggleWishlist, addToCart, setQuickViewProduct } = useStore();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickAdding, setIsQuickAdding] = useState(false);
  const [imgError, setImgError] = useState(false);

  const isFavorited = isInWishlist(product.id);
  const currentColor = product.colors[selectedColorIndex] || product.colors[0];

  // Primary image
  const displayImage = imgError
    ? 'https://images.pexels.com/photos/19273260/pexels-photo-19273260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600'
    : (isHovered && product.images[1] ? product.images[1] : product.images[0]);

  const handleQuickAdd = (size: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, currentColor.name, size, 1);
    setIsQuickAdding(false);
  };

  return (
    <div 
      className="group relative flex flex-col bg-white border border-neutral-200/80 hover:border-neutral-400 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsQuickAdding(false);
      }}
    >
      {/* Visual Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F2F1ED]">
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={displayImage}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10 pointer-events-none">
          {product.flaggedForReview ? (
            <span className="bg-amber-600 text-white text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 shadow-sm flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> Flagged for Audit
            </span>
          ) : (
            <>
              {product.isNewArrival && (
                <span className="bg-[#111111] text-white text-[10px] font-bold tracking-widest uppercase px-2 py-0.5">
                  New Arrival
                </span>
              )}
              {product.isBestSeller && !product.isNewArrival && (
                <span className="bg-neutral-800 text-neutral-100 text-[10px] font-medium tracking-widest uppercase px-2 py-0.5">
                  Best Seller
                </span>
              )}
            </>
          )}
        </div>

        {/* Top Right Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className="absolute top-2.5 right-2.5 z-10 p-2 bg-white/90 backdrop-blur-xs rounded-full text-neutral-700 hover:text-black hover:bg-white shadow-sm transition-all duration-200 focus:outline-none"
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${
              isFavorited ? 'fill-red-500 text-red-500' : 'text-neutral-700'
            }`} 
          />
        </button>

        {/* Bottom Actions Overlay (Quick View & Quick Add) */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {!isQuickAdding ? (
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setQuickViewProduct(product);
                }}
                className="flex-1 bg-white/95 hover:bg-white text-neutral-900 text-xs font-semibold uppercase tracking-wider py-2.5 px-3 flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                Quick View
              </button>
              
              {!product.flaggedForReview && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (product.sizes.length === 1) {
                      addToCart(product, currentColor.name, product.sizes[0], 1);
                    } else {
                      setIsQuickAdding(true);
                    }
                  }}
                  className="bg-[#111111] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider p-2.5 flex items-center justify-center shadow-sm transition-colors"
                  title="Quick Add to Bag"
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              )}
            </div>
          ) : (
            <div className="bg-white p-2.5 shadow-lg border border-neutral-200">
              <div className="flex items-center justify-between text-[11px] font-semibold text-neutral-600 mb-1.5 uppercase tracking-wider">
                <span>Select Size:</span>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsQuickAdding(false);
                  }}
                  className="text-neutral-400 hover:text-neutral-900"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={(e) => handleQuickAdd(sz, e)}
                    className="flex-1 min-w-[36px] py-1 text-xs font-medium border border-neutral-300 hover:border-black hover:bg-neutral-900 hover:text-white transition-colors"
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Category / Fabric Weight */}
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-neutral-500 mb-1">
            <span>{product.categoryName}</span>
            {product.fabricWeight && (
              <span className="font-mono text-[10px] text-neutral-600 font-medium">
                {product.fabricWeight.split(' ')[0]} GSM
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-medium text-neutral-900 text-sm leading-snug line-clamp-1 group-hover:underline">
            <Link to={`/product/${product.slug}`}>
              {product.name}
            </Link>
          </h3>
        </div>

        {/* Pricing and Color Swatches */}
        <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-neutral-950">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-xs text-neutral-400 line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Color Swatch Dots */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5">
              {product.colors.slice(0, 4).map((col, idx) => (
                <button
                  key={col.name}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedColorIndex(idx);
                  }}
                  title={col.name}
                  className={`w-3.5 h-3.5 rounded-full border transition-all ${
                    selectedColorIndex === idx 
                      ? 'ring-1 ring-offset-1 ring-black scale-110 border-black' 
                      : 'border-neutral-300 hover:scale-105'
                  }`}
                  style={{ backgroundColor: col.hex }}
                  aria-label={`Select color ${col.name}`}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-[10px] text-neutral-500">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Check, ShoppingBag, Heart, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const QuickViewModal: React.FC = () => {
  const { 
    quickViewProduct, 
    setQuickViewProduct, 
    addToCart, 
    isInWishlist, 
    toggleWishlist 
  } = useStore();

  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [validationError, setValidationError] = useState('');

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isFavorited = isInWishlist(product.id);

  // Set default color/size on mount if not selected
  const currentColor = selectedColor || product.colors[0]?.name || 'Standard';
  const currentSize = selectedSize || product.sizes[0] || 'Standard';

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize && !product.sizes[0]) {
      setValidationError('Please select a size');
      return;
    }
    setValidationError('');
    addToCart(product, currentColor, currentSize, quantity);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-3xl bg-[#F8F7F4] shadow-2xl border border-neutral-200 overflow-hidden z-10 animate-fade-in">
          
          {/* Close button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white rounded-full text-neutral-600 hover:text-black transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Gallery Left */}
            <div className="p-6 bg-white flex flex-col justify-between border-r border-neutral-200">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 mb-3">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.pexels.com/photos/19273260/pexels-photo-19273260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600';
                  }}
                />
              </div>

              {/* Thumbnail Strip */}
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-14 h-16 border overflow-hidden transition-all ${
                        activeImageIndex === idx ? 'border-black ring-1 ring-black' : 'border-neutral-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info Right */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-widest text-neutral-500 font-semibold mb-1">
                  {product.categoryName}
                </div>
                <h2 className="text-xl font-bold font-editorial text-neutral-950 uppercase tracking-tight">
                  {product.name}
                </h2>
                
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="text-xl font-semibold text-neutral-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.fabricWeight && (
                    <span className="text-xs bg-neutral-200 text-neutral-800 px-2 py-0.5 rounded-xs font-mono font-medium">
                      {product.fabricWeight}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Color Selector */}
                {product.colors && product.colors.length > 0 && (
                  <div className="mt-5">
                    <div className="text-xs font-medium text-neutral-800 mb-2 flex justify-between">
                      <span>Color: <strong className="font-semibold">{currentColor}</strong></span>
                    </div>
                    <div className="flex gap-2">
                      {product.colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => setSelectedColor(c.name)}
                          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                            currentColor === c.name ? 'border-black ring-2 ring-black/20 scale-105' : 'border-neutral-300'
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        >
                          {currentColor === c.name && (
                            <Check className={`w-3.5 h-3.5 ${c.hex === '#FFFFFF' || c.hex === '#F8F7F4' ? 'text-black' : 'text-white'}`} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selector */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="mt-5">
                    <div className="text-xs font-medium text-neutral-800 mb-2 flex justify-between">
                      <span>Size: <strong className="font-semibold">{currentSize}</strong></span>
                      <Link 
                        to="/size-guide" 
                        onClick={() => setQuickViewProduct(null)}
                        className="text-[11px] text-neutral-500 hover:text-black underline"
                      >
                        Size Guide
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((s) => (
                        <button
                          key={s}
                          onClick={() => {
                            setSelectedSize(s);
                            setValidationError('');
                          }}
                          className={`min-w-[42px] h-9 px-2 text-xs font-semibold uppercase border transition-colors ${
                            currentSize === s 
                              ? 'border-black bg-black text-white' 
                              : 'border-neutral-300 bg-white text-neutral-900 hover:border-black'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {validationError && (
                  <p className="mt-2 text-xs text-red-600 font-medium">{validationError}</p>
                )}

                {/* Quantity */}
                <div className="mt-5 flex items-center gap-3">
                  <span className="text-xs font-medium text-neutral-800">Quantity:</span>
                  <div className="flex items-center border border-neutral-300 bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2.5 py-1 text-xs hover:bg-neutral-100"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2.5 py-1 text-xs hover:bg-neutral-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-5 border-t border-neutral-200 space-y-3">
                <div className="flex gap-2">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-[#111111] hover:bg-black text-white py-3.5 px-4 font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to Shopping Bag
                  </button>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="p-3 border border-neutral-300 bg-white hover:border-black transition-colors"
                    title={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
                  >
                    <Heart className={`w-4 h-4 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-neutral-700'}`} />
                  </button>
                </div>

                <Link
                  to={`/product/${product.slug}`}
                  onClick={() => setQuickViewProduct(null)}
                  className="block text-center text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-black py-1 flex items-center justify-center gap-1"
                >
                  View Complete Product Page <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

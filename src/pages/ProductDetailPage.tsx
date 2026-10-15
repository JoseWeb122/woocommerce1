import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  ShoppingBag, 
  Ruler, 
  Truck, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  AlertCircle,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useStore } from '../context/StoreContext';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart, isInWishlist, toggleWishlist } = useStore();

  const product = PRODUCTS.find((p) => p.slug === slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [validationError, setValidationError] = useState('');
  const [openAccordion, setOpenAccordion] = useState<string | null>('fabric');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isSizeGuideModalOpen, setIsSizeGuideModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
    if (product) {
      setSelectedColor(product.colors[0]?.name || '');
      setSelectedSize(product.sizes.length === 1 ? product.sizes[0] : '');
      setValidationError('');
    }
  }, [slug, product]);

  if (!product) {
    return (
      <div className="min-h-[70vh] bg-[#F8F7F4] flex flex-col items-center justify-center text-center p-6">
        <h2 className="font-editorial text-3xl font-bold uppercase text-neutral-900">Garment Not Found</h2>
        <p className="text-sm text-neutral-500 mt-2 max-w-md">
          The requested apparel item does not exist or may have been updated in the catalog.
        </p>
        <Link
          to="/shop"
          className="mt-6 bg-[#111111] text-white px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-black transition-colors"
        >
          Return to Shop All
        </Link>
      </div>
    );
  }

  const isFavorited = isInWishlist(product.id);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category && !p.flaggedForReview
  ).slice(0, 4);

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      setValidationError('Please choose a size to continue.');
      return;
    }
    setValidationError('');
    const chosenColor = selectedColor || product.colors[0]?.name || 'Standard';
    const chosenSize = selectedSize || product.sizes[0] || 'Standard';
    addToCart(product, chosenColor, chosenSize, quantity);
  };

  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  return (
    <div className="bg-[#F8F7F4] min-h-screen pb-24">
      
      {/* Breadcrumb Header */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="text-xs text-neutral-500 flex items-center gap-1.5 uppercase tracking-wider">
            <Link to="/" className="hover:text-black">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-black">Shop</Link>
            <span>/</span>
            <Link to={`/category/${product.category}`} className="hover:text-black">
              {product.categoryName}
            </Link>
            <span>/</span>
            <span className="text-neutral-900 font-semibold truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Flagged Item Warning if reviewing demo items */}
      {product.flaggedForReview && (
        <div className="bg-amber-500/15 border-b border-amber-600/30 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-3 text-xs text-amber-900">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
            <div>
              <strong>Store Owner Audit Flag:</strong> {product.flagReason}
            </div>
          </div>
        </div>
      )}

      {/* Main Product Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* ========================================================
              LEFT COLUMN: PRODUCT IMAGE GALLERY
              ======================================================== */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[3/4] bg-white border border-neutral-200 overflow-hidden shadow-xs">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.pexels.com/photos/19273260/pexels-photo-19273260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900';
                }}
              />

              {/* Lightbox Trigger */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-neutral-800 p-2.5 rounded-full shadow-md transition-colors"
                title="Expand image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Badge */}
              {product.isNewArrival && (
                <span className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                  New Arrival
                </span>
              )}
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-24 bg-white border shrink-0 overflow-hidden transition-all ${
                      activeImageIndex === idx
                        ? 'border-black ring-1 ring-black'
                        : 'border-neutral-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} angle ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ========================================================
              RIGHT COLUMN: PURCHASE PANEL
              ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            
            {/* Category Subtitle */}
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">
              <span>{product.categoryName}</span>
              <span className="text-neutral-400 font-mono text-[11px]">ID: {product.id}</span>
            </div>

            {/* Product Title */}
            <h1 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-neutral-950">
              {product.name}
            </h1>

            {/* Subtitle / Cut */}
            {product.subtitle && (
              <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-1">
                {product.subtitle}
              </p>
            )}

            {/* Price Row */}
            <div className="mt-4 pb-4 border-b border-neutral-200 flex items-baseline gap-3">
              <span className="text-2xl font-bold text-neutral-950">
                ${product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-neutral-400 line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
              )}
              {product.fabricWeight && (
                <span className="ml-auto inline-flex items-center gap-1 bg-neutral-900 text-white text-[11px] font-mono px-2.5 py-1">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  {product.fabricWeight}
                </span>
              )}
            </div>

            {/* Description Paragraph */}
            <p className="mt-5 text-sm text-neutral-700 leading-relaxed">
              {product.description}
            </p>

            {/* ========================================================
                VARIANT CONTROLS: COLOR & SIZE
                ======================================================== */}
            <div className="mt-6 space-y-6 pt-6 border-t border-neutral-200">
              
              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider mb-2.5">
                    <span className="text-neutral-800">
                      Color: <strong className="text-black font-bold">{selectedColor || product.colors[0]?.name}</strong>
                    </span>
                    <span className="text-neutral-400 text-[11px] normal-case">
                      {product.colors.length} options
                    </span>
                  </div>
                  
                  <div className="flex gap-2.5">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedColor === c.name || (!selectedColor && product.colors[0]?.name === c.name)
                            ? 'border-black ring-2 ring-black/30 scale-105'
                            : 'border-neutral-300 hover:scale-105'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                        aria-label={`Select color ${c.name}`}
                      >
                        {(selectedColor === c.name || (!selectedColor && product.colors[0]?.name === c.name)) && (
                          <Check className={`w-4 h-4 ${c.hex === '#FFFFFF' || c.hex === '#F8F7F4' || c.hex === '#ECE8DF' ? 'text-black' : 'text-white'}`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider mb-2.5">
                    <span className="text-neutral-800">
                      Size: <strong className="text-black font-bold">{selectedSize || 'Select a size'}</strong>
                    </span>
                    
                    <button
                      type="button"
                      onClick={() => setIsSizeGuideModalOpen(true)}
                      className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-black underline underline-offset-2"
                    >
                      <Ruler className="w-3.5 h-3.5" /> Size Guide
                    </button>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => {
                          setSelectedSize(s);
                          setValidationError('');
                        }}
                        className={`h-11 text-xs font-bold uppercase border transition-all ${
                          selectedSize === s
                            ? 'border-black bg-black text-white shadow-xs'
                            : 'border-neutral-300 bg-white text-neutral-800 hover:border-black'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  {validationError && (
                    <div className="mt-2 text-xs text-red-600 font-semibold flex items-center gap-1.5 animate-shake">
                      <AlertCircle className="w-3.5 h-3.5" /> {validationError}
                    </div>
                  )}
                </div>
              )}

              {/* Quantity Stepper */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-700">Quantity:</span>
                <div className="flex items-center border border-neutral-300 bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3.5 py-2 text-xs font-bold hover:bg-neutral-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-semibold text-neutral-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3.5 py-2 text-xs font-bold hover:bg-neutral-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Purchase Action Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    disabled={product.flaggedForReview}
                    className={`flex-1 py-4 px-6 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-lg transition-colors ${
                      product.flaggedForReview
                        ? 'bg-neutral-400 text-white cursor-not-allowed'
                        : 'bg-[#111111] hover:bg-black text-white'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {product.flaggedForReview ? 'Flagged Demo Item' : 'Add to Shopping Bag'}
                  </button>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="p-4 border border-neutral-300 bg-white hover:border-black transition-colors"
                    title={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
                  >
                    <Heart className={`w-5 h-5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-neutral-700'}`} />
                  </button>
                </div>

                {/* Direct Checkout Button */}
                {!product.flaggedForReview && (
                  <button
                    onClick={() => {
                      if (!selectedSize && product.sizes.length > 0) {
                        setValidationError('Please select a size first.');
                        return;
                      }
                      handleAddToCart();
                      navigate('/checkout');
                    }}
                    className="w-full bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 hover:border-black py-3 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5"
                  >
                    Instant Checkout <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Trust Badges */}
              <div className="p-4 bg-white border border-neutral-200 space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-neutral-700" />
                  <span>Printed &amp; fulfilled via Tapstitch standard production</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-neutral-700" />
                  <span>Quality checked pre-shrunk cotton &amp; fleece fabrics</span>
                </div>
              </div>

              {/* ========================================================
                  EXPANDABLE ACCORDIONS
                  ======================================================== */}
              <div className="border-t border-neutral-200 divide-y divide-neutral-200 text-xs">
                
                {/* 1. Fabric & Specs */}
                <div>
                  <button
                    onClick={() => toggleAccordion('fabric')}
                    className="w-full py-3.5 flex items-center justify-between font-bold uppercase tracking-wider text-neutral-900 text-left"
                  >
                    <span>Fabric &amp; Garment Specifications</span>
                    {openAccordion === 'fabric' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'fabric' && (
                    <div className="pb-4 space-y-1.5 text-neutral-600 leading-relaxed">
                      {product.fabric && <p><strong>Composition:</strong> {product.fabric}</p>}
                      {product.fabricWeight && <p><strong>Fabric Weight:</strong> {product.fabricWeight}</p>}
                      {product.fit && <p><strong>Fit Style:</strong> {product.fit}</p>}
                      {product.features && (
                        <div className="mt-2 pt-2 border-t border-neutral-100 space-y-1">
                          <strong>Construction Highlights:</strong>
                          <ul className="list-disc pl-4 space-y-0.5 mt-1">
                            {product.features.map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* 2. Care Instructions */}
                <div>
                  <button
                    onClick={() => toggleAccordion('care')}
                    className="w-full py-3.5 flex items-center justify-between font-bold uppercase tracking-wider text-neutral-900 text-left"
                  >
                    <span>Care Instructions</span>
                    {openAccordion === 'care' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'care' && (
                    <div className="pb-4 space-y-1 text-neutral-600 leading-relaxed">
                      {product.careInstructions ? (
                        <ul className="list-disc pl-4 space-y-1">
                          {product.careInstructions.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>Machine wash cold (30°C) inside out. Tumble dry low or hang dry to preserve garment shape.</p>
                      )}
                    </div>
                  )}
                </div>

                {/* 3. Production & Shipping Transparency */}
                <div>
                  <button
                    onClick={() => toggleAccordion('shipping')}
                    className="w-full py-3.5 flex items-center justify-between font-bold uppercase tracking-wider text-neutral-900 text-left"
                  >
                    <span>Production &amp; Fulfillment</span>
                    {openAccordion === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'shipping' && (
                    <div className="pb-4 text-neutral-600 leading-relaxed space-y-2">
                      <p>
                        Fashion Martinez merchandise is custom-manufactured on-demand using Tapstitch premium apparel blanks and precise garment finishing.
                      </p>
                      <p>
                        Tracking numbers are dispatched automatically upon quality inspection and shipping handover.
                      </p>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            RECOMMENDED PRODUCTS / COMPLETE THE LOOK
            ======================================================== */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-neutral-200">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
                  Styling Rotation
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase text-neutral-950">
                  Complete The Look
                </h3>
              </div>
              <Link
                to={`/category/${product.category}`}
                className="text-xs font-bold uppercase tracking-widest text-neutral-900 hover:underline flex items-center gap-1"
              >
                View Category <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-neutral-300 text-sm font-semibold uppercase tracking-wider p-2"
          >
            Close ✕
          </button>
          <img
            src={product.images[activeImageIndex] || product.images[0]}
            alt={product.name}
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl"
          />
        </div>
      )}

      {/* Size Guide Modal */}
      {isSizeGuideModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative">
            <button
              onClick={() => setIsSizeGuideModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-black font-semibold"
            >
              ✕
            </button>
            <h3 className="font-editorial text-xl font-bold uppercase mb-2">
              Size &amp; Measurement Guide
            </h3>
            <p className="text-xs text-neutral-500 mb-4">
              Measurements taken flat in inches and centimeters. Relaxed contemporary streetwear fit.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-neutral-200">
                <thead className="bg-[#F8F7F4] border-b border-neutral-200 uppercase font-bold text-neutral-700">
                  <tr>
                    <th className="p-2.5">Size</th>
                    <th className="p-2.5">Chest / Width</th>
                    <th className="p-2.5">Body Length</th>
                    <th className="p-2.5">Fit Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-800">
                  <tr>
                    <td className="p-2.5 font-bold">S</td>
                    <td className="p-2.5">25.2 in (64 cm)</td>
                    <td className="p-2.5">26.0 in (66 cm)</td>
                    <td className="p-2.5">True to oversized</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">M</td>
                    <td className="p-2.5">26.0 in (66 cm)</td>
                    <td className="p-2.5">26.8 in (68 cm)</td>
                    <td className="p-2.5">Standard streetwear</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">L</td>
                    <td className="p-2.5">26.8 in (68 cm)</td>
                    <td className="p-2.5">27.6 in (70 cm)</td>
                    <td className="p-2.5">Generous boxy drape</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">XL</td>
                    <td className="p-2.5">27.6 in (70 cm)</td>
                    <td className="p-2.5">28.4 in (72 cm)</td>
                    <td className="p-2.5">Extra volume</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">2XL</td>
                    <td className="p-2.5">28.4 in (72 cm)</td>
                    <td className="p-2.5">29.1 in (74 cm)</td>
                    <td className="p-2.5">Maximum oversized silhouette</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5 text-right">
              <button
                onClick={() => setIsSizeGuideModalOpen(false)}
                className="bg-black text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  RefreshCw, 
  ChevronRight, 
  ChevronLeft,
  Eye,
  ShoppingBag
} from 'lucide-react';
import { PRODUCTS, CATEGORIES_META, EDITORIAL_LOOKS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useStore } from '../context/StoreContext';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { setQuickViewProduct } = useStore();
  const [newArrivalsIndex, setNewArrivalsIndex] = useState(0);

  // Filter products for homepage sections
  const apparelProducts = PRODUCTS.filter(p => !p.flaggedForReview);
  const featuredProducts = apparelProducts.filter(p => p.isFeatured).slice(0, 8);
  const newArrivals = apparelProducts.filter(p => p.isNewArrival);

  const visibleNewArrivals = newArrivals.slice(newArrivalsIndex, newArrivalsIndex + 4);

  const nextNewArrivals = () => {
    if (newArrivalsIndex + 4 < newArrivals.length) {
      setNewArrivalsIndex(newArrivalsIndex + 1);
    } else {
      setNewArrivalsIndex(0);
    }
  };

  const prevNewArrivals = () => {
    if (newArrivalsIndex > 0) {
      setNewArrivalsIndex(newArrivalsIndex - 1);
    } else {
      setNewArrivalsIndex(Math.max(0, newArrivals.length - 4));
    }
  };

  return (
    <div className="bg-[#F8F7F4] min-h-screen">
      
      {/* ========================================================
          SECTION 1: HERO CAMPAIGN
          ======================================================== */}
      <section className="relative w-full h-[88vh] min-h-[600px] max-h-[920px] bg-[#111111] overflow-hidden flex items-end sm:items-center">
        {/* Background Editorial Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/27411295/pexels-photo-27411295.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=2400"
            alt="Fashion Martinez Streetwear Editorial"
            className="w-full h-full object-cover object-[center_35%] opacity-85 filter contrast-105"
          />
          {/* Gradients for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent hidden lg:block" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 mb-4 bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-neutral-200 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Autumn / Winter Streetwear Drop</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.95] text-white text-shadow-sm">
              WEAR YOUR <br />
              <span className="italic font-normal">OWN STATEMENT.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-neutral-200/95 font-light max-w-lg leading-relaxed">
              Everyday essentials. Distinctive style. Made to move with you. High-density combed cotton and heavy fleece built for personal expression.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => navigate('/shop')}
                className="bg-white hover:bg-neutral-100 text-[#111111] px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-200 shadow-xl flex items-center justify-center gap-2 group"
              >
                SHOP THE COLLECTION
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigate('/category/new-arrivals')}
                className="bg-transparent hover:bg-white/10 text-white border border-white/80 px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200 backdrop-blur-xs flex items-center justify-center"
              >
                EXPLORE NEW ARRIVALS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: TRUST & SHOPPING HIGHLIGHTS
          ======================================================== */}
      <section className="bg-white border-y border-neutral-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#F8F7F4] text-neutral-900 border border-neutral-200">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-900">
                  Designed for Everyday Style
                </h4>
                <p className="text-[11px] text-neutral-500">Curated silhouettes built for daily rotation</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#F8F7F4] text-neutral-900 border border-neutral-200">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-900">
                  Easy Online Shopping
                </h4>
                <p className="text-[11px] text-neutral-500">Direct order tracking and fulfillment updates</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#F8F7F4] text-neutral-900 border border-neutral-200">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-900">
                  Secure Checkout
                </h4>
                <p className="text-[11px] text-neutral-500">Encrypted payment architecture</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#F8F7F4] text-neutral-900 border border-neutral-200">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-900">
                  Customer Support
                </h4>
                <p className="text-[11px] text-neutral-500">Direct support within 1–2 business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: SHOP BY CATEGORY
          ======================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
              Curated Taxonomy
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl uppercase font-bold text-neutral-950">
              Shop by Category
            </h2>
          </div>
          <p className="text-xs text-neutral-500 max-w-md mt-2 md:mt-0">
            Engineered silhouettes spanning heavy combed tees, fleece hoodies, barrel trousers, and stand-collar outerwear.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES_META.map((cat) => (
            <Link
              key={cat.id}
              to={cat.slug}
              className="group relative aspect-[3/4] bg-neutral-900 overflow-hidden border border-neutral-200 shadow-xs block"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur-xs px-2.5 py-1 text-neutral-100">
                    {cat.count} Pieces
                  </span>
                </div>

                <div>
                  <h3 className="font-editorial text-xl font-bold uppercase tracking-wide group-hover:underline">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white group-hover:translate-x-1 transition-transform">
                    View Collection <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 4: FEATURED COLLECTION — "THE CURRENT EDIT"
          ======================================================== */}
      <section className="py-16 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-neutral-200">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
                Selected Apparel
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold uppercase text-neutral-950">
                The Current Edit
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                Discover pieces made to become part of your everyday rotation.
              </p>
            </div>

            <Link
              to="/shop"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-neutral-950 hover:underline"
            >
              VIEW ALL PRODUCTS <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: EDITORIAL CAMPAIGN
          ======================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] text-white grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-2xl">
          {/* Large Lifestyle Visual */}
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[580px]">
            <img
              src="https://images.pexels.com/photos/33401556/pexels-photo-33401556.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000"
              alt="Fashion Martinez Campaign"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Editorial Text Block */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-[#111111]">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-4">
                Campaign Narrative
              </span>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight text-white">
                BUILT AROUND <br />
                <span className="italic font-normal">YOUR EVERYDAY.</span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                Discover versatile pieces, expressive graphics, and contemporary silhouettes designed to fit your personal style. Heavy combed jerseys, structured stand collars, and architectural barrel sweats built to look effortlessly composed from morning until late night.
              </p>

              <div className="mt-6 pt-6 border-t border-neutral-800 space-y-2 text-xs text-neutral-400">
                <p>• Premium 445 GSM fleece &amp; 280 GSM combed cotton</p>
                <p>• Pre-shrunk bio-enzyme and snow wash vintage treatments</p>
                <p>• Engineered streetwear drape and clean zero-fuss silhouettes</p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-white text-neutral-950 px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors"
              >
                DISCOVER THE COLLECTION <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: NEW ARRIVALS
          ======================================================== */}
      <section className="py-16 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-neutral-200">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
                Fresh Off The Press
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold uppercase text-neutral-950">
                New Arrivals
              </h2>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevNewArrivals}
                className="p-2 border border-neutral-300 hover:border-black hover:bg-neutral-100 transition-colors"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextNewArrivals}
                className="p-2 border border-neutral-300 hover:border-black hover:bg-neutral-100 transition-colors"
                aria-label="Next products"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
            {visibleNewArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/category/new-arrivals"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-900 hover:underline"
            >
              Explore All New Arrivals ({newArrivals.length}) <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 7: SHOP THE LOOK / EDITORIAL LOOKBOOK
          ======================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
            Styling In Focus
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold uppercase text-neutral-950">
            Shop The Look
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            Coordinated street styling featuring authentic Fashion Martinez catalog pieces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDITORIAL_LOOKS.map((look) => {
            const primaryProd = PRODUCTS.find(p => p.slug === look.primaryProductSlug);
            const secondaryProd = PRODUCTS.find(p => p.slug === look.secondaryProductSlug);

            return (
              <div 
                key={look.id}
                className="bg-white border border-neutral-200 overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden group">
                  <img
                    src={look.image}
                    alt={look.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-300 block">
                      Outfit Concept
                    </span>
                    <h3 className="font-editorial text-lg font-bold uppercase leading-snug">
                      {look.title}
                    </h3>
                  </div>
                </div>

                {/* Outfit Associated Real Catalog Items */}
                <div className="p-5 space-y-3 bg-white">
                  <p className="text-xs text-neutral-600 line-clamp-2">
                    {look.description}
                  </p>

                  <div className="pt-3 border-t border-neutral-100 space-y-2">
                    {primaryProd && (
                      <div className="flex items-center justify-between text-xs py-1 hover:bg-neutral-50 px-1 -mx-1 transition-colors">
                        <Link 
                          to={`/product/${primaryProd.slug}`}
                          className="font-medium text-neutral-900 hover:underline truncate max-w-[200px]"
                        >
                          1. {primaryProd.name}
                        </Link>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-neutral-900">${primaryProd.price.toFixed(2)}</span>
                          <button
                            onClick={() => setQuickViewProduct(primaryProd)}
                            className="text-neutral-500 hover:text-black"
                            title="Quick View"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {secondaryProd && (
                      <div className="flex items-center justify-between text-xs py-1 hover:bg-neutral-50 px-1 -mx-1 transition-colors">
                        <Link 
                          to={`/product/${secondaryProd.slug}`}
                          className="font-medium text-neutral-900 hover:underline truncate max-w-[200px]"
                        >
                          2. {secondaryProd.name}
                        </Link>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-neutral-900">${secondaryProd.price.toFixed(2)}</span>
                          <button
                            onClick={() => setQuickViewProduct(secondaryProd)}
                            className="text-neutral-500 hover:text-black"
                            title="Quick View"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {primaryProd && (
                    <Link
                      to={`/product/${primaryProd.slug}`}
                      className="w-full mt-2 bg-neutral-900 hover:bg-black text-white text-xs uppercase tracking-wider py-2 text-center block font-semibold transition-colors"
                    >
                      Shop Featured Piece
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          SECTION 8: BRAND STORY (GROUNDED IN REAL IDENTITY)
          ======================================================== */}
      <section className="py-20 bg-[#EAE8E3] border-y border-neutral-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold block mb-2">
                Brand Statement
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-neutral-950 leading-tight">
                STYLE IS PERSONAL.
              </h2>
              <p className="mt-5 text-sm sm:text-base text-neutral-700 leading-relaxed">
                Fashion Martinez is built around simple, high-quality wardrobe essentials. From comfortable heavyweight hoodies and boxy t-shirts to everyday activewear and curved barrel pants, we craft pieces you can mix and match effortlessly.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                By pairing durable construction with modern streetwear cuts, our merchandise empowers you to make your own statement every single day.
              </p>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border-b-2 border-neutral-950 pb-1 text-xs uppercase tracking-widest font-bold text-neutral-950 hover:text-neutral-700 transition-colors"
                >
                  LEARN MORE ABOUT FASHION MARTINEZ <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-[16/10] overflow-hidden shadow-lg border border-neutral-300 bg-neutral-200">
                <img
                  src="https://images.pexels.com/photos/39360162/pexels-photo-39360162.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600"
                  alt="Fashion Martinez Brand Lifestyle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          BOTTOM FAST CTA BAR
          ======================================================== */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-editorial text-2xl font-bold uppercase text-neutral-900">
            Ready to upgrade your everyday rotation?
          </h3>
          <p className="text-xs text-neutral-500 mt-2">
            Explore 20+ verified streetwear garments ready to mix and match.
          </p>
          <div className="mt-5 flex justify-center gap-4">
            <Link
              to="/shop"
              className="bg-[#111111] hover:bg-black text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors shadow-md flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" /> Explore Catalog
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

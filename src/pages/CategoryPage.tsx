import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES_META } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { SortOption } from '../types';

export const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // Find meta if standard category
  const meta = CATEGORIES_META.find(c => c.id === categorySlug);

  // Dynamic titles & data-driven filtering
  const categoryInfo = useMemo(() => {
    switch (categorySlug) {
      case 't-shirts':
        return {
          title: 'T-Shirts & Tops',
          subtitle: 'Heavyweight 200–300 GSM combed cotton cuts, baby tees, and vintage enzyme wash silhouettes.',
          filter: (p: any) => p.category === 't-shirts' && !p.flaggedForReview,
          heroImg: 'https://images.pexels.com/photos/19273260/pexels-photo-19273260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600'
        };
      case 'hoodies-sweatshirts':
        return {
          title: 'Hoodies & Sweatshirts',
          subtitle: 'Signature 450 GSM fleece pullovers, full-zip drop-shoulder hoodies, and snow-wash treatments.',
          filter: (p: any) => p.category === 'hoodies-sweatshirts' && !p.flaggedForReview,
          heroImg: 'https://images.pexels.com/photos/4118956/pexels-photo-4118956.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600'
        };
      case 'bottoms':
        return {
          title: 'Pants & Joggers',
          subtitle: 'Architectural barrel-leg fleece sweatpants, 13.5 oz wide-leg denim, and tonal pattern trousers.',
          filter: (p: any) => p.category === 'bottoms' && !p.flaggedForReview,
          heroImg: 'https://images.pexels.com/photos/17198649/pexels-photo-17198649.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600'
        };
      case 'outerwear':
        return {
          title: 'Jackets & Outerwear',
          subtitle: 'Substantial 445 GSM dual-zip stand collar jackets and hooded vintage washed denim outerwear.',
          filter: (p: any) => p.category === 'outerwear' && !p.flaggedForReview,
          heroImg: 'https://images.pexels.com/photos/19556416/pexels-photo-19556416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600'
        };
      case 'new-arrivals':
        return {
          title: 'New Arrivals',
          subtitle: 'The latest drops crafted through Tapstitch for the Fashion Martinez everyday rotation.',
          filter: (p: any) => p.isNewArrival && !p.flaggedForReview,
          heroImg: 'https://images.pexels.com/photos/27411295/pexels-photo-27411295.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600'
        };
      case 'best-sellers':
        return {
          title: 'Best Sellers',
          subtitle: 'Our most sought-after essentials, tested for comfort, durability, and contemporary fit.',
          filter: (p: any) => p.isBestSeller && !p.flaggedForReview,
          heroImg: 'https://images.pexels.com/photos/33401555/pexels-photo-33401555.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600'
        };
      case 'accessories':
        return {
          title: 'Accessories',
          subtitle: 'Caps, socks, and street accessories. Note: Curated accessories are scheduled for subsequent drops.',
          filter: (p: any) => p.category === 'accessories' && !p.flaggedForReview,
          heroImg: 'https://images.pexels.com/photos/11962280/pexels-photo-11962280.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600'
        };
      default:
        return {
          title: meta ? meta.name : 'Category Collection',
          subtitle: meta ? meta.description : 'Curated apparel from Fashion Martinez.',
          filter: (p: any) => p.category === categorySlug && !p.flaggedForReview,
          heroImg: 'https://images.pexels.com/photos/30193381/pexels-photo-30193381.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600'
        };
    }
  }, [categorySlug, meta]);

  const categoryProducts = useMemo(() => {
    return PRODUCTS.filter(categoryInfo.filter).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [categoryInfo, sortBy]);

  return (
    <div className="bg-[#F8F7F4] min-h-screen pb-24">
      
      {/* Category Banner Hero */}
      <div className="relative bg-[#111111] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={categoryInfo.heroImg}
            alt={categoryInfo.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-neutral-400 mb-3 flex items-center gap-1.5 uppercase tracking-wider">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-white">Shop</Link>
            <span>/</span>
            <span className="text-white font-medium">{categoryInfo.title}</span>
          </nav>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            {categoryInfo.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl font-light leading-relaxed">
            {categoryInfo.subtitle}
          </p>
        </div>
      </div>

      {/* Catalog Grid Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Controls Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
          <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
            {categoryProducts.length} {categoryProducts.length === 1 ? 'Garment' : 'Garments'} Available
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-neutral-500 hidden sm:inline">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort category products"
                className="appearance-none bg-white border border-neutral-300 text-xs font-semibold uppercase tracking-wider pl-3 pr-8 py-2 hover:border-black cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Alphabetical (A-Z)</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Product Grid or Honest Empty State */}
        {categoryProducts.length === 0 ? (
          <div className="bg-white border border-neutral-200 p-12 text-center my-8 space-y-4 max-w-2xl mx-auto shadow-xs">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-500">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl font-bold uppercase text-neutral-900">
              No Pieces in this Category Yet
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We strictly display verified catalog merchandise and do not invent dummy inventory. This collection is in active design via Tapstitch and will launch in an upcoming release.
            </p>
            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-[#111111] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 hover:bg-neutral-800 transition-colors"
              >
                Explore Available Apparel <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 pt-8">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Supporting Other Categories Link Bar */}
        <div className="mt-16 pt-10 border-t border-neutral-200">
          <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 text-center">
            Explore Other Collections
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES_META.filter(c => c.id !== categorySlug).map((c) => (
              <Link
                key={c.id}
                to={c.slug}
                className="bg-white border border-neutral-300 hover:border-black px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-800 transition-colors"
              >
                {c.name} ({c.count})
              </Link>
            ))}
            <Link
              to="/shop"
              className="bg-neutral-900 text-white px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              All Apparel
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

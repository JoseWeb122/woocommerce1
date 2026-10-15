import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CATEGORIES_META } from '../data/products';

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const { cartCount, wishlist, setIsCartOpen } = useStore();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const megaMenuTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    megaMenuTimeout.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* 1. Announcement Bar */}
      <div className="bg-[#111111] text-[#F8F7F4] text-xs tracking-widest uppercase py-2 px-4 text-center font-medium border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span>YOUR STYLE. YOUR STATEMENT. EXPLORE THE COLLECTION.</span>
          <span className="hidden sm:inline-block text-neutral-500">|</span>
          <span className="hidden sm:inline-block text-neutral-400 text-[11px] normal-case tracking-normal">
            Authentic Tapstitch Garments &amp; Heavyweight Streetwear
          </span>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div 
        className={`w-full transition-all duration-200 border-b ${
          isScrolled 
            ? 'bg-[#F8F7F4]/95 backdrop-blur-md border-neutral-300 shadow-sm py-3.5' 
            : 'bg-[#F8F7F4] border-neutral-200 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Mobile hamburger menu */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 text-neutral-900 hover:text-black focus:outline-none"
              aria-label="Open mobile navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Brand Wordmark */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <Link to="/" className="inline-block group">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 font-editorial uppercase block">
                FASHION MARTINEZ
              </span>
              <span className="block text-[9px] tracking-[0.3em] uppercase text-neutral-500 font-sans -mt-1 group-hover:text-black transition-colors">
                ESTABLISHED APPAREL
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide">
            {/* Shop with Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                to="/shop" 
                className={`flex items-center gap-1 uppercase tracking-wider py-2 transition-colors ${
                  location.pathname.startsWith('/shop') || location.pathname.startsWith('/category')
                    ? 'text-black font-semibold'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                Shop
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Mega Menu Dropdown */}
              {isMegaMenuOpen && (
                <div 
                  className="absolute top-full -left-20 w-[720px] bg-white border border-neutral-200 shadow-xl p-6 grid grid-cols-3 gap-6 animate-fade-in"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Column 1: Shop by Category */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3 pb-1 border-b border-neutral-100">
                      Shop by Category
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {CATEGORIES_META.map(cat => (
                        <li key={cat.id}>
                          <Link 
                            to={cat.slug}
                            className="text-neutral-700 hover:text-black hover:translate-x-1 inline-block transition-transform duration-150"
                          >
                            {cat.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link 
                          to="/category/accessories"
                          className="text-neutral-700 hover:text-black hover:translate-x-1 inline-block transition-transform duration-150"
                        >
                          Accessories
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2: Discover */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3 pb-1 border-b border-neutral-100">
                      Discover
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link 
                          to="/category/new-arrivals"
                          className="text-neutral-700 hover:text-black font-medium hover:translate-x-1 inline-block transition-transform duration-150"
                        >
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/category/best-sellers"
                          className="text-neutral-700 hover:text-black font-medium hover:translate-x-1 inline-block transition-transform duration-150"
                        >
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/shop"
                          className="text-neutral-700 hover:text-black hover:translate-x-1 inline-block transition-transform duration-150"
                        >
                          Shop All ({20}+ Pieces)
                        </Link>
                      </li>
                      <li className="pt-2 border-t border-neutral-100">
                        <Link 
                          to="/shop?audit=true"
                          className="text-xs text-neutral-500 hover:text-black flex items-center gap-1"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
                          Store Audit (Flagged Items)
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3: Visual Feature */}
                  <div className="relative group overflow-hidden bg-neutral-100 h-48">
                    <img 
                      src="https://images.pexels.com/photos/19273260/pexels-photo-19273260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500" 
                      alt="Current Edit"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3 text-white">
                      <span className="text-[10px] uppercase tracking-widest text-neutral-300">The Drop</span>
                      <span className="text-sm font-bold font-editorial">Oversized &amp; Heavyweight</span>
                      <Link 
                        to="/category/outerwear"
                        className="text-xs text-white/90 hover:text-white flex items-center gap-1 mt-1 underline underline-offset-2"
                      >
                        Explore Outerwear <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/category/new-arrivals" 
              className={`uppercase tracking-wider transition-colors ${
                location.pathname === '/category/new-arrivals' ? 'text-black font-semibold' : 'text-neutral-700 hover:text-black'
              }`}
            >
              New Arrivals
            </Link>

            <Link 
              to="/category/best-sellers" 
              className={`uppercase tracking-wider transition-colors ${
                location.pathname === '/category/best-sellers' ? 'text-black font-semibold' : 'text-neutral-700 hover:text-black'
              }`}
            >
              Best Sellers
            </Link>

            <Link 
              to="/about" 
              className={`uppercase tracking-wider transition-colors ${
                location.pathname === '/about' ? 'text-black font-semibold' : 'text-neutral-700 hover:text-black'
              }`}
            >
              About
            </Link>

            <Link 
              to="/contact" 
              className={`uppercase tracking-wider transition-colors ${
                location.pathname === '/contact' ? 'text-black font-semibold' : 'text-neutral-700 hover:text-black'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-1.5 text-neutral-800 hover:text-black transition-colors focus:outline-none"
              aria-label="Search catalog"
              title="Search catalog"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account Link */}
            <Link
              to="/account"
              className="p-1.5 text-neutral-800 hover:text-black transition-colors hidden sm:inline-block"
              aria-label="Customer Account"
              title="Customer Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="relative p-1.5 text-neutral-800 hover:text-black transition-colors"
              aria-label={`Wishlist with ${wishlist.length} saved items`}
              title="Saved items"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#111111] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Shopping Bag / Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1.5 text-neutral-800 hover:text-black transition-colors focus:outline-none"
              aria-label={`Shopping bag with ${cartCount} items`}
              title="Open shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#111111] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Slide-out Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed inset-y-0 left-0 w-[82%] max-w-sm bg-[#F8F7F4] shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-neutral-200">
                <span className="font-editorial text-lg font-bold tracking-tight uppercase">
                  Fashion Martinez
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 text-neutral-600 hover:text-black"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-5 text-base">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                    Catalog
                  </div>
                  <div className="space-y-3 font-medium">
                    <Link to="/shop" className="block text-neutral-900 hover:text-black">
                      Shop All Products
                    </Link>
                    <Link to="/category/new-arrivals" className="block text-neutral-900 hover:text-black">
                      New Arrivals
                    </Link>
                    <Link to="/category/best-sellers" className="block text-neutral-900 hover:text-black">
                      Best Sellers
                    </Link>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-200">
                  <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                    Categories
                  </div>
                  <div className="space-y-2 text-sm">
                    {CATEGORIES_META.map(cat => (
                      <Link 
                        key={cat.id} 
                        to={cat.slug} 
                        className="block text-neutral-700 hover:text-black"
                      >
                        {cat.name}
                      </Link>
                    ))}
                    <Link to="/category/accessories" className="block text-neutral-700 hover:text-black">
                      Accessories
                    </Link>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-200">
                  <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                    Company &amp; Service
                  </div>
                  <div className="space-y-2 text-sm text-neutral-700">
                    <Link to="/about" className="block hover:text-black">About the Label</Link>
                    <Link to="/contact" className="block hover:text-black">Contact Us</Link>
                    <Link to="/faq" className="block hover:text-black">FAQ &amp; Ordering</Link>
                    <Link to="/size-guide" className="block hover:text-black">Size Guide (GSM &amp; Cuts)</Link>
                    <Link to="/shipping-returns" className="block hover:text-black">Shipping &amp; Policies</Link>
                    <Link to="/account" className="block hover:text-black">My Account</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-500">
              <p>Fashion Martinez &copy; 2026</p>
              <p className="mt-1">Print-on-demand streetwear via Tapstitch</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

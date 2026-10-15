import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');
  const { showToast } = useStore();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setIsSubscribed(true);
    showToast('Subscribed to The Edit newsletter (frontend demo confirmation)', 'success');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#F8F7F4] pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="pb-14 mb-14 border-b border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
              Newsletter &amp; Private Releases
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium uppercase tracking-tight">
              Get The Latest Edit.
            </h3>
            <p className="text-sm text-neutral-400 mt-2 max-w-md leading-relaxed">
              Be the first to discover new silhouettes, heavyweight fleece restocks, and seasonal drops.
            </p>
          </div>

          <div className="lg:col-span-6">
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    placeholder="Enter your email address"
                    className="flex-1 bg-neutral-900/90 border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3.5 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-white text-neutral-950 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shrink-0"
                  >
                    Subscribe <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {error && <p className="text-xs text-rose-400 font-medium">{error}</p>}
                <p className="text-[11px] text-neutral-500">
                  By subscribing, you agree to receive editorial updates from Fashion Martinez. Frontend demo mode.
                </p>
              </form>
            ) : (
              <div className="bg-neutral-900 border border-neutral-700 p-4 flex items-center gap-3 text-sm text-neutral-200">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">You are on the list!</div>
                  <div className="text-xs text-neutral-400">
                    Welcome to Fashion Martinez. Confirmation simulated locally.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Multi-column Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10 pb-14 border-b border-neutral-800 text-sm">
          {/* Col 1: Brand Info */}
          <div className="col-span-2 lg:col-span-2 pr-4">
            <Link to="/" className="inline-block mb-3">
              <span className="font-editorial text-xl font-bold tracking-tight uppercase text-white block">
                Fashion Martinez
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-neutral-400 block font-sans">
                Contemporary Streetwear Label
              </span>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-4">
              Simple, high-quality wardrobe essentials. From comfortable 450 GSM fleece hoodies and 280 GSM heavy boxy tees to barrel-leg sweatpants, engineered for effortless everyday rotation.
            </p>
            <div className="inline-flex items-center gap-2 bg-neutral-900 px-3 py-1.5 border border-neutral-800 text-[11px] text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-300" />
              <span>Tapstitch Print-on-Demand Production</span>
            </div>
          </div>

          {/* Col 2: Shop */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-300 mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop All Products</Link></li>
              <li><Link to="/category/t-shirts" className="hover:text-white transition-colors">T-Shirts &amp; Tops</Link></li>
              <li><Link to="/category/hoodies-sweatshirts" className="hover:text-white transition-colors">Hoodies &amp; Sweatshirts</Link></li>
              <li><Link to="/category/bottoms" className="hover:text-white transition-colors">Pants &amp; Joggers</Link></li>
              <li><Link to="/category/outerwear" className="hover:text-white transition-colors">Jackets &amp; Outerwear</Link></li>
              <li><Link to="/category/new-arrivals" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/category/best-sellers" className="hover:text-white transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          {/* Col 3: Customer Care */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-300 mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ &amp; Ordering</Link></li>
              <li><Link to="/size-guide" className="hover:text-white transition-colors">Size &amp; Fit Guide</Link></li>
              <li><Link to="/shipping-returns" className="hover:text-white transition-colors">Shipping &amp; Returns</Link></li>
              <li><Link to="/cart" className="hover:text-white transition-colors">Shopping Bag</Link></li>
              <li><Link to="/wishlist" className="hover:text-white transition-colors">Saved Wishlist</Link></li>
              <li><Link to="/account" className="hover:text-white transition-colors">Customer Account</Link></li>
            </ul>
          </div>

          {/* Col 4: About & Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-300 mb-4">
              About &amp; Info
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Brand Story</Link></li>
              <li><Link to="/shipping-returns" className="hover:text-white transition-colors">Production &amp; Fulfillment</Link></li>
              <li><Link to="/shop?audit=true" className="hover:text-white transition-colors text-amber-400/80">Store Audit (Demo Data)</Link></li>
              <li className="pt-2 text-neutral-500 text-[11px]">
                Support: <span className="text-neutral-300">contact@fashionmartinez.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            <p>&copy; 2026 Fashion Martinez. All rights reserved. Built as a luxury DTC frontend prototype.</p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-neutral-600">Curated for Joshua</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors font-medium uppercase tracking-wider text-[11px]"
            >
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

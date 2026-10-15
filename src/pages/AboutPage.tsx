import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F8F7F4] min-h-screen">
      
      {/* Editorial Hero */}
      <section className="relative bg-[#111111] text-white py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="https://images.pexels.com/photos/33401556/pexels-photo-33401556.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000"
            alt="Fashion Martinez Editorial"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-3">
            About Fashion Martinez
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white">
            WEAR YOUR OWN STATEMENT.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Simple, high-quality wardrobe essentials designed for everyday style, effortless layering, and contemporary silhouettes.
          </p>
        </div>
      </section>

      {/* Brand Introduction Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-neutral-800">
          
          <div className="border-l-2 border-black pl-6 sm:pl-8 py-2">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold uppercase text-neutral-950">
              The Essentials Philosophy
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-700 leading-relaxed font-light">
              &ldquo;Fashion Martinez is a clothing brand focused on simple, high-quality wardrobe essentials. From comfortable hoodies and t-shirts to everyday activewear and structured outerwear, we offer timeless pieces you can mix and match effortlessly.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-4">
              <h3 className="font-editorial text-xl font-bold uppercase text-neutral-950">
                Contemporary Streetwear Proportions
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Rather than chasing fleeting micro-trends, our collections are rooted in intentional streetwear geometry: dropped shoulders that create an effortless drape, wide boxy body proportions, engineered curved barrel sweatpants, and clean double-ply hoods without unnecessary hardware.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-editorial text-xl font-bold uppercase text-neutral-950">
                Substantial Fabric Weights
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                From high-density 200–300 GSM combed cotton jerseys to 445–450 GSM brushed fleece outerwear, our garments are chosen to hold their architectural structure wear after wear, wash after wash.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Visual Editorial Grid */}
      <section className="py-12 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/19273260/pexels-photo-19273260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700"
                alt="Editorial Angle 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-xs font-semibold uppercase tracking-wider bg-black/60 px-2.5 py-1 backdrop-blur-xs">
                Heavy Combed Cotton
              </div>
            </div>

            <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4118956/pexels-photo-4118956.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700"
                alt="Editorial Angle 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-xs font-semibold uppercase tracking-wider bg-black/60 px-2.5 py-1 backdrop-blur-xs">
                450 GSM Brushed Fleece
              </div>
            </div>

            <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/17198649/pexels-photo-17198649.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700"
                alt="Editorial Angle 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-xs font-semibold uppercase tracking-wider bg-black/60 px-2.5 py-1 backdrop-blur-xs">
                Barrel Leg Volume
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Transparency Note */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-white p-8 sm:p-10 border border-neutral-200 shadow-xs space-y-4">
          <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-neutral-800">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="font-editorial text-2xl font-bold uppercase text-neutral-900">
            Print-on-Demand via Tapstitch
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Fashion Martinez operates on an on-demand manufacturing model powered by Tapstitch. Each piece is constructed upon order, eliminating unsold overproduction waste while delivering consistent garment standards.
          </p>
          <div className="pt-2">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black text-white px-8 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Explore The Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

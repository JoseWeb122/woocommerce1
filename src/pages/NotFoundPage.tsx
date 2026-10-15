import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { CATEGORIES_META } from '../data/products';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#F8F7F4] min-h-[75vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-xl w-full text-center space-y-6 bg-white p-8 sm:p-12 border border-neutral-200 shadow-sm">
        
        <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-neutral-800">
          <Compass className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold block mb-1">
            404 Error
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold uppercase text-neutral-950">
            Page Not Found
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
            The page you are looking for does not exist or may have moved. Use the links below to continue exploring the Fashion Martinez collection.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/shop"
            className="bg-[#111111] hover:bg-black text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
          >
            Explore The Shop <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/"
            className="bg-white border border-neutral-300 text-neutral-900 px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:border-black transition-colors"
          >
            Return to Homepage
          </Link>
        </div>

        <div className="pt-6 border-t border-neutral-200 text-xs">
          <span className="text-neutral-400 font-semibold uppercase tracking-wider block mb-2">
            Popular Collections
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES_META.map((cat) => (
              <Link
                key={cat.id}
                to={cat.slug}
                className="text-neutral-700 hover:text-black bg-neutral-100 px-3 py-1 text-xs"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

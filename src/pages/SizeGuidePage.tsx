import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ruler, ArrowRight } from 'lucide-react';

export const SizeGuidePage: React.FC = () => {
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');
  const [activeCategory, setActiveCategory] = useState<'outerwear' | 'hoodies' | 't-shirts' | 'bottoms'>('outerwear');

  return (
    <div className="bg-[#F8F7F4] min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
            Measurements &amp; Proportions
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl font-bold uppercase text-neutral-950">
            Size &amp; Fit Guide
          </h1>
          <p className="mt-3 text-sm text-neutral-600 max-w-xl mx-auto">
            Accurate flat-lay garment measurements derived from our Tapstitch manufacturing specifications.
          </p>
        </div>

        {/* Unit & Category Controls */}
        <div className="bg-white p-4 border border-neutral-200 shadow-xs flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex gap-2">
            {[
              { id: 'outerwear', label: 'Stand Collar & Jackets' },
              { id: 'hoodies', label: 'Heavy Fleece Hoodies' },
              { id: 't-shirts', label: 'Boxy Cotton Tees' },
              { id: 'bottoms', label: 'Barrel Sweatpants & Denim' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeCategory === tab.id
                    ? 'bg-black text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 border border-neutral-300 p-1 bg-neutral-50">
            <button
              onClick={() => setUnit('inches')}
              className={`px-3 py-1 text-xs font-bold uppercase ${
                unit === 'inches' ? 'bg-black text-white' : 'text-neutral-600 hover:text-black'
              }`}
            >
              Inches (&quot;)
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 text-xs font-bold uppercase ${
                unit === 'cm' ? 'bg-black text-white' : 'text-neutral-600 hover:text-black'
              }`}
            >
              Centimeters (cm)
            </button>
          </div>
        </div>

        {/* Measurement Table */}
        <div className="bg-white border border-neutral-200 shadow-xs overflow-hidden mb-12">
          <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
            <h3 className="font-editorial text-lg font-bold uppercase text-neutral-900">
              {activeCategory.toUpperCase()} FLAT GARMENT MEASUREMENTS
            </h3>
            <span className="text-xs text-neutral-500 font-mono">Unit: {unit}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F8F7F4] border-b border-neutral-200 font-bold uppercase text-neutral-700">
                <tr>
                  <th className="p-3.5 sm:p-4">Size</th>
                  <th className="p-3.5 sm:p-4">Chest / Width</th>
                  <th className="p-3.5 sm:p-4">Body Length</th>
                  <th className="p-3.5 sm:p-4">Shoulder Width</th>
                  <th className="p-3.5 sm:p-4">Sleeve Length</th>
                  <th className="p-3.5 sm:p-4">Fit Drape</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-800">
                {activeCategory === 'outerwear' && (
                  <>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-bold">S</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '25.2"' : '64 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '26.0"' : '66 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '24.4"' : '62 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '22.0"' : '56 cm'}</td>
                      <td className="p-3.5 sm:p-4 text-neutral-500">Boxy Drop Shoulder</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-bold">M</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '26.0"' : '66 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '26.8"' : '68 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '25.2"' : '64 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '22.4"' : '57 cm'}</td>
                      <td className="p-3.5 sm:p-4 text-neutral-500">Relaxed Street Silhouette</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-bold">L</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '26.8"' : '68 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '27.6"' : '70 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '26.0"' : '66 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '22.8"' : '58 cm'}</td>
                      <td className="p-3.5 sm:p-4 text-neutral-500">Voluminous Layering</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-bold">XL</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '27.6"' : '70 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '28.4"' : '72 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '26.8"' : '68 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '23.2"' : '59 cm'}</td>
                      <td className="p-3.5 sm:p-4 text-neutral-500">Substantial Oversized</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-bold">2XL</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '28.4"' : '72 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '29.1"' : '74 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '27.6"' : '70 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '23.6"' : '60 cm'}</td>
                      <td className="p-3.5 sm:p-4 text-neutral-500">Statement Cut</td>
                    </tr>
                  </>
                )}

                {activeCategory !== 'outerwear' && (
                  <>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-bold">S</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '23.5"' : '60 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '27.0"' : '69 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '22.0"' : '56 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '9.0"' : '23 cm'}</td>
                      <td className="p-3.5 sm:p-4 text-neutral-500">Structured Street</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-bold">M</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '24.5"' : '62 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '28.0"' : '71 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '23.0"' : '58 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '9.5"' : '24 cm'}</td>
                      <td className="p-3.5 sm:p-4 text-neutral-500">Signature Boxy</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-bold">L</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '25.5"' : '65 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '29.0"' : '74 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '24.0"' : '61 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '10.0"' : '25 cm'}</td>
                      <td className="p-3.5 sm:p-4 text-neutral-500">Oversized Drape</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-bold">XL</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '26.5"' : '67 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '30.0"' : '76 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '25.0"' : '63 cm'}</td>
                      <td className="p-3.5 sm:p-4">{unit === 'inches' ? '10.5"' : '27 cm'}</td>
                      <td className="p-3.5 sm:p-4 text-neutral-500">Extended Volume</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Measuring Advice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 border border-neutral-200">
          <div>
            <h4 className="font-editorial text-lg font-bold uppercase text-neutral-900 mb-2 flex items-center gap-2">
              <Ruler className="w-5 h-5 text-neutral-700" /> How to Measure
            </h4>
            <ul className="text-xs text-neutral-600 space-y-2 mt-3 list-disc pl-4">
              <li><strong>Chest Width:</strong> Measure flat across the fullest part of the chest, approximately 1 inch below the armhole seams.</li>
              <li><strong>Body Length:</strong> Measure straight down from the highest shoulder point next to the collar to the bottom hem.</li>
              <li><strong>Shoulder Width:</strong> Measure straight across from left shoulder seam to right shoulder seam.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-editorial text-lg font-bold uppercase text-neutral-900 mb-2">
              Fit Advice
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Fashion Martinez patterns feature intentional dropped shoulders and wider chests designed specifically for a modern streetwear silhouette. If you are between sizes and prefer a more standard fit, choose the smaller size.
            </p>
            <div className="mt-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:underline"
              >
                Shop The Collection Now <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

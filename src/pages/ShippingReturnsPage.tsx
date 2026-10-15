import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, RotateCcw, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

export const ShippingReturnsPage: React.FC = () => {
  return (
    <div className="bg-[#F8F7F4] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
            Policies &amp; Fulfillment
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl font-bold uppercase text-neutral-950">
            Shipping &amp; Returns
          </h1>
          <p className="mt-3 text-sm text-neutral-600 max-w-lg mx-auto">
            Clear guidelines on our on-demand Tapstitch manufacturing timeline, domestic shipping transit, and replacement policies.
          </p>
        </div>

        {/* Section 1: Fulfillment Timeline */}
        <div className="bg-white p-8 border border-neutral-200 shadow-xs space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-neutral-200">
            <Truck className="w-5 h-5 text-neutral-900" />
            <h2 className="font-editorial text-xl font-bold uppercase text-neutral-950">
              1. Production &amp; Delivery Timeline
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            Every Fashion Martinez garment is individually crafted via Tapstitch on-demand manufacturing. Because each piece is custom-printed, pre-shrunk, and inspected upon order, fulfillment occurs in two phases:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-[#F8F7F4] border border-neutral-200 text-xs">
              <h4 className="font-bold text-neutral-900 uppercase tracking-wider mb-1">
                Phase 1: Tapstitch Production
              </h4>
              <p className="text-neutral-600 leading-relaxed">
                2–4 business days for custom printing, enzyme washing, curing, and garment quality check.
              </p>
            </div>

            <div className="p-4 bg-[#F8F7F4] border border-neutral-200 text-xs">
              <h4 className="font-bold text-neutral-900 uppercase tracking-wider mb-1">
                Phase 2: Courier Transit
              </h4>
              <p className="text-neutral-600 leading-relaxed">
                Standard Ground transit takes approximately 3–5 business days. Express shipping takes 2 business days once dispatched.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Shipping Rates */}
        <div className="bg-white p-8 border border-neutral-200 shadow-xs space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-neutral-200">
            <ShieldCheck className="w-5 h-5 text-neutral-900" />
            <h2 className="font-editorial text-xl font-bold uppercase text-neutral-950">
              2. Shipping Rates (Domestic US)
            </h2>
          </div>

          <div className="divide-y divide-neutral-200 text-xs sm:text-sm text-neutral-800">
            <div className="py-3 flex justify-between">
              <span>Standard Ground (USPS / UPS Ground)</span>
              <span className="font-bold">$8.00 flat rate</span>
            </div>
            <div className="py-3 flex justify-between">
              <span>Expedited Priority (2-Day Courier)</span>
              <span className="font-bold">$18.00 flat rate</span>
            </div>
          </div>

          <p className="text-[11px] text-neutral-500 pt-1">
            Note: As noted throughout this redesign prototype, final live rates are calculated dynamically via WooCommerce upon full production checkout activation.
          </p>
        </div>

        {/* Section 3: Returns & Replacements */}
        <div className="bg-white p-8 border border-neutral-200 shadow-xs space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-neutral-200">
            <RotateCcw className="w-5 h-5 text-neutral-900" />
            <h2 className="font-editorial text-xl font-bold uppercase text-neutral-950">
              3. Returns, Exchanges &amp; Defect Guarantee
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            Because our apparel items are produced on-demand specifically for each shopper, we cannot accept general returns for remorse. However, customer satisfaction remains paramount:
          </p>

          <ul className="text-xs sm:text-sm text-neutral-600 space-y-2 list-disc pl-5">
            <li>
              <strong>Damaged or Misprinted Items:</strong> If a garment arrives with a defect, wrong size dispatched, or print misalignment, we will promptly replace it at zero expense.
            </li>
            <li>
              <strong>Reporting Window:</strong> Please submit your request to <code className="bg-neutral-100 px-1 py-0.5">contact@fashionmartinez.com</code> within 14 calendar days of confirmed delivery.
            </li>
            <li>
              <strong>Verification Photos:</strong> Please include your order number and clear photos illustrating the garment issue so we can submit the review to Tapstitch quality operations.
            </li>
          </ul>
        </div>

        {/* Support Help Box */}
        <div className="bg-[#111111] text-white p-8 sm:p-10 text-center space-y-4">
          <Mail className="w-8 h-8 text-neutral-400 mx-auto" />
          <h3 className="font-editorial text-2xl font-bold uppercase">Need Assistance with a Dispatch?</h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
            Contact our dedicated support inbox at contact@fashionmartinez.com.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-neutral-900 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

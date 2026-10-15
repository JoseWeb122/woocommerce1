import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const ClientAuditBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="bg-[#1C1B1A] text-neutral-200 border-b border-amber-900/40 text-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 text-[10px] uppercase tracking-wider border border-amber-500/40 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-300" /> Catalog Audit Notice
          </span>
          <span className="text-neutral-300 font-medium hidden sm:inline">
            Preserved authentic Tapstitch merchandise ($25.94 - $70.96) • 3 WooCommerce sample items flagged for review.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-amber-300 hover:text-white flex items-center gap-1 font-semibold uppercase tracking-wider text-[11px]"
          >
            {isExpanded ? 'Hide Details' : 'View Audit Details'}
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-neutral-500 hover:text-neutral-300 ml-2"
            title="Dismiss notice"
          >
            ✕
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="bg-[#141413] border-t border-neutral-800 px-4 py-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-neutral-900/80 border border-emerald-900/40">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-1">
                <CheckCircle className="w-4 h-4" /> Verified Tapstitch Streetwear (Kept &amp; Merchandised)
              </div>
              <p className="text-neutral-400 leading-relaxed text-[11px]">
                Heavyweight Stand Collar Jackets, Barrel Leg Sweatpants, 450 GSM Fleece Hoodies, and Boxy Combed Tees were identified directly from fashionmartinez.com. All authentic prices ($25.94, $30.94, $40.94, $50.90, $55.94, $65.94, $70.96) and Tapstitch fabric specs are retained as truth.
              </p>
            </div>

            <div className="p-3 bg-neutral-900/80 border border-amber-900/40">
              <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
                <AlertTriangle className="w-4 h-4" /> Flagged for Store Owner Review (Unrelated Sample Data)
              </div>
              <p className="text-neutral-400 leading-relaxed text-[11px]">
                Template demo items (&ldquo;Advanced Hydroponic System&rdquo;, &ldquo;Compost Bin&rdquo;) were detected in the WooCommerce database from initial setup. Per requirements, they have NOT been silently deleted; they are preserved and isolated with a &ldquo;Flagged for Review&rdquo; tag so Joshua can clean them up in WooCommerce.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

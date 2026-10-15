import React from 'react';
import { useStore } from '../context/StoreContext';
import { Check, Info, AlertTriangle } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useStore();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-fade-in transition-all duration-300">
      <div className="flex items-center gap-3 bg-[#111111] text-white px-5 py-3.5 shadow-2xl border border-neutral-800 text-sm">
        {toast.type === 'success' && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
        {toast.type === 'info' && <Info className="w-4 h-4 text-sky-400 shrink-0" />}
        {toast.type === 'error' && <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />}
        <span className="font-medium tracking-wide">{toast.message}</span>
      </div>
    </div>
  );
};

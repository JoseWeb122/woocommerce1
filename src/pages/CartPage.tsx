import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck, 
  Tag
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, cartSubtotal, cartCount, showToast } = useStore();
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [promoMessage, setPromoMessage] = useState('');

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode.trim()) return;
    setPromoMessage('Promo code validated (Frontend demo mode: live discount rules apply via WooCommerce).');
    showToast('Promo code applied for demonstration', 'info');
  };

  return (
    <div className="bg-[#F8F7F4] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Title */}
        <div className="mb-8 pb-4 border-b border-neutral-200">
          <nav className="text-xs text-neutral-400 mb-2 flex items-center gap-1.5 uppercase tracking-wider">
            <Link to="/" className="hover:text-black">Home</Link>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">Shopping Bag</span>
          </nav>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold uppercase text-neutral-950">
            Shopping Bag ({cartCount})
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white border border-neutral-200 p-16 text-center max-w-lg mx-auto shadow-xs space-y-4">
            <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="font-editorial text-2xl font-bold uppercase text-neutral-900">
              Your bag is currently empty
            </h2>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs mx-auto">
              Ready to elevate your everyday rotation? Explore our heavyweight hoodies, boxy tees, and curated essentials.
            </p>
            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-[#111111] text-white text-xs uppercase tracking-widest font-semibold px-8 py-3.5 hover:bg-black transition-colors"
              >
                Explore The Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              <div className="hidden sm:grid grid-cols-12 gap-4 pb-3 border-b border-neutral-200 text-xs uppercase tracking-wider font-semibold text-neutral-500">
                <div className="col-span-6">Garment</div>
                <div className="col-span-2 text-center">Unit Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Line Total</div>
              </div>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-neutral-200 p-4 sm:p-5 flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center shadow-xs"
                >
                  {/* Garment Details */}
                  <div className="col-span-6 flex items-center gap-4 w-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover bg-neutral-100 shrink-0 border border-neutral-100"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.pexels.com/photos/19273260/pexels-photo-19273260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=240';
                      }}
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-neutral-900 truncate">
                        {item.name}
                      </h3>
                      <div className="mt-1 flex flex-wrap gap-2 text-xs text-neutral-500">
                        <span className="bg-neutral-100 px-2 py-0.5 rounded-xs">Size: {item.size}</span>
                        <span className="bg-neutral-100 px-2 py-0.5 rounded-xs">Color: {item.color}</span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-3 text-xs text-neutral-400 hover:text-red-600 flex items-center gap-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Remove
                      </button>
                    </div>
                  </div>

                  {/* Unit Price */}
                  <div className="col-span-2 text-center text-sm font-medium text-neutral-800">
                    ${item.price.toFixed(2)}
                  </div>

                  {/* Quantity Stepper */}
                  <div className="col-span-2 flex justify-center">
                    <div className="flex items-center border border-neutral-300 bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2.5 py-1.5 hover:bg-neutral-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold text-neutral-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2.5 py-1.5 hover:bg-neutral-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Line Total */}
                  <div className="col-span-2 text-right text-sm font-bold text-neutral-950 w-full sm:w-auto flex justify-between sm:block">
                    <span className="sm:hidden text-neutral-500 font-normal">Line Total:</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}

              <div className="pt-4 flex justify-between items-center text-xs">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-black font-semibold uppercase tracking-wider"
                >
                  <ArrowLeft className="w-4 h-4" /> Continue Shopping
                </Link>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-4">
              <div className="bg-white border border-neutral-200 p-6 sm:p-7 shadow-xs space-y-6">
                <h2 className="font-editorial text-lg font-bold uppercase tracking-wider text-neutral-950 pb-3 border-b border-neutral-200">
                  Order Summary
                </h2>

                {/* Subtotal breakdown */}
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-neutral-700">
                    <span>Bag Subtotal ({cartCount} items)</span>
                    <span className="font-semibold text-neutral-900">${cartSubtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-neutral-700">
                    <span>Shipping Estimate</span>
                    <span className="text-neutral-500 italic">Calculated at checkout</span>
                  </div>

                  <div className="flex justify-between text-neutral-700">
                    <span>Sales Tax Estimate</span>
                    <span className="text-neutral-500 italic">Calculated at checkout</span>
                  </div>
                </div>

                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="pt-2">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600 block mb-1">
                    Promotional Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="e.g. MARTINEZ10"
                      className="flex-1 bg-neutral-50 border border-neutral-300 text-xs px-3 py-2 uppercase placeholder:normal-case focus:outline-none focus:border-black"
                    />
                    <button
                      type="submit"
                      className="bg-neutral-900 text-white text-xs font-semibold uppercase px-4 py-2 hover:bg-black transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <p className="text-[11px] text-neutral-600 mt-1.5 flex items-center gap-1">
                      <Tag className="w-3 h-3 text-neutral-400" /> {promoMessage}
                    </p>
                  )}
                </form>

                {/* Estimated Total */}
                <div className="pt-4 border-t border-neutral-200 flex justify-between items-baseline">
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                      Estimated Subtotal
                    </span>
                    <div className="text-[10px] text-neutral-500">Excluding local taxes and courier fees</div>
                  </div>
                  <span className="text-xl font-bold text-neutral-950">
                    ${cartSubtotal.toFixed(2)}
                  </span>
                </div>

                {/* Proceed to Checkout CTA */}
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-[#111111] hover:bg-black text-white py-4 px-6 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-2 flex items-center gap-2 text-[11px] text-neutral-500 justify-center">
                  <ShieldCheck className="w-4 h-4 text-neutral-700" />
                  <span>Secure SSL frontend demonstration checkout</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

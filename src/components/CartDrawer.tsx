import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CartDrawer: React.FC = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    cartSubtotal, 
    cartCount 
  } = useStore();
  
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F8F7F4] shadow-2xl flex flex-col justify-between border-l border-neutral-200">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-200 bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-neutral-900" />
              <h2 className="font-editorial text-lg font-bold uppercase tracking-wider text-neutral-950">
                Shopping Bag ({cartCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-neutral-500 hover:text-black transition-colors rounded-full hover:bg-neutral-100"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 text-neutral-500 space-y-4">
                <div className="w-16 h-16 rounded-full bg-neutral-200/80 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-neutral-400" />
                </div>
                <div>
                  <h3 className="font-editorial text-lg text-neutral-900 font-semibold">Your bag is empty</h3>
                  <p className="text-sm text-neutral-500 mt-1 max-w-xs">
                    Explore our curated heavyweight cuts, washed hoodies, and essentials.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/shop');
                  }}
                  className="bg-[#111111] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 hover:bg-neutral-800 transition-colors"
                >
                  Shop The Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item.id} 
                  className="flex gap-4 p-3.5 bg-white border border-neutral-200 shadow-xs relative group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover bg-neutral-100 shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.pexels.com/photos/19273260/pexels-photo-19273260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=240';
                    }}
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-medium text-sm text-neutral-900 line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-neutral-400 hover:text-red-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-1 text-xs text-neutral-500">
                        <span className="font-medium text-neutral-700">Size: {item.size}</span>
                        <span>•</span>
                        <span className="truncate max-w-[120px]">{item.color}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-100">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-neutral-300">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-neutral-100 text-neutral-700 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-neutral-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-neutral-100 text-neutral-700 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <div className="text-sm font-semibold text-neutral-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Call-to-action */}
          {cart.length > 0 && (
            <div className="p-6 bg-white border-t border-neutral-200 space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-neutral-600">
                  <span>Estimated Subtotal</span>
                  <span className="font-semibold text-neutral-900 text-base">
                    ${cartSubtotal.toFixed(2)}
                  </span>
                </div>
                <div className="text-[11px] text-neutral-500">
                  Shipping and taxes calculated during final order review.
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/checkout');
                  }}
                  className="w-full bg-[#111111] hover:bg-black text-white py-3.5 px-4 font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex gap-2">
                  <Link
                    to="/cart"
                    onClick={() => setIsCartOpen(false)}
                    className="flex-1 text-center py-2 text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-black border border-neutral-300 hover:border-black transition-colors"
                  >
                    View Bag Details
                  </Link>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="flex-1 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-black transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

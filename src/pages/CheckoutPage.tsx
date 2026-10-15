import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle, 
  Lock, 
  AlertCircle,
  Copy
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CheckoutPage: React.FC = () => {
  const { cart, cartSubtotal, clearCart, showToast } = useStore();

  // Form State
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: 'CA',
    zipCode: '',
    country: 'United States',
    phone: '',
    shippingMethod: 'standard'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [demoOrderNumber, setDemoOrderNumber] = useState('');

  const shippingCost = formData.shippingMethod === 'express' ? 18.00 : 8.00;
  const estimatedTax = Number((cartSubtotal * 0.0825).toFixed(2));
  const finalTotal = cartSubtotal + shippingCost + estimatedTax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.email || !formData.email.includes('@')) newErrors.email = 'Valid email is required.';
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.address.trim()) newErrors.address = 'Street address is required.';
    if (!formData.city.trim()) newErrors.city = 'City is required.';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required.';
    return newErrors;
  };

  const handlePlaceDemoOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast('Please fill in the required shipping details', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedNumber = `FM-${Math.floor(100000 + Math.random() * 900000)}`;
      setDemoOrderNumber(generatedNumber);
      setOrderConfirmed(true);
      setIsSubmitting(false);
      clearCart();
      window.scrollTo(0, 0);
    }, 1000);
  };

  // Order Confirmed Screen
  if (orderConfirmed) {
    return (
      <div className="bg-[#F8F7F4] min-h-screen py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-neutral-200 p-8 sm:p-12 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold bg-emerald-50 px-3 py-1 border border-emerald-200">
                Demonstration Order Complete
              </span>
              <h1 className="font-editorial text-3xl font-bold uppercase text-neutral-950 mt-3">
                Thank You For Your Order
              </h1>
              <p className="text-sm text-neutral-600 mt-2">
                Order confirmation simulated for demo purposes.
              </p>
            </div>

            {/* Order Reference Box */}
            <div className="p-4 bg-[#F8F7F4] border border-neutral-200 text-left space-y-2 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                <span className="font-semibold text-neutral-600">Order Reference:</span>
                <span className="font-mono font-bold text-neutral-900 text-sm flex items-center gap-1.5">
                  {demoOrderNumber}
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(demoOrderNumber);
                      showToast('Order number copied', 'info');
                    }}
                    title="Copy number"
                  >
                    <Copy className="w-3.5 h-3.5 text-neutral-500 hover:text-black" />
                  </button>
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Recipient:</span>
                <span className="font-medium text-neutral-900">{formData.firstName} {formData.lastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Shipping To:</span>
                <span className="font-medium text-neutral-900">{formData.address}, {formData.city}, {formData.state} {formData.zipCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Email Confirmation:</span>
                <span className="font-medium text-neutral-900">{formData.email}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-neutral-200">
                <span className="font-bold text-neutral-900">Total Simulated Charge:</span>
                <span className="font-bold text-neutral-950 text-sm">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Note regarding real integration */}
            <div className="p-4 bg-amber-50 border border-amber-200 text-[11px] text-amber-900 text-left flex gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Prototype Notice:</strong> This was a frontend demonstration. No real financial transaction was executed and no Tapstitch order was triggered. In live production, this form synchronizes seamlessly with WooCommerce and Stripe/PayPal.
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/shop"
                className="bg-[#111111] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
              >
                Return to Shop
              </Link>
              <Link
                to="/"
                className="bg-white border border-neutral-300 text-neutral-800 px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:border-black transition-colors"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Regular Checkout Form Screen
  if (cart.length === 0) {
    return (
      <div className="bg-[#F8F7F4] min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-editorial text-2xl font-bold uppercase">No Items to Checkout</h2>
        <p className="text-xs text-neutral-500 mt-1">Your shopping bag is empty.</p>
        <Link
          to="/shop"
          className="mt-4 bg-black text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest"
        >
          Explore Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F7F4] min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Explaining Frontend Demo */}
        <div className="mb-8 p-3.5 bg-neutral-900 text-white flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Frontend Demonstration Checkout</strong> — Fill sample data to test flow. No card is charged.
            </span>
          </div>
          <Link to="/cart" className="text-neutral-400 hover:text-white underline text-[11px]">
            Return to Cart
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Form Fields */}
          <div className="lg:col-span-7 space-y-8">
            <form onSubmit={handlePlaceDemoOrder} className="space-y-8">
              
              {/* 1. Contact Info */}
              <div className="bg-white p-6 sm:p-7 border border-neutral-200 shadow-xs">
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-neutral-200">
                  <h2 className="font-editorial text-lg font-bold uppercase text-neutral-950">
                    1. Contact Details
                  </h2>
                  <span className="text-xs text-neutral-500">Step 1 of 3</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. joshua@fashionmartinez.com"
                      className={`w-full text-xs p-3 border bg-neutral-50 focus:bg-white focus:outline-none ${
                        errors.email ? 'border-red-500' : 'border-neutral-300 focus:border-black'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                      Phone Number (For Courier Updates)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 000-0000"
                      className="w-full text-xs p-3 border border-neutral-300 bg-neutral-50 focus:bg-white focus:outline-none focus:border-black"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Shipping Address */}
              <div className="bg-white p-6 sm:p-7 border border-neutral-200 shadow-xs">
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-neutral-200">
                  <h2 className="font-editorial text-lg font-bold uppercase text-neutral-950">
                    2. Delivery Address
                  </h2>
                  <span className="text-xs text-neutral-500">Step 2 of 3</span>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full text-xs p-3 border bg-neutral-50 focus:bg-white focus:outline-none ${
                          errors.firstName ? 'border-red-500' : 'border-neutral-300 focus:border-black'
                        }`}
                      />
                      {errors.firstName && <p className="text-[11px] text-red-500 mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full text-xs p-3 border bg-neutral-50 focus:bg-white focus:outline-none ${
                          errors.lastName ? 'border-red-500' : 'border-neutral-300 focus:border-black'
                        }`}
                      />
                      {errors.lastName && <p className="text-[11px] text-red-500 mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Street Name"
                      className={`w-full text-xs p-3 border bg-neutral-50 focus:bg-white focus:outline-none ${
                        errors.address ? 'border-red-500' : 'border-neutral-300 focus:border-black'
                      }`}
                    />
                    {errors.address && <p className="text-[11px] text-red-500 mt-1">{errors.address}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                      Apartment, Suite, Unit (Optional)
                    </label>
                    <input
                      type="text"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleInputChange}
                      placeholder="Apt 4B"
                      className="w-full text-xs p-3 border border-neutral-300 bg-neutral-50 focus:bg-white focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full text-xs p-3 border bg-neutral-50 focus:bg-white focus:outline-none ${
                          errors.city ? 'border-red-500' : 'border-neutral-300 focus:border-black'
                        }`}
                      />
                      {errors.city && <p className="text-[11px] text-red-500 mt-1">{errors.city}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                        State / Region *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full text-xs p-3 border border-neutral-300 bg-neutral-50 focus:bg-white focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                        ZIP / Postal *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className={`w-full text-xs p-3 border bg-neutral-50 focus:bg-white focus:outline-none ${
                          errors.zipCode ? 'border-red-500' : 'border-neutral-300 focus:border-black'
                        }`}
                      />
                      {errors.zipCode && <p className="text-[11px] text-red-500 mt-1">{errors.zipCode}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Shipping Method & Payment Demonstration */}
              <div className="bg-white p-6 sm:p-7 border border-neutral-200 shadow-xs">
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-neutral-200">
                  <h2 className="font-editorial text-lg font-bold uppercase text-neutral-950">
                    3. Shipping Method &amp; Demo Payment
                  </h2>
                  <span className="text-xs text-neutral-500">Step 3 of 3</span>
                </div>

                <div className="space-y-3 mb-6">
                  <label
                    className={`flex items-center justify-between p-3.5 border cursor-pointer transition-colors ${
                      formData.shippingMethod === 'standard' ? 'border-black bg-neutral-50' : 'border-neutral-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="standard"
                        checked={formData.shippingMethod === 'standard'}
                        onChange={handleInputChange}
                        className="text-black"
                      />
                      <div>
                        <div className="text-xs font-bold text-neutral-900">Standard Ground (3–5 Business Days)</div>
                        <div className="text-[11px] text-neutral-500">Standard courier fulfillment via Tapstitch</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-neutral-900">$8.00</span>
                  </label>

                  <label
                    className={`flex items-center justify-between p-3.5 border cursor-pointer transition-colors ${
                      formData.shippingMethod === 'express' ? 'border-black bg-neutral-50' : 'border-neutral-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="express"
                        checked={formData.shippingMethod === 'express'}
                        onChange={handleInputChange}
                        className="text-black"
                      />
                      <div>
                        <div className="text-xs font-bold text-neutral-900">Express Priority (2 Business Days)</div>
                        <div className="text-[11px] text-neutral-500">Priority expedited processing</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-neutral-900">$18.00</span>
                  </label>
                </div>

                {/* Demo Payment Notice */}
                <div className="p-4 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 space-y-2">
                  <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-neutral-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Simulated Sandbox Payment
                  </div>
                  <p className="text-[11px] text-neutral-600 leading-relaxed">
                    This is an interactive agency prototype for Joshua. No real credit card details are collected or processed. Clicking the button below simulates a completed checkout transaction.
                  </p>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#111111] hover:bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.2em] shadow-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Simulating Order Placement...' : `Complete Demo Order ($${finalTotal.toFixed(2)})`}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-7 border border-neutral-200 shadow-xs space-y-6 sticky top-28">
              <div className="flex justify-between items-center pb-3 border-b border-neutral-200">
                <h3 className="font-editorial text-base font-bold uppercase tracking-wider text-neutral-950">
                  In Your Bag ({cart.length})
                </h3>
                <Link to="/cart" className="text-xs text-neutral-600 hover:text-black underline">
                  Edit
                </Link>
              </div>

              {/* Items List */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3 text-xs pb-3 border-b border-neutral-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-16 object-cover bg-neutral-100 shrink-0 border"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-neutral-900 truncate">{item.name}</div>
                      <div className="text-neutral-500 text-[11px] mt-0.5">
                        {item.size} • {item.color} • Qty: {item.quantity}
                      </div>
                      <div className="font-semibold text-neutral-900 mt-1">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cost Calculations */}
              <div className="space-y-2 text-xs pt-2">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-neutral-900">${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping ({formData.shippingMethod})</span>
                  <span className="font-medium text-neutral-900">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Estimated Tax (8.25%)</span>
                  <span className="font-medium text-neutral-900">${estimatedTax.toFixed(2)}</span>
                </div>
                <div className="pt-3 border-t border-neutral-200 flex justify-between items-baseline text-sm font-bold text-neutral-950">
                  <span>Total</span>
                  <span className="text-lg">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

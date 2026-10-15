import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  MapPin, 
  Settings, 
  Heart, 
  ShieldCheck
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const AccountPage: React.FC = () => {
  const { wishlist, cartCount } = useStore();
  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'settings'>('orders');

  const demoOrders = [
    {
      id: 'FM-849102',
      date: 'May 12, 2026',
      status: 'Delivered',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      total: 106.88,
      items: [
        { name: 'Essential Heavyweight Stand Collar Jacket', size: 'L', color: 'Washed Charcoal', qty: 1, price: 65.94 },
        { name: 'Boxy Oversized T-Shirt', size: 'L', color: 'Crisp White', qty: 1, price: 40.94 }
      ]
    },
    {
      id: 'FM-721495',
      date: 'April 28, 2026',
      status: 'Fulfilled via Tapstitch',
      statusColor: 'bg-sky-100 text-sky-800 border-sky-200',
      total: 55.94,
      items: [
        { name: 'Essential Heavyweight Hoodie', size: 'XL', color: 'Off-White Milk', qty: 1, price: 55.94 }
      ]
    }
  ];

  return (
    <div className="bg-[#F8F7F4] min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 pb-4 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
              Member Portal
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl font-bold uppercase text-neutral-950">
              Customer Account
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Frontend demonstration ready for WooCommerce customer database integration.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/wishlist"
              className="inline-flex items-center gap-1.5 bg-white border border-neutral-300 hover:border-black px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-800 transition-colors"
            >
              <Heart className="w-3.5 h-3.5 text-neutral-600" /> Wishlist ({wishlist.length})
            </Link>
            <Link
              to="/cart"
              className="inline-flex items-center gap-1.5 bg-black text-white px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Bag ({cartCount})
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 border border-neutral-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-neutral-100">
                <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold text-lg font-editorial">
                  JM
                </div>
                <div>
                  <h3 className="font-bold text-sm text-neutral-900">Joshua Martinez</h3>
                  <p className="text-xs text-neutral-500">contact@fashionmartinez.com</p>
                </div>
              </div>

              <nav className="space-y-1 text-xs">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 font-semibold uppercase tracking-wider transition-colors ${
                    activeTab === 'orders' ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  <Package className="w-4 h-4" /> Order History ({demoOrders.length})
                </button>

                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 font-semibold uppercase tracking-wider transition-colors ${
                    activeTab === 'addresses' ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  <MapPin className="w-4 h-4" /> Shipping Addresses
                </button>

                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 font-semibold uppercase tracking-wider transition-colors ${
                    activeTab === 'settings' ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  <Settings className="w-4 h-4" /> Account Settings
                </button>
              </nav>
            </div>

            {/* Note on WooCommerce Account Integration */}
            <div className="p-4 bg-white border border-neutral-200 text-xs text-neutral-600 space-y-2">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-neutral-900">
                <ShieldCheck className="w-4 h-4 text-neutral-800" />
                WooCommerce Ready
              </div>
              <p className="text-[11px] leading-relaxed">
                When live, this screen connects directly to your WooCommerce customer REST API endpoints (`/wp-json/wc/v3/orders` &amp; `/wp-json/wp/v2/users/me`) with zero UI changes required.
              </p>
            </div>
          </aside>

          {/* Right Content Area */}
          <main className="lg:col-span-8">
            
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <h2 className="font-editorial text-xl font-bold uppercase text-neutral-900">
                    Recent Orders
                  </h2>
                  <span className="text-xs text-neutral-500 font-mono">Sample Activity</span>
                </div>

                <div className="space-y-4">
                  {demoOrders.map((order) => (
                    <div key={order.id} className="bg-white border border-neutral-200 p-5 sm:p-6 shadow-xs space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-neutral-100 text-xs">
                        <div>
                          <span className="font-bold text-neutral-900 text-sm">{order.id}</span>
                          <span className="text-neutral-400 ml-2">• Placed on {order.date}</span>
                        </div>
                        <span className={`px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider border rounded-xs ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </div>

                      <div className="space-y-3">
                        {order.items.map((item, i) => (
                          <div key={i} className="flex justify-between items-center text-xs text-neutral-800">
                            <div>
                              <div className="font-semibold text-neutral-900">{item.name}</div>
                              <div className="text-neutral-500 text-[11px]">
                                Size: {item.size} • Color: {item.color} • Qty: {item.qty}
                              </div>
                            </div>
                            <div className="font-semibold">${(item.price * item.qty).toFixed(2)}</div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-neutral-100 flex justify-between items-center text-xs">
                        <span className="text-neutral-500">Simulated Total</span>
                        <span className="font-bold text-neutral-950 text-sm">${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-white p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-6">
                <h2 className="font-editorial text-xl font-bold uppercase text-neutral-900 pb-2 border-b border-neutral-200">
                  Primary Delivery Address
                </h2>

                <div className="p-4 bg-[#F8F7F4] border border-neutral-200 text-xs space-y-1">
                  <div className="flex justify-between font-bold text-neutral-900 uppercase">
                    <span>Default Shipping</span>
                    <span className="text-emerald-700">Verified</span>
                  </div>
                  <div className="pt-1 font-semibold text-neutral-800">Joshua Martinez</div>
                  <div className="text-neutral-600">742 Evergreen Terrace</div>
                  <div className="text-neutral-600">Los Angeles, CA 90001</div>
                  <div className="text-neutral-600">United States</div>
                  <div className="text-neutral-500 pt-1 font-mono">(555) 123-4567</div>
                </div>

                <button className="bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 hover:bg-black transition-colors">
                  Add New Delivery Address
                </button>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-white p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-6">
                <h2 className="font-editorial text-xl font-bold uppercase text-neutral-900 pb-2 border-b border-neutral-200">
                  Account Preferences
                </h2>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                      Display Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Joshua Martinez"
                      className="w-full p-2.5 border border-neutral-300 bg-neutral-50"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="contact@fashionmartinez.com"
                      className="w-full p-2.5 border border-neutral-300 bg-neutral-50"
                    />
                  </div>

                  <div className="pt-2">
                    <button className="bg-black text-white text-xs font-semibold uppercase tracking-wider px-6 py-2.5">
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}

          </main>
        </div>

      </div>
    </div>
  );
};

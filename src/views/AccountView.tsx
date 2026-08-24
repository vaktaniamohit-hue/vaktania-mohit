import React, { useState } from 'react';
import { 
  User, 
  Package, 
  MapPin, 
  Zap, 
  Heart, 
  Settings, 
  LogOut, 
  Plus, 
  Check, 
  Truck, 
  ArrowRight,
  ShieldCheck,
  Edit2
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ShoeSize } from '../types';

export const AccountView: React.FC = () => {
  const { user, orders, wishlist, updateUserProfile, navigateTo, addToast } = useShop();

  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'preferences'>('orders');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editName, setEditName] = useState(user?.name || 'Aryan Varma');
  const [editPhone, setEditPhone] = useState(user?.phone || '+91 98201 54321');
  const [editSize, setEditSize] = useState<ShoeSize>(user?.defaultSize || 9);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({
      name: editName,
      phone: editPhone,
      defaultSize: editSize
    });
    setIsEditingProfile(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Account Profile Header Card */}
      <div className="bg-zinc-900 text-white rounded-3xl p-6 sm:p-10 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 sm:gap-6 relative z-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-zinc-800 border-2 border-[#ccff00] flex items-center justify-center text-[#ccff00] text-2xl font-impact shadow-lg">
            {user?.name ? user.name.charAt(0) : 'A'}
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#ccff00] text-black text-[10px] font-black px-2 py-0.5 rounded-xs uppercase tracking-wider">
                VOLT {user?.membershipTier || 'PRO'} ATHLETE
              </span>
              <span className="text-xs text-zinc-400 font-mono">Member #{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
            <h1 className="font-impact text-2xl sm:text-3xl text-white">
              {user?.name || 'Aryan Varma'}
            </h1>
            <p className="text-xs text-zinc-400">
              {user?.email} • {user?.phone}
            </p>
          </div>
        </div>

        {/* Member Points & Rewards Badge */}
        <div className="flex items-center gap-4 bg-zinc-800/80 p-4 rounded-2xl border border-zinc-700">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">VOLT REWARD POINTS</p>
            <p className="text-2xl font-impact text-[#ccff00]">{user?.voltPoints?.toLocaleString('en-IN') || 1250} PTS</p>
            <p className="text-[10px] text-zinc-400 mt-0.5">Worth ₹1,250 on next sneaker drop</p>
          </div>
          <button
            onClick={() => navigateTo('membership')}
            className="px-3.5 py-2 bg-[#ccff00] text-black text-xs font-extrabold uppercase rounded-lg hover:bg-lime-400 transition-colors cursor-pointer"
          >
            Pass Perks
          </button>
        </div>
      </div>

      {/* Account Navigation Tabs */}
      <div className="flex border-b border-zinc-200">
        {[
          { id: 'orders' as const, label: `Order History (${orders.length})`, icon: Package },
          { id: 'addresses' as const, label: 'Saved Addresses', icon: MapPin },
          { id: 'preferences' as const, label: 'Athlete Sizing & Profile', icon: User }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-4 sm:px-6 text-xs font-extrabold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-2 cursor-pointer ${
                activeTab === tab.id
                  ? 'border-black text-black'
                  : 'border-transparent text-zinc-400 hover:text-zinc-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: ORDER HISTORY */}
      {activeTab === 'orders' && (
        <div className="space-y-6">
          {orders.length === 0 ? (
            <div className="p-12 text-center bg-zinc-50 rounded-2xl border border-zinc-200 space-y-3">
              <Package className="w-10 h-10 text-zinc-400 mx-auto" />
              <p className="font-bold text-sm text-zinc-800">No past orders found</p>
              <p className="text-xs text-zinc-500">Your completed gear purchases will appear here.</p>
              <button
                onClick={() => navigateTo('shop')}
                className="px-6 py-2.5 bg-black text-white text-xs font-bold rounded-xl"
              >
                Shop Footwear
              </button>
            </div>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs">
                {/* Order Top Bar */}
                <div className="bg-zinc-50 p-4 sm:p-5 border-b border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-4">
                    <div>
                      <span className="text-zinc-400">Order Placed: </span>
                      <strong className="text-zinc-900">{new Date(order.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</strong>
                    </div>
                    <div>
                      <span className="text-zinc-400">Order Number: </span>
                      <strong className="text-zinc-900 font-mono">#{order.id}</strong>
                    </div>
                    <div>
                      <span className="text-zinc-400">Total: </span>
                      <strong className="text-zinc-900">₹{order.total.toLocaleString('en-IN')}</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full text-[11px]">
                      <Check className="w-3 h-3" />
                      <span>{order.status}</span>
                    </span>
                    <button
                      onClick={() => navigateTo('tracking')}
                      className="px-3 py-1 bg-black text-white font-bold rounded-lg text-xs hover:bg-zinc-800 cursor-pointer"
                    >
                      Track Package
                    </button>
                  </div>
                </div>

                {/* Items in this order */}
                <div className="p-4 sm:p-6 divide-y divide-zinc-100 space-y-3">
                  {order.items.map((item) => (
                    <div key={item.id} className="pt-3 first:pt-0 flex gap-4 items-center">
                      <div className="w-16 h-16 bg-zinc-100 rounded-lg overflow-hidden shrink-0">
                        <img
                          src={item.selectedColor.image || item.product.images.main}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-zinc-900 truncate">{item.product.name}</h4>
                        <p className="text-[11px] text-zinc-500">
                          UK Size: {item.selectedSize} • {item.selectedColor.name} (Qty: {item.quantity})
                        </p>
                        <p className="text-xs font-extrabold text-black">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </p>
                      </div>
                      <button
                        onClick={() => navigateTo('product', { productId: item.productId })}
                        className="text-xs font-bold text-zinc-600 hover:text-black underline cursor-pointer"
                      >
                        Buy Again
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* TAB 2: SAVED ADDRESSES */}
      {activeTab === 'addresses' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {user?.addresses.map((addr) => (
              <div key={addr.id} className="p-5 bg-white rounded-2xl border-2 border-black space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded-xs">
                    DEFAULT DELIVERY
                  </span>
                  <span className="text-xs text-zinc-400 capitalize font-medium">{addr.type}</span>
                </div>
                <h4 className="text-sm font-bold text-zinc-900">{addr.fullName}</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {addr.street}, {addr.apartment}<br />
                  {addr.city}, {addr.state} - {addr.pincode}
                </p>
                <p className="text-xs text-zinc-500 font-medium">Contact: {addr.phone}</p>
              </div>
            ))}

            <div className="p-5 bg-zinc-50 rounded-2xl border-2 border-dashed border-zinc-300 flex flex-col items-center justify-center text-center space-y-2 cursor-pointer hover:border-black transition-colors">
              <Plus className="w-6 h-6 text-zinc-400" />
              <p className="text-xs font-bold text-zinc-900">Add New Delivery Address</p>
              <p className="text-[11px] text-zinc-500">Save your gym, track, or office address for fast 1-click drops.</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: ATHLETE PREFERENCES */}
      {activeTab === 'preferences' && (
        <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 max-w-2xl space-y-6">
          <h3 className="font-impact text-2xl text-zinc-900">
            ATHLETE PROFILE & SIZING DEFAULTS
          </h3>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full text-xs font-medium px-3.5 py-2.5 bg-white border border-zinc-300 rounded-lg focus:outline-hidden focus:border-black"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                value={editPhone}
                onChange={(e) => setEditPhone(e.target.value)}
                className="w-full text-xs font-medium px-3.5 py-2.5 bg-white border border-zinc-300 rounded-lg focus:outline-hidden focus:border-black"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                Default UK Shoe Size (Used for Auto-Filtering)
              </label>
              <select
                value={editSize}
                onChange={(e) => setEditSize(parseInt(e.target.value) as ShoeSize)}
                className="w-full text-xs font-bold p-2.5 bg-white border border-zinc-300 rounded-lg"
              >
                {[5, 6, 7, 8, 9, 10, 11, 12].map((s) => (
                  <option key={s} value={s}>UK {s} (India Standard)</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-black text-white text-xs font-extrabold uppercase tracking-wider rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Save Profile Preferences
            </button>
          </form>
        </div>
      )}

    </div>
  );
};

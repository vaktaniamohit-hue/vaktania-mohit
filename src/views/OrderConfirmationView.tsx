import React from 'react';
import { 
  CheckCircle2, 
  Package, 
  Truck, 
  MapPin, 
  Download, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const OrderConfirmationView: React.FC = () => {
  const { lastOrder, navigateTo, addToast } = useShop();

  if (!lastOrder) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center space-y-4">
        <h2 className="font-impact text-3xl text-zinc-900">NO RECENT ORDER</h2>
        <p className="text-xs text-zinc-500">You haven't placed an order yet in this session.</p>
        <button
          onClick={() => navigateTo('shop')}
          className="px-6 py-3 bg-black text-white text-xs font-bold rounded-xl"
        >
          Explore VOLT Catalog
        </button>
      </div>
    );
  }

  const handleDownloadInvoice = () => {
    addToast('success', 'Tax Invoice Generated', `Invoice PDF downloaded for #${lastOrder.id}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      
      {/* Top Success Banner */}
      <div className="bg-zinc-900 text-white rounded-3xl p-6 sm:p-10 border border-zinc-800 text-center space-y-4 relative overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-[#ccff00] text-black flex items-center justify-center mx-auto shadow-xl">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#ccff00]">
            ORDER CONFIRMED & PACKING
          </span>
          <h1 className="font-impact text-3xl sm:text-5xl tracking-wide text-white">
            THANK YOU FOR YOUR ORDER!
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto leading-relaxed">
            Your performance gear is being calibrated and packed at our Bengaluru central fulfillment facility.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs">
          <div className="bg-zinc-800 px-4 py-2 rounded-xl border border-zinc-700">
            <span className="text-zinc-400">Order ID: </span>
            <strong className="text-white font-mono">{lastOrder.id}</strong>
          </div>
          <div className="bg-zinc-800 px-4 py-2 rounded-xl border border-zinc-700">
            <span className="text-zinc-400">Tracking: </span>
            <strong className="text-[#ccff00] font-mono">{lastOrder.trackingNumber}</strong>
          </div>
          <div className="bg-zinc-800 px-4 py-2 rounded-xl border border-zinc-700">
            <span className="text-zinc-400">Carrier: </span>
            <strong className="text-white">{lastOrder.carrier}</strong>
          </div>
        </div>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => navigateTo('tracking')}
            className="px-6 py-3 bg-[#ccff00] text-black hover:bg-lime-400 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Truck className="w-4 h-4" />
            <span>Track Live Shipment Status</span>
          </button>

          <button
            onClick={handleDownloadInvoice}
            className="px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-zinc-700"
          >
            <Download className="w-4 h-4" />
            <span>Download GST Tax Invoice</span>
          </button>
        </div>
      </div>

      {/* Order Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left: Purchased Items List (7 cols) */}
        <div className="md:col-span-7 bg-white rounded-2xl border border-zinc-200 p-6 space-y-4">
          <h3 className="font-impact text-xl text-zinc-900 border-b border-zinc-100 pb-3">
            ITEMS IN SHIPMENT ({lastOrder.items.length})
          </h3>

          <div className="divide-y divide-zinc-100 space-y-4">
            {lastOrder.items.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0 flex gap-4 items-center">
                <div className="w-20 h-20 bg-zinc-100 rounded-xl overflow-hidden shrink-0 border border-zinc-200">
                  <img
                    src={item.selectedColor.image || item.product.images.main}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-zinc-900">{item.product.name}</h4>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    UK Size: <strong className="text-zinc-900">{item.selectedSize}</strong> • {item.selectedColor.name}
                  </p>
                  <p className="text-xs font-extrabold text-black mt-1">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')} (Qty: {item.quantity})
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-100 space-y-1.5 text-xs text-zinc-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{lastOrder.subtotal.toLocaleString('en-IN')}</span>
            </div>
            {lastOrder.discount > 0 && (
              <div className="flex justify-between text-emerald-600 font-semibold">
                <span>Discount</span>
                <span>-₹{lastOrder.discount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Shipping (Express Air)</span>
              <span className="text-emerald-600 font-bold">FREE</span>
            </div>
            <div className="flex justify-between font-extrabold text-black text-sm pt-2 border-t border-zinc-100">
              <span>Total Paid</span>
              <span className="text-base font-impact">₹{lastOrder.total.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        {/* Right: Shipping Address & Delivery Summary (5 cols) */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-6 space-y-4">
            <div className="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-black" />
              <span>Delivery Address</span>
            </div>
            <div className="text-xs text-zinc-600 space-y-1">
              <p className="font-bold text-zinc-900">{lastOrder.shippingAddress.fullName}</p>
              <p>{lastOrder.shippingAddress.street}</p>
              <p>{lastOrder.shippingAddress.apartment}</p>
              <p>{lastOrder.shippingAddress.city}, {lastOrder.shippingAddress.state} - {lastOrder.shippingAddress.pincode}</p>
              <p className="pt-1 text-zinc-500">Contact: {lastOrder.shippingAddress.phone}</p>
            </div>
          </div>

          <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
              NEED TO EXCHANGE SIZE?
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Enjoy 30 days of hassle-free doorstep size exchanges. If UK {lastOrder.items[0]?.selectedSize} doesn't fit like a glove, our courier picks it up for free.
            </p>
            <button
              onClick={() => navigateTo('contact')}
              className="text-xs font-bold text-black hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Learn About Free Size Exchanges</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      <div className="text-center pt-4">
        <button
          onClick={() => navigateTo('shop')}
          className="px-8 py-3.5 bg-black text-white text-xs font-extrabold uppercase tracking-wider rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          Continue Browsing Other Sneaker Drops
        </button>
      </div>

    </div>
  );
};

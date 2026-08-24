import React, { useState } from 'react';
import { 
  Truck, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Package, 
  Phone, 
  Search, 
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const OrderTrackingView: React.FC = () => {
  const { lastOrder, orders, navigateTo, addToast } = useShop();

  const activeOrder = lastOrder || orders[0];
  const [searchTrackingId, setSearchTrackingId] = useState(activeOrder?.trackingNumber || 'BD-8472910482');

  const timelineEvents = [
    {
      title: 'Order Confirmed & Verified',
      location: 'VOLT Online Central System',
      time: 'Today, 10:30 AM',
      completed: true,
      current: false
    },
    {
      title: 'Quality Inspected & Packed',
      location: 'VOLT Fulfillment Center, Bengaluru, Karnataka',
      time: 'Today, 01:15 PM',
      completed: true,
      current: false
    },
    {
      title: 'Dispatched via Express Air Cargo',
      location: 'Kempegowda International Cargo Terminal, BLR',
      time: 'Today, 04:45 PM',
      completed: true,
      current: false
    },
    {
      title: 'Arrived at Destination Sort Facility',
      location: 'Mumbai Central Air Hub, Maharashtra',
      time: 'Today, 08:20 PM',
      completed: true,
      current: true
    },
    {
      title: 'Out for Doorstep Delivery',
      location: 'Bandra Courier Center, Mumbai',
      time: 'Tomorrow by 09:00 AM',
      completed: false,
      current: false
    },
    {
      title: 'Delivered to Recipient',
      location: activeOrder?.shippingAddress.city || 'Mumbai',
      time: 'Tomorrow by 08:00 PM',
      completed: false,
      current: false
    }
  ];

  const handleSearchTracking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTrackingId) {
      addToast('warning', 'Please enter a tracking number or Order ID');
      return;
    }
    addToast('info', 'Tracking Status Refreshed', `Shipment status updated for ${searchTrackingId}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="font-impact text-3xl sm:text-4xl tracking-wide text-zinc-900">
          TRACK SHIPMENT
        </h1>
        <p className="text-xs text-zinc-500 mt-0.5">
          Real-time GPS courier milestone updates powered by VOLT Express Logistics.
        </p>
      </div>

      {/* Tracking Search Input */}
      <form onSubmit={handleSearchTracking} className="flex gap-2 p-3 bg-zinc-100 rounded-2xl border border-zinc-200">
        <div className="flex-1 flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-zinc-300">
          <Search className="w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={searchTrackingId}
            onChange={(e) => setSearchTrackingId(e.target.value)}
            placeholder="Enter BlueDart AWB or VOLT Order ID..."
            className="w-full text-xs font-semibold text-zinc-900 focus:outline-hidden"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2.5 bg-black text-white text-xs font-bold rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
        >
          Track Package
        </button>
      </form>

      {/* Active Shipment Status Card */}
      <div className="bg-white rounded-3xl border border-zinc-200 shadow-md overflow-hidden">
        
        {/* Status Header Bar */}
        <div className="bg-zinc-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#ccff00]">
                IN TRANSIT • ON SCHEDULE
              </span>
            </div>
            <h2 className="font-impact text-2xl sm:text-3xl text-white">
              Estimated Delivery: Tomorrow by 8:00 PM
            </h2>
            <p className="text-xs text-zinc-400">
              Tracking Number: <strong className="text-zinc-200 font-mono">{searchTrackingId}</strong> (BlueDart Air)
            </p>
          </div>

          <div className="sm:text-right">
            <p className="text-xs text-zinc-400">Destination</p>
            <p className="text-sm font-bold text-white">
              {activeOrder?.shippingAddress.city}, {activeOrder?.shippingAddress.pincode}
            </p>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="p-6 sm:p-8 space-y-6">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900">
            SHIPMENT ACTIVITY & TIMELINE
          </h3>

          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-200">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative flex items-start justify-between gap-4">
                {/* Node marker */}
                <div
                  className={`absolute -left-6 sm:-left-8 w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                    event.completed
                      ? 'bg-black text-white border-black'
                      : event.current
                      ? 'bg-[#ccff00] text-black border-black ring-4 ring-lime-200'
                      : 'bg-white text-zinc-300 border-zinc-300'
                  }`}
                >
                  {event.completed ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00]" />
                  ) : (
                    <Clock className="w-3 h-3" />
                  )}
                </div>

                {/* Content */}
                <div className="space-y-0.5">
                  <p className={`text-xs sm:text-sm font-bold ${event.current ? 'text-black font-extrabold' : event.completed ? 'text-zinc-800' : 'text-zinc-400'}`}>
                    {event.title}
                  </p>
                  <p className="text-[11px] text-zinc-500">{event.location}</p>
                </div>

                <span className="text-[11px] text-zinc-400 font-mono shrink-0">
                  {event.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Assistance & Courier Contact */}
        <div className="bg-zinc-50 p-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-700">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-zinc-900">Courier Dispatch Hotline</p>
              <p className="text-zinc-500">BlueDart Reference: 1860-233-1234</p>
            </div>
          </div>

          <button
            onClick={() => navigateTo('contact')}
            className="px-4 py-2 bg-white border border-zinc-300 rounded-lg font-bold text-zinc-800 hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            Change Delivery Instructions
          </button>
        </div>

      </div>

    </div>
  );
};

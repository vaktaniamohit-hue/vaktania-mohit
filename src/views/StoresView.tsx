import React, { useState } from 'react';
import { MapPin, Phone, Clock, Calendar, Check, Sparkles, Navigation, ArrowRight } from 'lucide-react';
import { INDIAN_FLAGSHIP_STORES } from '../data/stores';
import { useShop } from '../context/ShopContext';

export const StoresView: React.FC = () => {
  const { addToast } = useShop();
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [activeStore, setActiveStore] = useState(INDIAN_FLAGSHIP_STORES[0]);
  
  // Appointment Form
  const [bookName, setBookName] = useState('');
  const [bookPhone, setBookPhone] = useState('');
  const [bookDate, setBookDate] = useState('2026-08-28');
  const [bookTime, setBookTime] = useState('04:00 PM');
  const [bookInterest, setBookInterest] = useState('Carbon Plate Marathon Fitting');

  const filteredStores = selectedCity === 'All'
    ? INDIAN_FLAGSHIP_STORES
    : INDIAN_FLAGSHIP_STORES.filter((s) => s.city.toLowerCase() === selectedCity.toLowerCase());

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookName || !bookPhone) {
      addToast('warning', 'Please provide your name and phone number');
      return;
    }
    addToast(
      'success',
      `Fitting Session Confirmed at ${activeStore.name}`,
      `Date: ${bookDate} at ${bookTime} • A footwear specialist will have your size ready.`
    );
    setBookName('');
    setBookPhone('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#ccff00] bg-black px-3 py-1 rounded-full">
          EXPERIENCE STUDIOS
        </span>
        <h1 className="font-impact text-4xl sm:text-5xl tracking-wide text-zinc-900">
          VOLT FLAGSHIP STORES IN INDIA
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Visit our experiential retail studios for complimentary 3D treadmill gait analysis, carbon plate trial sessions, and custom sneaker fitting.
        </p>
      </div>

      {/* City Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['All', 'Mumbai', 'Bengaluru', 'Delhi NCR', 'Hyderabad', 'Pune', 'Chennai'].map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCity === city
                ? 'bg-black text-white shadow-xs'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Store Grid & Detail Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Stores List (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {filteredStores.map((store) => {
            const isSelected = activeStore.id === store.id;
            return (
              <div
                key={store.id}
                onClick={() => setActiveStore(store)}
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'border-black bg-white shadow-lg'
                    : 'border-zinc-200 bg-zinc-50/50 hover:border-zinc-400'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-impact text-xl text-zinc-900">{store.name}</h3>
                      {isSelected && (
                        <span className="bg-[#ccff00] text-black text-[9px] font-black px-2 py-0.5 rounded-xs uppercase">
                          SELECTED
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-600 font-medium">{store.address}</p>
                    <p className="text-xs text-zinc-400">{store.city}, {store.state} - {store.pincode}</p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                      Open Today
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{store.hours}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{store.phone}</span>
                  </div>
                </div>

                {/* Features & Services */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {store.features.map((f, idx) => (
                    <span key={idx} className="bg-zinc-100 text-zinc-700 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                      • {f}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Interactive Fitting Session Booking Card (5 cols) */}
        <div className="lg:col-span-5 bg-zinc-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 sticky top-24 border border-zinc-800">
          <div>
            <div className="flex items-center gap-2 text-[#ccff00] text-xs font-extrabold uppercase tracking-widest">
              <Calendar className="w-4 h-4" />
              <span>COMPLIMENTARY FITTING</span>
            </div>
            <h3 className="font-impact text-2xl text-white mt-1">
              BOOK A LAB GAIT ANALYSIS
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Test running shoes on our instrumented in-store track at <strong className="text-white">{activeStore.name}</strong>.
            </p>
          </div>

          <form onSubmit={handleBookAppointment} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
                placeholder="e.g. Rahul Mehta"
                className="w-full text-xs px-3.5 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-hidden focus:border-[#ccff00]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                Mobile Number (+91)
              </label>
              <input
                type="tel"
                value={bookPhone}
                onChange={(e) => setBookPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full text-xs px-3.5 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-hidden focus:border-[#ccff00]"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={bookDate}
                  onChange={(e) => setBookDate(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                  Time Slot
                </label>
                <select
                  value={bookTime}
                  onChange={(e) => setBookTime(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-hidden"
                >
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="06:30 PM">06:30 PM</option>
                  <option value="08:00 PM">08:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                Focus Area
              </label>
              <select
                value={bookInterest}
                onChange={(e) => setBookInterest(e.target.value)}
                className="w-full text-xs px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-hidden"
              >
                <option value="Carbon Plate Marathon Fitting">Carbon Plate Marathon Fitting</option>
                <option value="Basketball Court Traction & Ankle Support">Basketball Court Traction & Ankle Support</option>
                <option value="Daily 10K Cushioned Running">Daily 10K Cushioned Running</option>
                <option value="Custom Insole & Arch Assessment">Custom Insole & Arch Assessment</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#ccff00] text-black text-xs font-black uppercase tracking-wider rounded-xl hover:bg-lime-400 transition-colors cursor-pointer shadow-md"
            >
              Reserve Free Fitting Appointment
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};

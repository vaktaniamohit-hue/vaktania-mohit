import React from 'react';
import { Zap, ShieldCheck, Award, Heart, Globe, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const AboutView: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16">
      
      {/* Manifesto Hero */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#ccff00] bg-black px-3 py-1 rounded-full">
          THE VOLT MANIFESTO
        </span>
        <h1 className="font-impact text-4xl sm:text-6xl text-zinc-900 tracking-tight leading-none">
          ENGINEERED TO OUTPACE CONVENTION.
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 font-medium leading-relaxed">
          Founded with a singular conviction: athletic footwear shouldn't compromise between extreme race-day velocity and daily durability. We build for the athletes who push past their limits every morning.
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-zinc-900 text-white rounded-3xl space-y-4 border border-zinc-800">
          <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-[#ccff00]">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="font-impact text-2xl tracking-wide">Propulsion First</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Our dual-density PEBA Aerofoam+ matrix returns up to 84% of kinetic energy with zero packing-out across 800+ kilometers.
          </p>
        </div>

        <div className="p-8 bg-zinc-900 text-white rounded-3xl space-y-4 border border-zinc-800">
          <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-[#ccff00]">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="font-impact text-2xl tracking-wide">Climate Calibrated</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Engineered specifically for extreme Indian summer heat and heavy monsoons, combining HydroShield uppers with high-flow AeroKnit ventilation.
          </p>
        </div>

        <div className="p-8 bg-zinc-900 text-white rounded-3xl space-y-4 border border-zinc-800">
          <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-[#ccff00]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-impact text-2xl tracking-wide">Zero Compromise</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Every component is tested across 120,000 km of real road running and 500 hours of court stress testing before commercial release.
          </p>
        </div>
      </div>

      {/* Sustainable Innovation */}
      <div className="bg-zinc-100 rounded-3xl p-8 sm:p-12 border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <h3 className="font-impact text-3xl text-zinc-900">CIRCULAR ATHLETICS</h3>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            By 2027, 100% of VOLT outsoles and midsoles will be manufactured using closed-loop recycled thermoplastic polymers without sacrificing a single milligram of energy return.
          </p>
        </div>
        <button
          onClick={() => navigateTo('shop')}
          className="px-8 py-4 bg-black text-white text-xs font-extrabold uppercase tracking-wider rounded-xl hover:bg-zinc-800 transition-colors shrink-0 cursor-pointer"
        >
          Explore All 32 Models
        </button>
      </div>

    </div>
  );
};

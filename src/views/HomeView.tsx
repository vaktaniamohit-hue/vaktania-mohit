import React, { useState } from 'react';
import { 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Flame, 
  Sparkles, 
  ChevronRight, 
  TrendingUp, 
  Award,
  Play,
  RotateCcw,
  Star
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/product/ProductCard';
import { Category, Gender } from '../types';

export const HomeView: React.FC = () => {
  const { products, navigateTo, openQuickView, recentlyViewed } = useShop();
  const [activeTechTab, setActiveTechTab] = useState<'foam' | 'plate' | 'upper' | 'grip'>('foam');

  // Featured slices
  const heroProduct = products.find((p) => p.id === 'volt-01') || products[0];
  const newArrivals = products.filter((p) => p.isNewArrival).slice(0, 4);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);
  const limitedDrops = products.filter((p) => p.isLimitedDrop).slice(0, 4);
  const recentProducts = recentlyViewed
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  const categories = [
    {
      title: 'Road & Marathon',
      category: 'Running' as Category,
      tagline: 'Engineered for PB breaks',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
      count: '8 Models'
    },
    {
      title: 'Court & Hoops',
      category: 'Basketball' as Category,
      tagline: 'Explosive vertical response',
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
      count: '6 Models'
    },
    {
      title: 'Gym & Cross Training',
      category: 'Training' as Category,
      tagline: 'Grip & lateral stability',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80',
      count: '5 Models'
    },
    {
      title: 'Street & Lifestyle',
      category: 'Lifestyle' as Category,
      tagline: 'Clean aesthetic comfort',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80',
      count: '7 Models'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. EDITORIAL SPLIT-SCREEN HERO SECTION */}
      <section className="border-b border-black bg-white overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[640px] lg:min-h-[720px]">
          
          {/* Left Column: Big Editorial Statement & Specs */}
          <div className="lg:col-span-8 bg-zinc-50 border-b lg:border-b-0 lg:border-r border-black p-8 sm:p-14 flex flex-col justify-between relative overflow-hidden">
            {/* Background SVG Motif */}
            <div className="absolute -bottom-16 -right-16 w-96 h-96 pointer-events-none opacity-5">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black fill-current">
                <path d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87,-15.7,86.2,-0.5C85.3,14.7,80.3,29.4,72.4,42.2C64.5,55,53.7,65.8,40.9,73.1C28.1,80.4,14.1,84.2,-0.2,84.5C-14.4,84.7,-28.9,81.5,-42,74.5C-55.2,67.5,-67.1,56.7,-74.8,43.7C-82.5,30.7,-86,15.3,-85.1,0.5C-84.3,-14.3,-79.1,-28.6,-70.9,-41C-62.7,-53.4,-51.5,-63.9,-38.7,-71.4C-25.8,-79,-12.9,-83.6,0.6,-84.6C14.1,-85.6,28.2,-83,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>

            <div className="space-y-6 relative z-10">
              <div>
                <span className="bg-black text-[#CCFF00] px-3 py-1 text-[10px] font-black uppercase tracking-tighter inline-block mb-4 border border-black">
                  New Season Launch 2026
                </span>
                <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-black leading-[0.84] tracking-tighter uppercase text-black mb-4">
                  BUILT TO<br />MOVE.
                </h1>
                <p className="text-xs sm:text-sm font-medium tracking-tight max-w-md opacity-80 uppercase text-zinc-800 leading-relaxed">
                  Performance footwear designed for every stride, sprint, and everyday adventure. Engineered in the propulsion lab, proven on the track.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => navigateTo('shop', { gender: 'Men' })}
                  className="bg-black text-white px-8 sm:px-10 py-4 sm:py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors border border-black cursor-pointer"
                >
                  Shop Men's
                </button>
                <button
                  onClick={() => navigateTo('shop', { gender: 'Women' })}
                  className="border border-black bg-transparent text-black px-8 sm:px-10 py-4 sm:py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors cursor-pointer"
                >
                  Shop Women's
                </button>
              </div>
            </div>

            {/* Bottom Metadata specs */}
            <div className="pt-10 sm:pt-16 flex flex-wrap items-end justify-between gap-6 border-t border-black/20 mt-8 relative z-10">
              <div className="flex flex-wrap gap-8 sm:gap-12">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Technology</span>
                  <span className="text-xs font-bold text-black uppercase">Aero-Responsive PEBA</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Weight</span>
                  <span className="text-xs font-bold text-black uppercase">198g (Size UK 9)</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Energy Return</span>
                  <span className="text-xs font-bold text-black uppercase">+14% Propulsive</span>
                </div>
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-zinc-800">
                <div className="w-8 h-[1px] bg-black" />
                Explore 32 Models
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Feature Stack */}
          <div className="lg:col-span-4 flex flex-col bg-white">
            
            {/* Feature 1: Best Seller */}
            <div 
              onClick={() => navigateTo('product', { productId: heroProduct.id })}
              className="flex-1 border-b border-black p-6 sm:p-8 group cursor-pointer relative overflow-hidden bg-white hover:bg-zinc-950 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest py-1 px-2.5 border border-black group-hover:border-white group-hover:bg-white group-hover:text-black transition-colors">
                  Best Seller
                </span>
                <span className="font-black text-lg italic tracking-tight group-hover:text-[#ccff00]">
                  ₹{heroProduct.price.toLocaleString('en-IN')}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black italic leading-tight mb-2 tracking-tighter uppercase group-hover:text-white transition-colors">
                {heroProduct.name}
              </h3>
              <p className="text-[11px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400 transition-colors">
                {heroProduct.tagline}
              </p>
              <div className="w-full h-32 mt-3 flex items-center justify-center">
                <img
                  src={heroProduct.images.main}
                  alt={heroProduct.name}
                  className="max-h-28 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Feature 2: Member Access in Volt Accent */}
            <div 
              onClick={() => navigateTo('shop', { newOnly: true })}
              className="flex-1 border-b border-black p-6 sm:p-8 group cursor-pointer bg-[#CCFF00] text-black relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest py-1 px-2.5 border border-black bg-black text-white">
                  Member Early Access
                </span>
                <span className="font-black text-lg italic tracking-tight">
                  ₹11,999
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black italic leading-tight mb-2 tracking-tighter uppercase">
                VOLT VELOCITY PRO
              </h3>
              <p className="text-[11px] uppercase tracking-widest text-black/70">
                Race Day Performance / 3D Carbon Matrix
              </p>
            </div>

            {/* Feature 3: Action Grid & Live Status */}
            <div className="p-6 sm:p-8 flex flex-col justify-between bg-zinc-50">
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => navigateTo('shop', { category: 'Running' })}
                  className="border border-black p-3 text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all bg-white cursor-pointer"
                >
                  Shop Running
                </button>
                <button 
                  onClick={() => navigateTo('shop', { category: 'Lifestyle' })}
                  className="border border-black p-3 text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all bg-white cursor-pointer"
                >
                  Shop Lifestyle
                </button>
                <button 
                  onClick={() => navigateTo('shop', { category: 'Training' })}
                  className="border border-black p-3 text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all bg-white cursor-pointer"
                >
                  Shop Training
                </button>
                <button 
                  onClick={() => navigateTo('shop', { onSale: true })}
                  className="bg-red-600 text-white p-3 text-[10px] font-black uppercase tracking-widest border border-black hover:bg-red-700 transition-colors cursor-pointer"
                >
                  Flash Sale -30%
                </button>
              </div>
              <div className="flex items-center justify-between mt-5 text-[10px] font-bold uppercase tracking-wider text-zinc-600 border-t border-black/10 pt-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  India Flagship Network
                </span>
                <span>Express 48h Delivery</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. SHOP BY SPORT & CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-black">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
              DISCOVER YOUR DISCIPLINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              SHOP BY SPORT
            </h2>
          </div>
          <button
            onClick={() => navigateTo('shop')}
            className="text-xs font-black uppercase tracking-widest text-black hover:text-zinc-600 flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              onClick={() => navigateTo('shop', { category: cat.category })}
              className="group relative h-80 overflow-hidden cursor-pointer bg-zinc-950 border border-black"
            >
              {/* Background Photo */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Text content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="self-end">
                  <span className="bg-[#ccff00] text-black text-[9px] font-black px-2 py-1 uppercase tracking-widest border border-black">
                    {cat.count}
                  </span>
                </div>

                <div className="space-y-1 text-white">
                  <p className="text-[10px] text-zinc-300 font-bold uppercase tracking-wider">{cat.tagline}</p>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#ccff00] transition-colors">
                    {cat.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-white pt-1">
                    <span>Explore Discipline</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. NEW ARRIVALS DROP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between pb-3 border-b border-black">
          <div>
            <div className="inline-block bg-black text-[#ccff00] text-[9px] font-black uppercase tracking-[0.2em] px-2 py-0.5 mb-1 border border-black">
              FRESH RELEASE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              NEW ARRIVALS
            </h2>
          </div>
          <button
            onClick={() => navigateTo('shop', { newOnly: true })}
            className="text-xs font-black uppercase tracking-widest text-black hover:text-zinc-600 flex items-center gap-1 cursor-pointer"
          >
            <span>Explore All Drops</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {newArrivals.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 4. INNOVATION SPOTLIGHT: AEROFOAM+ LAB */}
      <section className="bg-black text-white py-16 sm:py-20 border-y border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left max-w-2xl space-y-2 border-b border-zinc-800 pb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ccff00]">
              VOLT PROPULSION LAB
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              ENGINEERED FOR PROPULSION
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
              Every curve, supercritical PEBA foam matrix cell, and 3D carbon lever is calibrated in our high-performance testing suites.
            </p>
          </div>

          {/* Interactive Tech Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Tab Switcher & Specs */}
            <div className="lg:col-span-5 space-y-2.5">
              {[
                {
                  id: 'foam' as const,
                  title: 'Aerofoam+ Dual-Core Midsole',
                  desc: 'Supercritical PEBA foam formulation providing 84% energy restitution, ultra-responsive cushioning without thermal degradation.',
                  stat: '+84% REBOUND'
                },
                {
                  id: 'plate' as const,
                  title: '3D Sculpted Carbon Plate',
                  desc: 'Curved carbon fiber rocker lever that propels your toe-off phase, saving critical metabolic watts across 42 kilometers.',
                  stat: '3D CARBON'
                },
                {
                  id: 'upper' as const,
                  title: 'AeroKnit Engineered Mesh',
                  desc: 'Zoned breathability mesh calibrated for Indian summer temperatures with zero friction and locked-in heel stability.',
                  stat: 'ZERO FRICTION'
                },
                {
                  id: 'grip' as const,
                  title: 'GripMax Wet Rubber Outsole',
                  desc: 'Hexagonal lug pattern formulated for wet asphalt, polished indoor court hardwood, and damp monsoon footpaths.',
                  stat: '100% TRACTION'
                }
              ].map((tech) => (
                <div
                  key={tech.id}
                  onClick={() => setActiveTechTab(tech.id)}
                  className={`p-4 border transition-all cursor-pointer ${
                    activeTechTab === tech.id
                      ? 'bg-zinc-900 border-[#ccff00]'
                      : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className={`text-xs font-black uppercase tracking-wider ${activeTechTab === tech.id ? 'text-[#ccff00]' : 'text-white'}`}>
                      {tech.title}
                    </h4>
                    <span className="text-[9px] font-black uppercase tracking-wider bg-black border border-zinc-700 px-2 py-0.5 text-zinc-300">
                      {tech.stat}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: Exploded Shoe Image */}
            <div className="lg:col-span-7 bg-zinc-950 p-6 sm:p-10 border border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="w-full max-w-md aspect-square relative flex items-center justify-center">
                <img
                  src={heroProduct.images.side || heroProduct.images.main}
                  alt="Propulsion Technology"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="w-full pt-6 flex items-center justify-between border-t border-zinc-800 text-xs">
                <span className="text-zinc-400 text-[11px] uppercase tracking-wider font-bold">Tested over 120,000 Kilometers</span>
                <button
                  onClick={() => navigateTo('about')}
                  className="font-black text-[11px] uppercase tracking-widest text-[#ccff00] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Lab Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. BEST SELLERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between pb-3 border-b border-black">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
              COMMUNITY FAVORITES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              BEST SELLERS
            </h2>
          </div>
          <button
            onClick={() => navigateTo('shop')}
            className="text-xs font-black uppercase tracking-widest text-black hover:text-zinc-600 flex items-center gap-1 cursor-pointer"
          >
            <span>View All Bestsellers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {bestSellers.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 6. LIMITED DROPS & MEMBER PASS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black text-white p-8 sm:p-12 border border-black relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="bg-[#ccff00] text-black text-[10px] font-black px-2.5 py-1 uppercase tracking-widest border border-black inline-block">
                VOLT CLUB PASS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                UNCOMPROMISING SPEED. EXCLUSIVE ACCESS.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-lg leading-relaxed font-medium">
                Join 85,000+ athletes across India. Get 24-hour early access to limited edition drops, free 1-day express delivery, and invitations to city run clubs.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => navigateTo('membership')}
                  className="px-6 py-4 bg-white text-black hover:bg-zinc-200 text-xs font-black uppercase tracking-[0.2em] transition-colors cursor-pointer border border-white"
                >
                  Join VOLT Club (Free)
                </button>
                <button
                  onClick={() => navigateTo('shop', { onSale: true })}
                  className="px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-[#ccff00] border border-zinc-700 text-xs font-black uppercase tracking-[0.2em] transition-colors cursor-pointer"
                >
                  Member Drops
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {limitedDrops.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigateTo('product', { productId: item.id })}
                  className="bg-zinc-950 p-4 border border-zinc-800 hover:border-[#ccff00] transition-colors cursor-pointer space-y-2"
                >
                  <div className="aspect-square bg-zinc-900 overflow-hidden border border-zinc-800">
                    <img src={item.images.main} alt="" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white truncate">{item.name}</p>
                  <p className="text-xs font-black italic text-[#ccff00]">₹{item.price.toLocaleString('en-IN')}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. RECENTLY VIEWED (If any) */}
      {recentProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              RECENTLY VIEWED
            </h2>
            <button
              onClick={() => navigateTo('shop')}
              className="text-xs font-black uppercase tracking-widest text-zinc-500 hover:text-black"
            >
              Continue Browsing
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
            {recentProducts.slice(0, 4).map((prod) => prod && (
              <ProductCard key={prod.id} product={prod} compact />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

import React, { useState } from 'react';
import { 
  Zap, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  RotateCcw, 
  Truck, 
  Award,
  Globe
} from 'lucide-react';
import { useShop, ActiveView } from '../../context/ShopContext';
import { Category, Gender } from '../../types';

export const Footer: React.FC = () => {
  const { navigateTo, addToast } = useShop();
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) {
      addToast('warning', 'Please enter a valid email address');
      return;
    }
    addToast('success', 'Welcome to the VOLT Community!', 'Check your inbox for 10% off code: VOLT10');
    setEmailInput('');
  };

  const handleNav = (view: ActiveView, options?: { category?: Category; gender?: Gender; onSale?: boolean; newOnly?: boolean }) => {
    navigateTo(view, options);
  };

  return (
    <footer className="bg-black text-white pt-16 pb-12 border-t border-black">
      
      {/* Value Proposition Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-zinc-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#ccff00] shrink-0">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-white">Free Express Delivery</p>
              <p className="text-[11px] text-zinc-400">On all orders over ₹4,999</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#ccff00] shrink-0">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-white">30-Day Returns</p>
              <p className="text-[11px] text-zinc-400">No questions asked exchange</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#ccff00] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-white">100% Genuine Tech</p>
              <p className="text-[11px] text-zinc-400">Engineered performance gear</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#ccff00] shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-white">VOLT Club Rewards</p>
              <p className="text-[11px] text-zinc-400">Exclusive member privileges</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Brand Column & Newsletter (2 cols wide) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black uppercase tracking-tighter text-white">VOLT</span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 font-bold border-l border-zinc-700 pl-2">
                ATHLETICS
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              We design premium athletic footwear engineered for runners, athletes, and creators who move without limits. Tested on track, court, and street.
            </p>

            {/* Newsletter Sign-up */}
            <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ccff00]">
                BE FIRST TO DROP ALERTS
              </p>
              <div className="flex items-center">
                <input
                  id="footer-email-input"
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-zinc-900 border border-zinc-700 text-xs px-3.5 py-3 text-white placeholder-zinc-500 focus:outline-hidden focus:border-[#ccff00]"
                />
                <button
                  id="footer-email-submit"
                  type="submit"
                  className="bg-[#ccff00] text-black px-5 py-3 text-xs font-black uppercase tracking-widest hover:bg-lime-400 transition-colors flex items-center gap-1 cursor-pointer shrink-0 border border-[#ccff00]"
                >
                  <span>JOIN</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[10px] text-zinc-500">By signing up you agree to VOLT Terms & Privacy Policy.</p>
            </form>
          </div>

          {/* SHOP */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-zinc-300">SHOP</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
              <li>
                <button onClick={() => handleNav('shop', { gender: 'Men' })} className="hover:text-white transition-colors cursor-pointer">
                  Men's Shoes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop', { gender: 'Women' })} className="hover:text-white transition-colors cursor-pointer">
                  Women's Shoes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop', { category: 'Kids' })} className="hover:text-white transition-colors cursor-pointer">
                  Kids' Footwear
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop', { category: 'Running' })} className="hover:text-white transition-colors cursor-pointer">
                  Running & Marathon
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop', { category: 'Basketball' })} className="hover:text-white transition-colors cursor-pointer">
                  Basketball Court
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop', { category: 'Lifestyle' })} className="hover:text-white transition-colors cursor-pointer">
                  Lifestyle & Street
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop', { onSale: true })} className="text-red-400 hover:text-red-300 transition-colors cursor-pointer font-bold">
                  Sale (Up to 30% Off)
                </button>
              </li>
            </ul>
          </div>

          {/* HELP & SUPPORT */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-zinc-300">HELP</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Customer Support
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tracking')} className="hover:text-white transition-colors cursor-pointer">
                  Track Your Order
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Shipping & Delivery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Returns & Exchanges
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Shoe Sizing Guide
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  WhatsApp Concierge
                </button>
              </li>
            </ul>
          </div>

          {/* ABOUT VOLT */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-zinc-300">ABOUT</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  Our Story & Mission
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('membership')} className="hover:text-[#ccff00] transition-colors cursor-pointer font-bold">
                  VOLT Pass Membership
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('stores')} className="hover:text-white transition-colors cursor-pointer">
                  Flagship Store Locator
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  Aerofoam+ Lab
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  Sustainability
                </button>
              </li>
            </ul>
          </div>

          {/* CONNECT & INDIA LOCATIONS */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-zinc-300">LOCATIONS</h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
              Flagship Experience Studios in Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune, & Chennai.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleNav('stores')}
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#ccff00] hover:underline cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Find a Studio</span>
              </button>
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400">
              <Globe className="w-3.5 h-3.5 text-zinc-400" />
              <span>India • INR (₹)</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar & Prototype Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-zinc-800 text-[11px] text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p>© {new Date().getFullYear()} VOLT Athletics Inc. All rights reserved. "Move Without Limits."</p>
          <p className="text-[10px] text-zinc-600 mt-0.5">
            Note: This is an original e-commerce prototype website for fictional brand VOLT. All products, reviews, and payment flows are simulated for demo purposes.
          </p>
        </div>
        <div className="flex items-center gap-6 text-zinc-400 text-[10px] font-bold uppercase tracking-wider">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">GST & Invoicing</span>
          <span className="hover:text-white cursor-pointer">Accessibility</span>
        </div>
      </div>

    </footer>
  );
};

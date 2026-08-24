import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  User, 
  Menu, 
  X, 
  ChevronRight, 
  Zap, 
  MapPin, 
  Sparkles,
  ArrowRight,
  Percent
} from 'lucide-react';
import { useShop, ActiveView } from '../../context/ShopContext';
import { Category, Gender } from '../../types';

export const Header: React.FC = () => {
  const { 
    cartItemsCount, 
    cartTotal,
    wishlist, 
    user,
    navigateTo, 
    activeView,
    setSearchOpen,
    setCartDrawerOpen,
    setAuthModalOpen
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  const announcements = [
    'VOLT MEMBER PASS • FREE EXPRESS SHIPPING ON ORDERS OVER ₹4,999',
    'THE NEW VOLT AERO RUN IS HERE • MARATHON-READY CARBON PLATE',
    'EASY 30-DAY RETURNS & EXCHANGES ACROSS 15,000+ INDIAN PIN CODES'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const handleNavClick = (view: ActiveView, options?: { category?: Category; gender?: Gender; onSale?: boolean; newOnly?: boolean }) => {
    setIsMobileMenuOpen(false);
    navigateTo(view, options);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-all duration-300 border-b border-black">
      {/* Top Notification / Announcement Bar */}
      <div id="announcement-bar" className="bg-black text-zinc-300 text-[11px] font-bold uppercase tracking-wider py-2 px-4 sm:px-10 overflow-hidden border-b border-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block px-2 py-0.5 bg-[#ccff00] text-black font-black text-[9px] uppercase tracking-widest border border-black">
              VOLT EDITORIAL
            </span>
            <p className="transition-all duration-500 font-bold tracking-wider text-white text-[11px] truncate">
              {announcements[announcementIndex]}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-6 text-zinc-300 text-[10px] font-bold uppercase tracking-widest">
            <button 
              onClick={() => handleNavClick('stores')}
              className="hover:text-[#ccff00] flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>Studio Locator</span>
            </button>
            <span className="text-zinc-700">/</span>
            <button 
              onClick={() => handleNavClick('membership')}
              className="hover:text-[#ccff00] flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Zap className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>Volt Pass</span>
            </button>
            <span className="text-zinc-700">/</span>
            <button 
              onClick={() => handleNavClick('contact')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Support
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full px-4 sm:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Mobile menu button + Brand Logo */}
          <div className="flex items-center gap-4 sm:gap-10">
            <button
              id="mobile-menu-toggle"
              aria-label="Open Navigation Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-black hover:bg-zinc-100 cursor-pointer border border-transparent hover:border-black transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* VOLT Athletic Wordmark */}
            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-2 focus:outline-hidden cursor-pointer text-left"
            >
              <span className="text-3xl sm:text-4xl font-black tracking-tighter text-black uppercase group-hover:text-zinc-700 transition-colors">
                VOLT
              </span>
              <span className="hidden sm:inline-block text-[9px] uppercase tracking-[0.25em] text-zinc-400 font-bold ml-1 pl-2 border-l border-zinc-300">
                ATHLETICS
              </span>
            </button>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[11px] font-bold uppercase tracking-widest">
            <button
              id="nav-new-btn"
              onClick={() => handleNavClick('shop', { newOnly: true })}
              className="hover:text-zinc-500 transition-colors cursor-pointer py-2"
            >
              New
            </button>
            <button
              id="nav-men-btn"
              onClick={() => handleNavClick('shop', { gender: 'Men' })}
              className="hover:text-zinc-500 transition-colors cursor-pointer py-2"
            >
              Men
            </button>
            <button
              id="nav-women-btn"
              onClick={() => handleNavClick('shop', { gender: 'Women' })}
              className="hover:text-zinc-500 transition-colors cursor-pointer py-2"
            >
              Women
            </button>
            <button
              id="nav-running-btn"
              onClick={() => handleNavClick('shop', { category: 'Running' })}
              className="hover:text-zinc-500 transition-colors cursor-pointer py-2"
            >
              Running
            </button>
            <button
              id="nav-basketball-btn"
              onClick={() => handleNavClick('shop', { category: 'Basketball' })}
              className="hover:text-zinc-500 transition-colors cursor-pointer py-2"
            >
              Basketball
            </button>
            <button
              id="nav-training-btn"
              onClick={() => handleNavClick('shop', { category: 'Training' })}
              className="hover:text-zinc-500 transition-colors cursor-pointer py-2"
            >
              Training
            </button>
            <button
              id="nav-lifestyle-btn"
              onClick={() => handleNavClick('shop', { category: 'Lifestyle' })}
              className="hover:text-zinc-500 transition-colors cursor-pointer py-2"
            >
              Lifestyle
            </button>
            <button
              id="nav-sale-btn"
              onClick={() => handleNavClick('shop', { onSale: true })}
              className="text-red-600 font-black hover:text-red-700 transition-colors cursor-pointer py-2 flex items-center gap-1"
            >
              <span>Sale</span>
            </button>
          </nav>

          {/* Right: Search, Account, Wishlist, Cart */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Search Box */}
            <div className="relative group">
              <button
                id="header-search-btn"
                aria-label="Search footwear catalog"
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 bg-zinc-100 border border-black/20 hover:border-black px-3.5 py-2 text-xs w-[140px] sm:w-[170px] md:focus-within:w-[220px] transition-all cursor-pointer text-left"
              >
                <Search className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                <span className="text-zinc-500 text-xs font-medium truncate">
                  Search
                </span>
              </button>
            </div>

            {/* Account Profile */}
            <button
              id="header-account-btn"
              aria-label="User Account"
              onClick={() => handleNavClick('account')}
              className="p-2 text-black hover:text-zinc-600 transition-colors relative cursor-pointer"
              title={user ? `Signed in as ${user.name}` : 'Sign In'}
            >
              <User className="w-5 h-5" />
              {user && (
                <span className="absolute bottom-1.5 right-1.5 w-2 h-2 bg-[#ccff00] rounded-full border border-black" />
              )}
            </button>

            {/* Wishlist */}
            <button
              id="header-wishlist-btn"
              aria-label="Wishlist"
              onClick={() => handleNavClick('wishlist')}
              className="p-2 text-black hover:text-zinc-600 transition-colors relative cursor-pointer"
              title="View Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] bg-black text-white text-[9px] font-black rounded-full flex items-center justify-center px-0.5 border border-white">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Bag with Editorial Pill */}
            <button
              id="header-cart-btn"
              aria-label="Shopping Bag"
              onClick={() => setCartDrawerOpen(true)}
              className="p-2 relative text-black hover:text-zinc-600 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#CCFF00] text-black text-[9px] font-black h-4.5 w-4.5 flex items-center justify-center rounded-full border border-black">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[105px] z-50 bg-white border-t border-black overflow-y-auto pb-24 animate-in fade-in duration-200">
          <div className="p-5 space-y-6">
            
            {/* Quick search input */}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setSearchOpen(true);
              }}
              className="w-full flex items-center justify-between p-3.5 bg-zinc-100 border border-black text-black text-xs font-bold uppercase tracking-wider"
            >
              <span className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-black" />
                <span>Search VOLT footwear...</span>
              </span>
              <kbd className="text-[10px] bg-black text-white px-2 py-1 uppercase tracking-widest font-black">Search</kbd>
            </button>

            {/* Navigation links */}
            <div className="space-y-1 border-t border-b border-black py-4">
              <p className="px-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Shop Discipline</p>
              
              <button
                onClick={() => handleNavClick('shop', { newOnly: true })}
                className="w-full flex items-center justify-between p-2.5 text-xs font-black uppercase tracking-widest text-black hover:bg-zinc-100"
              >
                <span>New Releases</span>
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
              <button
                onClick={() => handleNavClick('shop', { gender: 'Men' })}
                className="w-full flex items-center justify-between p-2.5 text-xs font-black uppercase tracking-widest text-black hover:bg-zinc-100"
              >
                <span>Men's Footwear</span>
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
              <button
                onClick={() => handleNavClick('shop', { gender: 'Women' })}
                className="w-full flex items-center justify-between p-2.5 text-xs font-black uppercase tracking-widest text-black hover:bg-zinc-100"
              >
                <span>Women's Footwear</span>
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
              <button
                onClick={() => handleNavClick('shop', { category: 'Running' })}
                className="w-full flex items-center justify-between p-2.5 text-xs font-black uppercase tracking-widest text-black hover:bg-zinc-100"
              >
                <span>Running & Marathons</span>
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
              <button
                onClick={() => handleNavClick('shop', { category: 'Basketball' })}
                className="w-full flex items-center justify-between p-2.5 text-xs font-black uppercase tracking-widest text-black hover:bg-zinc-100"
              >
                <span>Basketball Court</span>
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
              <button
                onClick={() => handleNavClick('shop', { category: 'Training' })}
                className="w-full flex items-center justify-between p-2.5 text-xs font-black uppercase tracking-widest text-black hover:bg-zinc-100"
              >
                <span>Gym & Training</span>
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
              <button
                onClick={() => handleNavClick('shop', { category: 'Lifestyle' })}
                className="w-full flex items-center justify-between p-2.5 text-xs font-black uppercase tracking-widest text-black hover:bg-zinc-100"
              >
                <span>Lifestyle & Street</span>
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
              <button
                onClick={() => handleNavClick('shop', { onSale: true })}
                className="w-full flex items-center justify-between p-2.5 text-xs font-black uppercase tracking-widest text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 mt-2"
              >
                <span className="flex items-center gap-2">
                  <Percent className="w-4 h-4" />
                  <span>Flash Sale -30%</span>
                </span>
                <ChevronRight className="w-4 h-4 text-red-600" />
              </button>
            </div>

            {/* Quick account & secondary */}
            <div className="space-y-2 text-xs font-bold uppercase tracking-widest text-zinc-700">
              <button
                onClick={() => handleNavClick('account')}
                className="w-full flex items-center gap-3 p-2.5 hover:bg-zinc-100"
              >
                <User className="w-4 h-4 text-black" />
                <span>My Account & Orders</span>
              </button>
              <button
                onClick={() => handleNavClick('membership')}
                className="w-full flex items-center gap-3 p-2.5 bg-[#ccff00] text-black border border-black font-black"
              >
                <Zap className="w-4 h-4 text-black fill-black" />
                <span>VOLT Pass (Member Club)</span>
              </button>
              <button
                onClick={() => handleNavClick('stores')}
                className="w-full flex items-center gap-3 p-2.5 hover:bg-zinc-100"
              >
                <MapPin className="w-4 h-4 text-black" />
                <span>Studios in India</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center gap-3 p-2.5 hover:bg-zinc-100"
              >
                <span>Customer Support</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

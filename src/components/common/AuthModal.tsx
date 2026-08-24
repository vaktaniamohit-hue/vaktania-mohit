import React, { useState } from 'react';
import { X, Zap, Shield, Check, Lock, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setAuthModalOpen, user, updateUserProfile, addToast } = useShop();
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('Aryan Varma');
  const [email, setEmail] = useState('aryan.varma@voltathletics.com');
  const [phone, setPhone] = useState('+91 98201 54321');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone) {
      addToast('warning', 'Please fill in required fields');
      return;
    }

    updateUserProfile({
      name: name || 'Volt Athlete',
      email,
      phone,
      membershipTier: 'Pro',
      voltPoints: user?.voltPoints || 1500
    });

    addToast('success', isSignUp ? 'Welcome to VOLT Club!' : 'Signed in successfully');
    setAuthModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white max-w-md w-full overflow-hidden border border-black animate-in zoom-in-95 duration-200">
        
        {/* Header Banner */}
        <div className="bg-black p-6 text-white relative border-b border-black">
          <button
            onClick={() => setAuthModalOpen(false)}
            className="absolute top-4 right-4 p-1.5 text-white hover:bg-white hover:text-black border border-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-3xl font-black italic tracking-tighter text-white">VOLT</span>
            <span className="w-2 h-2 bg-[#ccff00] mb-2" />
          </div>
          <h3 className="text-xl font-black uppercase tracking-tight text-white">
            {isSignUp ? 'Join the VOLT Club' : 'Welcome Back, Athlete'}
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Unlock member-only shoe drops, free express delivery, and invite-only sprint events.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full text-xs font-bold px-3.5 py-2.5 border border-black focus:outline-hidden uppercase"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              className="w-full text-xs font-bold px-3.5 py-2.5 border border-black focus:outline-hidden"
              required
            />
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1.5">
              Mobile Number (India +91)
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full text-xs font-bold px-3.5 py-2.5 border border-black focus:outline-hidden"
              required
            />
          </div>

          <div className="p-3 bg-zinc-50 border border-black text-xs text-zinc-600 space-y-1">
            <div className="flex items-center gap-2 font-black uppercase tracking-wider text-black text-[11px]">
              <Zap className="w-3.5 h-3.5 text-black fill-black" />
              <span>Instant Pro Member Status</span>
            </div>
            <p className="text-[10px] text-zinc-500 font-medium">
              Prototype mode: One-click sign-in without OTP simulation.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black hover:bg-zinc-800 text-white text-xs font-black tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer border border-black"
          >
            <span>{isSignUp ? 'Create VOLT Account' : 'Sign In To Account'}</span>
            <ArrowRight className="w-4 h-4 text-[#ccff00]" />
          </button>

          <div className="pt-2 text-center text-xs text-zinc-500">
            {isSignUp ? (
              <p>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className="font-black uppercase tracking-wider text-black hover:underline cursor-pointer ml-1"
                >
                  Sign In
                </button>
              </p>
            ) : (
              <p>
                Don't have an account yet?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className="font-black uppercase tracking-wider text-black hover:underline cursor-pointer ml-1"
                >
                  Join Free
                </button>
              </p>
            )}
          </div>
        </form>

      </div>
    </div>
  );
};

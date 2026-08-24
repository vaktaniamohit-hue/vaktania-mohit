import React from 'react';
import { Zap, Check, ShieldCheck, Trophy, Sparkles, ArrowRight, Gift } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const MembershipView: React.FC = () => {
  const { user, navigateTo, addToast, setAuthModalOpen } = useShop();

  const tiers = [
    {
      name: 'Rookie Member',
      points: '0 - 999 Pts',
      perks: [
        'Free standard shipping on orders over ₹4,999',
        'Early access to seasonal discount events',
        'Digital receipt & sizing history',
        'Standard 30-day returns'
      ],
      current: false,
      cta: 'Free Auto-Enroll'
    },
    {
      name: 'VOLT Pro Athlete',
      points: '1,000 - 4,999 Pts',
      perks: [
        'Always FREE 24hr Express Air Delivery',
        '24-Hour Priority Early Access to Limited Drops',
        'Exclusive Member-Only Colorways',
        'Invitations to City Marathon Prep Runs',
        'Dedicated WhatsApp Fitting Support'
      ],
      current: true,
      highlight: true,
      cta: 'Your Current Status'
    },
    {
      name: 'VOLT Elite Tier',
      points: '5,000+ Pts',
      perks: [
        'Custom engraved carbon plate insoles',
        'VIP prototype testing invitations in Bengaluru Lab',
        'Free instant doorstep dual-size try-on',
        'Personalized shoe wear degradation sensors',
        'Direct hotline to footwear design team'
      ],
      current: false,
      cta: '3,750 Pts to Unlock'
    }
  ];

  const handleJoin = () => {
    if (!user) {
      setAuthModalOpen(true);
    } else {
      addToast('success', 'You are already a registered VOLT Pro Member!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16">
      
      {/* Hero Banner */}
      <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-14 border border-zinc-800 text-center space-y-6 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-extrabold uppercase tracking-widest text-[#ccff00]">
          <Zap className="w-4 h-4 fill-[#ccff00]" />
          <span>OFFICIAL ATHLETE PASS</span>
        </div>

        <h1 className="font-impact text-4xl sm:text-6xl lg:text-7xl tracking-wide leading-tight">
          WHERE SPEED MEETS <span className="text-[#ccff00]">PRIVILEGE.</span>
        </h1>

        <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          The VOLT Pass is more than a loyalty program—it is direct access to next-generation running engineering, private release drops, and community track events.
        </p>

        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={handleJoin}
            className="px-8 py-4 bg-[#ccff00] text-black hover:bg-lime-400 text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-lg cursor-pointer"
          >
            {user ? 'View My Member Perks' : 'Join VOLT Pass (Free)'}
          </button>
          <button
            onClick={() => navigateTo('shop', { onSale: true })}
            className="px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 text-xs font-bold uppercase rounded-xl transition-colors cursor-pointer"
          >
            Explore Member Drops
          </button>
        </div>
      </div>

      {/* Tiers Matrix */}
      <div className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className="font-impact text-3xl sm:text-4xl text-zinc-900">MEMBERSHIP TIERS</h2>
          <p className="text-xs text-zinc-500">Every ₹1 spent earns 1 VOLT Point toward higher tier privileges.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-6 ${
                tier.highlight
                  ? 'bg-zinc-950 text-white border-[#ccff00] shadow-2xl relative'
                  : 'bg-white text-zinc-900 border-zinc-200 shadow-xs'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ccff00] text-black text-[10px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider">
                  ACTIVE STATUS
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className={`font-impact text-2xl tracking-wide ${tier.highlight ? 'text-white' : 'text-zinc-900'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-xs font-mono font-bold mt-1 ${tier.highlight ? 'text-[#ccff00]' : 'text-zinc-500'}`}>
                    {tier.points}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-zinc-200/20">
                  {tier.perks.map((p, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs leading-relaxed">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlight ? 'text-[#ccff00]' : 'text-zinc-900'}`} />
                      <span className={tier.highlight ? 'text-zinc-300' : 'text-zinc-600'}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => navigateTo('shop')}
                className={`w-full py-3 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-colors cursor-pointer ${
                  tier.highlight
                    ? 'bg-[#ccff00] text-black hover:bg-lime-400 font-black'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

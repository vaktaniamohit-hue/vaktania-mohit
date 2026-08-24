import React, { useState } from 'react';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  HelpCircle, 
  ChevronDown, 
  Send, 
  RotateCcw, 
  Truck, 
  Ruler, 
  ShieldCheck,
  Check
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ContactView: React.FC = () => {
  const { addToast } = useShop();

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formTopic, setFormTopic] = useState('Order & Shipping Status');
  const [formMessage, setFormMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the 30-Day Free Doorstep Size Exchange work?',
      a: 'If your sneaker size feels slightly too snug or loose, go to your Account or contact us with your Order ID. BlueDart courier will pick up the current pair from your doorstep free of charge, and deliver the exchange size in 24-48 hours.'
    },
    {
      q: 'Are all prices on VOLT inclusive of Indian GST?',
      a: 'Yes, 100% of prices displayed across all categories include 18% GST. There are no hidden fees or extra handling surcharges at checkout.'
    },
    {
      q: 'Which shoe size standard does VOLT use in India?',
      a: 'We use standard UK shoe sizing, which corresponds exactly to Indian footwear sizing. For example, UK 9 is US 10 / EU 43 / 27.0 CM. Refer to our interactive Size Guide on any shoe page for precise foot tracing measurements.'
    },
    {
      q: 'Can I pay via Cash on Delivery (COD) or UPI on arrival?',
      a: 'Yes! We support standard online UPI, Debit/Credit cards, Netbanking, as well as Cash on Delivery with SMS OTP verification at doorstep.'
    },
    {
      q: 'What is the lifespan of the Aerofoam+ midsole?',
      a: 'Our high-rebound PEBA formulation is lab-certified to retain over 95% of its structural bounce and cushioning responsiveness for 800 to 1,000 kilometers of road running.'
    }
  ];

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) {
      addToast('warning', 'Please complete all required fields');
      return;
    }
    addToast(
      'success',
      'Support Ticket Created',
      `Thanks ${formName}! A VOLT footwear specialist will reach out within 2 business hours.`
    );
    setFormName('');
    setFormEmail('');
    setFormMessage('');
  };

  const handleOpenWhatsApp = () => {
    addToast(
      'info',
      'Connecting to VOLT WhatsApp Hotline',
      'Opening simulated WhatsApp support with a live athlete fitting advisor.'
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#ccff00] bg-black px-3 py-1 rounded-full">
          ATHLETE SUPPORT
        </span>
        <h1 className="font-impact text-4xl sm:text-5xl text-zinc-900">
          HOW CAN WE HELP YOU MOVE?
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500">
          Our India-based athlete support team is on standby 7 days a week, 8:00 AM - 10:00 PM IST.
        </p>
      </div>

      {/* 3 Quick Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-black text-[#ccff00] flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="font-impact text-xl text-zinc-900">Instant WhatsApp Chat</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Get instant sizing advice, check stock for upcoming limited drops, or request order status directly.
          </p>
          <button
            onClick={handleOpenWhatsApp}
            className="text-xs font-bold text-black underline flex items-center gap-1 cursor-pointer pt-1"
          >
            <span>Start WhatsApp Chat (+91 98200 VOLT)</span>
          </button>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-black text-[#ccff00] flex items-center justify-center">
            <RotateCcw className="w-5 h-5" />
          </div>
          <h3 className="font-impact text-xl text-zinc-900">Size Exchanges & Returns</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Book a complimentary doorstep pickup. Our courier swaps your shoes with the correct UK size within 48 hours.
          </p>
          <p className="text-xs font-bold text-emerald-700 bg-emerald-50 p-2 rounded-lg">
            Free 30-Day Policy Active
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-black text-[#ccff00] flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <h3 className="font-impact text-xl text-zinc-900">Toll-Free Phone Support</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Speak directly with a certified footwear specialist regarding race marathon selection or store fittings.
          </p>
          <p className="text-xs font-mono font-bold text-zinc-900">
            1800-419-VOLT (8 AM - 10 PM)
          </p>
        </div>
      </div>

      {/* Contact Form vs FAQ Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Contact Form (6 cols) */}
        <div className="lg:col-span-6 bg-zinc-50 p-6 sm:p-8 rounded-3xl border border-zinc-200 space-y-6">
          <div>
            <h3 className="font-impact text-2xl text-zinc-900">SEND US A MESSAGE</h3>
            <p className="text-xs text-zinc-500">We respond to every athlete inquiry in under 2 hours.</p>
          </div>

          <form onSubmit={handleSubmitContact} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="e.g. Sneha Patel"
                className="w-full text-xs px-3.5 py-2.5 bg-white border border-zinc-300 rounded-lg focus:outline-hidden focus:border-black"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                placeholder="sneha@example.com"
                className="w-full text-xs px-3.5 py-2.5 bg-white border border-zinc-300 rounded-lg focus:outline-hidden focus:border-black"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                Subject Topic
              </label>
              <select
                value={formTopic}
                onChange={(e) => setFormTopic(e.target.value)}
                className="w-full text-xs font-bold p-2.5 bg-white border border-zinc-300 rounded-lg"
              >
                <option value="Order & Shipping Status">Order & Shipping Status</option>
                <option value="Free Doorstep Size Exchange">Free Doorstep Size Exchange</option>
                <option value="Footwear Fitting & Sizing Recommendation">Footwear Fitting & Sizing Recommendation</option>
                <option value="Flagship Store Experience Inquiries">Flagship Store Experience Inquiries</option>
                <option value="Corporate & Team Marathon Sponsorship">Corporate & Team Marathon Sponsorship</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                Message / Inquiry *
              </label>
              <textarea
                rows={4}
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                placeholder="Describe your question or order detail..."
                className="w-full text-xs px-3.5 py-2.5 bg-white border border-zinc-300 rounded-lg focus:outline-hidden focus:border-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-black text-white text-xs font-extrabold uppercase tracking-wider rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4 text-[#ccff00]" />
              <span>Submit Athlete Inquiry</span>
            </button>
          </form>
        </div>

        {/* Right: FAQs (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <h3 className="font-impact text-2xl text-zinc-900">FREQUENTLY ASKED QUESTIONS</h3>
            <p className="text-xs text-zinc-500">Quick answers regarding sizing, returns, and delivery in India.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-zinc-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isOpen ? 'rotate-180 text-black' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};

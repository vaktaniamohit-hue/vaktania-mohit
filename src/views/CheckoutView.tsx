import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Lock, 
  Check, 
  ArrowRight, 
  MapPin, 
  ChevronRight, 
  QrCode, 
  Smartphone, 
  Building2, 
  Banknote,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Address } from '../types';

export const CheckoutView: React.FC = () => {
  const { 
    cart, 
    cartSubtotal, 
    cartDiscount, 
    cartShipping, 
    cartTotal, 
    user, 
    createOrder, 
    navigateTo, 
    addToast 
  } = useShop();

  // Step state
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Address Form State
  const defaultAddr = user?.addresses[0];
  const [fullName, setFullName] = useState(defaultAddr?.fullName || user?.name || 'Aryan Varma');
  const [phone, setPhone] = useState(defaultAddr?.phone || user?.phone || '+91 98201 54321');
  const [street, setStreet] = useState(defaultAddr?.street || '402, Sea Green Apartments, Perry Cross Road');
  const [apartment, setApartment] = useState(defaultAddr?.apartment || 'Flat 402');
  const [city, setCity] = useState(defaultAddr?.city || 'Mumbai');
  const [stateName, setStateName] = useState(defaultAddr?.state || 'Maharashtra');
  const [pincode, setPincode] = useState(defaultAddr?.pincode || '400050');
  const [addressType, setAddressType] = useState<'home' | 'office' | 'other'>('home');

  // Delivery & Payment Method
  const [deliverySpeed, setDeliverySpeed] = useState<'express' | 'standard'>('express');
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'Netbanking' | 'COD'>('UPI');
  const [upiVpa, setUpiVpa] = useState('aryan@okhdfcbank');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8842');
  const [cardExpiry, setCardExpiry] = useState('08/29');
  const [cardCvv, setCardCvv] = useState('842');
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');
  const [isProcessing, setIsProcessing] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center space-y-4">
        <h2 className="text-3xl font-black uppercase tracking-tight text-black">NO ITEMS TO CHECKOUT</h2>
        <p className="text-xs text-zinc-600 uppercase font-bold tracking-wider">Your shopping bag is empty.</p>
        <button
          onClick={() => navigateTo('shop')}
          className="px-6 py-3 bg-black text-white text-xs font-black uppercase tracking-widest border border-black cursor-pointer"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  const handlePincodeChange = (val: string) => {
    const clean = val.replace(/\D/g, '').slice(0, 6);
    setPincode(clean);
    if (clean.startsWith('400')) {
      setCity('Mumbai');
      setStateName('Maharashtra');
    } else if (clean.startsWith('110')) {
      setCity('New Delhi');
      setStateName('Delhi NCR');
    } else if (clean.startsWith('560')) {
      setCity('Bengaluru');
      setStateName('Karnataka');
    } else if (clean.startsWith('500')) {
      setCity('Hyderabad');
      setStateName('Telangana');
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !street || !pincode) {
      addToast('warning', 'Please fill in all shipping address fields');
      setCurrentStep(1);
      return;
    }

    setIsProcessing(true);

    const shippingAddress: Address = {
      id: `addr-${Date.now()}`,
      fullName,
      phone,
      street,
      apartment,
      city,
      state: stateName,
      pincode,
      isDefault: true,
      type: addressType
    };

    setTimeout(() => {
      const order = createOrder({
        items: cart,
        subtotal: cartSubtotal,
        discount: cartDiscount,
        shipping: cartShipping,
        tax: 0,
        total: cartTotal,
        shippingAddress,
        paymentMethod: paymentMethod === 'UPI' ? 'UPI (Google Pay / PhonePe)' : paymentMethod === 'Card' ? 'Credit Card (Visa)' : paymentMethod === 'Netbanking' ? `Netbanking (${selectedBank})` : 'Cash on Delivery',
        status: 'Confirmed',
        estimatedDelivery: deliverySpeed === 'express' ? 'Tomorrow by 8:00 PM' : 'In 3 Business Days'
      });

      setIsProcessing(false);
      addToast('success', `Order Placed Successfully! Order #${order.id}`, 'Dispatched via BlueDart Express');
      navigateTo('confirmation');
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Checkout Breadcrumb / Steps Header */}
      <div className="flex items-center justify-between border-b border-black pb-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
            SECURE CHECKOUT
          </h1>
          <p className="text-xs text-zinc-500 mt-0.5 uppercase font-bold tracking-wider">
            256-bit encrypted checkout with India express logistics network.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-black uppercase tracking-wider">
          <span className={`px-3 py-1 border border-black ${currentStep >= 1 ? 'bg-black text-white' : 'bg-white text-black'}`}>
            1. Address
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-black" />
          <span className={`px-3 py-1 border border-black ${currentStep >= 2 ? 'bg-black text-white' : 'bg-white text-black'}`}>
            2. Shipping
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-black" />
          <span className={`px-3 py-1 border border-black ${currentStep >= 3 ? 'bg-black text-white' : 'bg-white text-black'}`}>
            3. Payment
          </span>
        </div>
      </div>

      {/* Main Grid: Checkout Accordion Form vs Sticky Order Cart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT: 3-Step Process */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* STEP 1: SHIPPING ADDRESS */}
          <div className="bg-white border border-black overflow-hidden">
            <div 
              onClick={() => setCurrentStep(1)}
              className="p-5 bg-zinc-50 border-b border-black flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-black text-white text-xs font-black flex items-center justify-center border border-black">
                  1
                </span>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-black">Shipping & Delivery Address</h3>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">{fullName} • {city}, {pincode}</p>
                </div>
              </div>
              <button className="text-xs font-black uppercase tracking-wider text-black underline hover:text-zinc-600">
                {currentStep === 1 ? 'Editing' : 'Change'}
              </button>
            </div>

            {currentStep === 1 && (
              <div className="p-5 sm:p-6 space-y-4 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">
                      Recipient Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Aryan Varma"
                      className="w-full text-xs font-bold px-3.5 py-2.5 bg-white border border-black focus:outline-hidden uppercase"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">
                      Phone Number (for Courier SMS) *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98201 54321"
                      className="w-full text-xs font-bold px-3.5 py-2.5 bg-white border border-black focus:outline-hidden"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">
                    Street Address / Building / Area *
                  </label>
                  <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    placeholder="e.g. 402, Sea Green Apartments, Perry Cross Road"
                    className="w-full text-xs font-bold px-3.5 py-2.5 bg-white border border-black focus:outline-hidden"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">
                      6-Digit PIN Code *
                    </label>
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => handlePincodeChange(e.target.value)}
                      placeholder="e.g. 400050"
                      className="w-full text-xs font-bold px-3.5 py-2.5 bg-white border border-black focus:outline-hidden"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Mumbai"
                      className="w-full text-xs font-bold px-3.5 py-2.5 bg-white border border-black focus:outline-hidden uppercase"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      value={stateName}
                      onChange={(e) => setStateName(e.target.value)}
                      placeholder="e.g. Maharashtra"
                      className="w-full text-xs font-bold px-3.5 py-2.5 bg-white border border-black focus:outline-hidden uppercase"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-2.5 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors cursor-pointer border border-black"
                  >
                    Continue to Delivery Options
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* STEP 2: SHIPPING METHOD */}
          <div className="bg-white border border-black overflow-hidden">
            <div 
              onClick={() => setCurrentStep(2)}
              className="p-5 bg-zinc-50 border-b border-black flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-black text-white text-xs font-black flex items-center justify-center border border-black">
                  2
                </span>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-black">Delivery Speed & Carrier</h3>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">
                    {deliverySpeed === 'express' ? 'BlueDart Express Air (Tomorrow)' : 'Delhivery Surface'}
                  </p>
                </div>
              </div>
              <button className="text-xs font-black uppercase tracking-wider text-black underline hover:text-zinc-600">
                {currentStep === 2 ? 'Editing' : 'Change'}
              </button>
            </div>

            {currentStep === 2 && (
              <div className="p-5 sm:p-6 space-y-3 animate-in fade-in duration-200">
                <label className={`p-4 border flex items-start justify-between cursor-pointer transition-all ${
                  deliverySpeed === 'express' ? 'border-black bg-zinc-50' : 'border-black/30'
                }`}>
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="delivery"
                      checked={deliverySpeed === 'express'}
                      onChange={() => setDeliverySpeed('express')}
                      className="mt-1 accent-black cursor-pointer"
                    />
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-black">VOLT Express Air Courier (BlueDart)</p>
                      <p className="text-[11px] text-zinc-600 font-medium">Delivered Tomorrow by 8:00 PM with live GPS tracking.</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-black uppercase tracking-wider">FREE</span>
                </label>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-2.5 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors cursor-pointer border border-black"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* STEP 3: PAYMENT METHOD */}
          <div className="bg-white border border-black overflow-hidden">
            <div 
              onClick={() => setCurrentStep(3)}
              className="p-5 bg-zinc-50 border-b border-black flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-black text-white text-xs font-black flex items-center justify-center border border-black">
                  3
                </span>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-black">Payment Option</h3>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">{paymentMethod} Selected</p>
                </div>
              </div>
            </div>

            {currentStep === 3 && (
              <div className="p-5 sm:p-6 space-y-5 animate-in fade-in duration-200">
                
                {/* Method Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'UPI' as const, label: 'Instant UPI', icon: Smartphone },
                    { id: 'Card' as const, label: 'Card / EMI', icon: CreditCard },
                    { id: 'Netbanking' as const, label: 'Netbanking', icon: Building2 },
                    { id: 'COD' as const, label: 'Cash on Delivery', icon: Banknote }
                  ].map((m) => {
                    const Icon = m.icon;
                    const isSelected = paymentMethod === m.id;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setPaymentMethod(m.id)}
                        className={`p-3 border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                          isSelected
                            ? 'border-black bg-black text-white font-black'
                            : 'border-black bg-white text-black hover:bg-zinc-100 font-bold'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-[11px] uppercase tracking-wider">{m.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* UPI Sub-Panel */}
                {paymentMethod === 'UPI' && (
                  <div className="p-4 bg-zinc-50 border border-black space-y-3">
                    <p className="text-xs font-black uppercase tracking-wider text-black">Enter UPI ID / VPA</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={upiVpa}
                        onChange={(e) => setUpiVpa(e.target.value)}
                        placeholder="yourname@okhdfcbank"
                        className="flex-1 text-xs font-bold px-3.5 py-2.5 bg-white border border-black focus:outline-hidden"
                      />
                      <button
                        type="button"
                        onClick={() => addToast('info', 'UPI Verification Request', 'Approve the simulated notification in your UPI app.')}
                        className="px-4 py-2.5 bg-black text-white text-xs font-black uppercase tracking-wider cursor-pointer hover:bg-zinc-800 border border-black"
                      >
                        Verify VPA
                      </button>
                    </div>
                    <p className="text-[11px] text-zinc-500 font-medium">Supports Google Pay, PhonePe, Paytm, CRED UPI, BHIM.</p>
                  </div>
                )}

                {/* Card Sub-Panel */}
                {paymentMethod === 'Card' && (
                  <div className="p-4 bg-zinc-50 border border-black space-y-3">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="4532 0000 0000 0000"
                        className="w-full text-xs font-bold px-3.5 py-2.5 bg-white border border-black focus:outline-hidden"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">
                          Expiry (MM/YY)
                        </label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="08/29"
                          className="w-full text-xs font-bold px-3.5 py-2.5 bg-white border border-black focus:outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">
                          CVV
                        </label>
                        <input
                          type="password"
                          maxLength={4}
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          placeholder="•••"
                          className="w-full text-xs font-bold px-3.5 py-2.5 bg-white border border-black focus:outline-hidden"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Netbanking Sub-Panel */}
                {paymentMethod === 'Netbanking' && (
                  <div className="p-4 bg-zinc-50 border border-black space-y-3">
                    <p className="text-xs font-black uppercase tracking-wider text-black">Select Bank</p>
                    <select
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="w-full text-xs font-bold p-2.5 bg-white border border-black focus:outline-hidden uppercase"
                    >
                      <option value="HDFC Bank">HDFC Bank</option>
                      <option value="ICICI Bank">ICICI Bank</option>
                      <option value="State Bank of India">State Bank of India (SBI)</option>
                      <option value="Axis Bank">Axis Bank</option>
                      <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                    </select>
                  </div>
                )}

                {/* COD Sub-Panel */}
                {paymentMethod === 'COD' && (
                  <div className="p-4 bg-zinc-50 border border-black text-xs text-black space-y-1">
                    <p className="font-black uppercase tracking-wider">Cash on Delivery Policy</p>
                    <p className="text-zinc-600 font-medium">Pay cash or scan courier QR via UPI upon delivery. Please ensure exact change is available.</p>
                  </div>
                )}

                {/* Place Order CTA */}
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handlePlaceOrder}
                  className="w-full py-4 bg-black hover:bg-zinc-800 disabled:bg-zinc-400 text-white text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer border border-black"
                >
                  <Lock className="w-4 h-4 text-[#ccff00]" />
                  <span>
                    {isProcessing ? 'Authorizing Payment...' : `Place Order (₹${cartTotal.toLocaleString('en-IN')})`}
                  </span>
                </button>

              </div>
            )}
          </div>

        </div>

        {/* RIGHT: Order Review Rail */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-black space-y-6">
          <h2 className="text-2xl font-black uppercase tracking-tight text-black">
            ORDER DETAILS ({cart.length})
          </h2>

          <div className="divide-y divide-black max-h-64 overflow-y-auto pr-1 space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="pt-3 first:pt-0 flex gap-3 items-center">
                <div className="w-16 h-16 bg-[#f8f8f8] overflow-hidden shrink-0 border border-black flex items-center justify-center p-1">
                  <img
                    src={item.selectedColor.image || item.product.images.main}
                    alt={item.product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-black uppercase tracking-wider text-black truncate">{item.product.name}</h4>
                  <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">
                    UK {item.selectedSize} • {item.selectedColor.name} (Qty: {item.quantity})
                  </p>
                  <p className="text-xs font-black italic text-black">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-xs text-black border-t border-black pt-4">
            <div className="flex justify-between">
              <span className="uppercase text-[10px] font-bold tracking-wider text-zinc-500">Subtotal</span>
              <span className="font-bold">₹{cartSubtotal.toLocaleString('en-IN')}</span>
            </div>
            {cartDiscount > 0 && (
              <div className="flex justify-between text-red-600 font-bold">
                <span className="uppercase text-[10px] tracking-wider">Discount</span>
                <span>-₹{cartDiscount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="uppercase text-[10px] font-bold tracking-wider text-zinc-500">Express Delivery</span>
              <span className="font-black uppercase tracking-wider">FREE</span>
            </div>
            <div className="flex justify-between text-base font-black text-black pt-2 border-t border-black uppercase tracking-tight">
              <span>Total Payable</span>
              <span className="text-xl italic">₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-zinc-600 pt-2 font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span>Simulated checkout environment. No real funds charged.</span>
          </div>

        </div>

      </div>

    </div>
  );
};

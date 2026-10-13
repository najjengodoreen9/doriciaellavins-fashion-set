import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, Banknote, Building2, Sparkles, Truck } from 'lucide-react';
import { CartItem } from '../types';
import { CrownIcon } from './GoldOrnament';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderComplete,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'details' | 'confirmation'>('details');
  const [formData, setFormData] = useState({
    fullName: 'Lady Genevieve Laurent',
    email: 'genevieve.laurent@luxury.com',
    phone: '+1 (555) 789-2345',
    address: '450 Park Avenue, Penthouse Suite',
    city: 'New York',
    postalCode: '10022',
    country: 'United States',
    paymentMethod: 'card', // 'card' | 'wire' | 'cod'
    notes: 'Please ensure gold bullion monogram embroidery matches the crest on sleeve cuffs.',
  });
  const [orderId, setOrderId] = useState('');

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discount = Math.round(subtotal * 0.15); // default VIP code courtesy
  const shipping = 0; // complimentary
  const total = subtotal - discount;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `DE-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(generatedId);
    setStep('confirmation');
    onOrderComplete();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-[#12100C] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="p-6 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#17140E]">
          <div className="flex items-center gap-2">
            <CrownIcon size={20} />
            <h2 className="font-cinzel text-lg font-bold text-white uppercase tracking-wider">
              {step === 'details' ? 'Royal Atelier Checkout' : 'Order Successfully Commissioned'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'details' ? (
          <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-6">
            {/* Delivery & Client Information */}
            <div>
              <h3 className="font-cinzel text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3 flex items-center gap-2">
                <span>1. Client & Delivery Destination</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Full Name / Title
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Direct Phone / Concierge Contact
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Street Address / Residence
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    City & Country
                  </label>
                  <input
                    type="text"
                    required
                    value={`${formData.city}, ${formData.country}`}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Postal / Zip Code
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>
            </div>

            {/* Bespoke Measurement & Fitting Notes */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                Custom Measurements, Monogramming Initials, or Event Date:
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                placeholder="Include chest, waist, inseam measurements, child age, or specific gala date..."
              />
            </div>

            {/* Payment Method Selector */}
            <div>
              <h3 className="font-cinzel text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
                2. Method of Settlement
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label
                  className={`p-3.5 rounded-xl border cursor-pointer flex flex-col gap-2 transition-all ${
                    formData.paymentMethod === 'card'
                      ? 'border-[#D4AF37] bg-[#211A0F] text-white shadow-md'
                      : 'border-neutral-800 bg-[#16130E] text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between">
                    <CreditCard className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-[10px] uppercase font-cinzel text-[#D4AF37]">Secured</span>
                  </div>
                  <span className="text-xs font-semibold">Credit Card / Black Card</span>
                  <span className="text-[10px] text-neutral-400">Visa, Mastercard, Amex Centurion</span>
                </label>

                <label
                  className={`p-3.5 rounded-xl border cursor-pointer flex flex-col gap-2 transition-all ${
                    formData.paymentMethod === 'wire'
                      ? 'border-[#D4AF37] bg-[#211A0F] text-white shadow-md'
                      : 'border-neutral-800 bg-[#16130E] text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="wire"
                    checked={formData.paymentMethod === 'wire'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'wire' })}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between">
                    <Building2 className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-[10px] uppercase font-cinzel text-[#D4AF37]">Private</span>
                  </div>
                  <span className="text-xs font-semibold">Private Bank Wire</span>
                  <span className="text-[10px] text-neutral-400">Swiss & Global Bank Transfer</span>
                </label>

                <label
                  className={`p-3.5 rounded-xl border cursor-pointer flex flex-col gap-2 transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'border-[#D4AF37] bg-[#211A0F] text-white shadow-md'
                      : 'border-neutral-800 bg-[#16130E] text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between">
                    <Banknote className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-[10px] uppercase font-cinzel text-[#D4AF37]">White Glove</span>
                  </div>
                  <span className="text-xs font-semibold">Payment on Courier Delivery</span>
                  <span className="text-[10px] text-neutral-400">Inspect & settle upon hand-off</span>
                </label>
              </div>
            </div>

            {/* Order Summary & Confirm Button */}
            <div className="p-4 rounded-xl bg-[#17130E] border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-300 space-y-0.5">
                <div>
                  Items Total ({items.length}): <span className="tabular-nums font-semibold text-white">${subtotal.toLocaleString()}</span>
                </div>
                <div className="text-emerald-400">
                  VIP Privilege (-15%): <span className="tabular-nums font-semibold">-${discount.toLocaleString()}</span>
                </div>
                <div className="text-sm font-bold font-cinzel text-[#D4AF37]">
                  Final Settlement: <span className="text-white text-base">${total.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#DFBA51] to-[#AA7C11] text-black font-cinzel text-xs font-bold tracking-[0.2em] uppercase rounded-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer whitespace-nowrap"
              >
                Place Royal Commission
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Step */
          <div className="p-8 text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#241D10] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-cinzel text-[#D4AF37] tracking-[0.25em] uppercase font-bold">
                Commission Order #{orderId} Confirmed
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white uppercase mt-2">
                Thank You, {formData.fullName}
              </h3>
              <p className="font-sans-body text-neutral-300 text-sm font-light mt-3 max-w-lg mx-auto leading-relaxed">
                Your royal garments have entered our private atelier. A master couturier has been assigned to oversee fabric cutting, bullion embroidery, and hand-finishing.
              </p>
            </div>

            {/* Courier & Fitting Details */}
            <div className="max-w-md mx-auto p-4 rounded-xl bg-[#18140D] border border-[#D4AF37]/30 text-xs text-left space-y-2">
              <div className="flex items-center gap-2 text-[#D4AF37] font-cinzel font-semibold uppercase">
                <Truck className="w-4 h-4" />
                <span>White-Glove Courier Dispatch</span>
              </div>
              <p className="text-neutral-300 font-light">
                Estimated Delivery: <strong className="text-white">3-5 Business Days</strong> via Insured Armored Express.
              </p>
              <p className="text-neutral-400 text-[11px]">
                A digital receipt and certificate of garment authenticity have been sent to <span className="text-[#D4AF37]">{formData.email}</span>.
              </p>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-cinzel text-xs font-bold uppercase tracking-wider rounded-lg cursor-pointer"
              >
                Return to Boutique
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

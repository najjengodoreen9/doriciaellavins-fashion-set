import React, { useState } from 'react';
import { X, Calendar, Mail, Phone, MapPin, CheckCircle, Clock } from 'lucide-react';
import { CrownIcon } from './GoldOrnament';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Family Occasion Fitting',
    eventDate: '2026-11-20',
    preferredTime: 'Afternoon (2:00 PM)',
    location: 'London Mayfair Flagship Atelier',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#12100C] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="p-6 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#17140E]">
          <div className="flex items-center gap-2">
            <CrownIcon size={20} />
            <h2 className="font-cinzel text-lg font-bold text-white uppercase tracking-wider">
              Reserve Private Atelier Fitting
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#241D10] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-cinzel text-xl font-bold text-white uppercase">
              Fitting Consultation Confirmed
            </h3>
            <p className="font-sans-body text-xs text-neutral-300 font-light max-w-md mx-auto">
              Our Head Couturier will contact you within 4 hours to verify fabric swatches and prepare complimentary champagne service for your arrival.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              Experience private fitting rooms and one-on-one styling with master artisans for bespoke wedding ceremonies, birthday milestone gowns, or whole-family gala attire.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lady Victoria Montgomery"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. victoria@domain.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Phone / WhatsApp</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +44 20 7946 0912"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Occasion / Service</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                >
                  <option value="Family Occasion Fitting">Family Occasion Coordination</option>
                  <option value="Bridal & Groom Bespoke">Royal Wedding Commission</option>
                  <option value="Children Birthday Heirloom">Kids Milestone Birthday Outfit</option>
                  <option value="Red Carpet Gala Couture">Women Haute Couture Evening Gown</option>
                  <option value="Gentlemen Tuxedo Cut">Gentlemen Tuxedo / Agbada Bespoke</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Target Event Date</label>
                <input
                  type="date"
                  value={form.eventDate}
                  onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                  className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Preferred Location</label>
                <select
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                >
                  <option value="London Mayfair Flagship Atelier">London Mayfair Flagship Atelier</option>
                  <option value="Paris Place Vendôme Salon">Paris Place Vendôme Salon</option>
                  <option value="New York Fifth Avenue Suite">New York Fifth Avenue Suite</option>
                  <option value="Dubai Downtown Private Suite">Dubai Downtown Private Suite</option>
                  <option value="Virtual Live HD Fitting (Worldwide)">Virtual Live HD Video Fitting (Worldwide)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-neutral-400 mb-1 text-xs">Specific Design or Color Requests</label>
              <textarea
                rows={2}
                placeholder="Mention desired gold thread embroidery density, silk colors, or child measurements..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Direct Concierge Info */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-[11px] text-neutral-400 border-t border-neutral-800">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Concierge: +1 (800) 942-DORICIA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>atelier@doriciaellavins.com</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>24/7 Sovereign Client Care</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#DFBA51] to-[#AA7C11] text-black font-cinzel text-xs font-bold uppercase tracking-[0.2em] rounded-lg cursor-pointer hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
            >
              Confirm Fitting Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

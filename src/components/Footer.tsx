import React, { useState } from 'react';
import { Logo } from './Logo';
import { CrownIcon, GoldDivider } from './GoldOrnament';
import { Instagram, Youtube, Facebook, Send, Check, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenFitting: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenFitting }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#080705] border-t border-[#D4AF37]/30 text-neutral-300 relative overflow-hidden">
      {/* Decorative Gold Filigree Top Border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70" />

      {/* Newsletter VIP Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#D4AF37]/15">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs text-[#D4AF37] font-cinzel tracking-[0.25em] uppercase">
            <CrownIcon size={16} />
            <span>Join the Royal Circle</span>
          </div>

          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
            Subscribe to Private Seasonal Lookbooks
          </h3>

          <p className="font-sans-body text-neutral-400 text-xs sm:text-sm font-light max-w-lg mx-auto">
            Receive private invitations to confidential couture previews, complimentary monogramming privileges, and 15% off your first commission with code <strong className="text-[#D4AF37]">ROYAL15</strong>.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2 pt-2">
            <input
              type="email"
              required
              placeholder="Enter your esteemed email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-[#14110A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-cinzel text-xs font-bold uppercase tracking-wider rounded-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Join</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {subscribed && (
            <div className="text-xs text-emerald-400 flex items-center justify-center gap-1.5 font-medium pt-2">
              <Check className="w-4 h-4" />
              <span>Welcome to the Sovereign Circle. Your VIP invitation has been dispatched.</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Footer Links & Brand Architecture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column (takes 2 spans on large) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <div className="font-script text-2xl text-[#D4AF37] pt-2">
              Dress Well · Live Classy · Be You
            </div>
            <p className="font-sans-body text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              The premier luxury house curating beautifully decorated fashion sets for kids, women, and gentlemen. Hand-embroidered in 24K gold zari bullion, English velvets, and French lace.
            </p>

            <div className="flex items-center gap-3 pt-2 text-[#D4AF37]">
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#pinterest"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-colors font-bold text-xs"
                title="Pinterest"
              >
                P
              </a>
              <a
                href="#tiktok"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-colors font-bold text-xs"
                title="TikTok"
              >
                TT
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em]">
              The Collections
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-light">
              <li>
                <button
                  onClick={() => onNavigateSection('categories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Kids Royal Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('categories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Women's Haute Couture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('categories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Gentlemen's Tailored Suits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('occasions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Royal Wedding Gala Sets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('occasions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Traditional Regalia & Agbada
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('new-arrivals')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  2026 Season New Arrivals
                </button>
              </li>
            </ul>
          </div>

          {/* Atelier Services */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em]">
              Bespoke Services
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-light">
              <li>
                <button onClick={onOpenFitting} className="hover:text-white transition-colors cursor-pointer">
                  Private Fitting Appointments
                </button>
              </li>
              <li>
                <button onClick={onOpenFitting} className="hover:text-white transition-colors cursor-pointer">
                  Custom Bullion Monogramming
                </button>
              </li>
              <li>
                <button onClick={onOpenFitting} className="hover:text-white transition-colors cursor-pointer">
                  Family Wardrobe Harmonization
                </button>
              </li>
              <li>
                <button onClick={onOpenFitting} className="hover:text-white transition-colors cursor-pointer">
                  Bridal & Groom Commissions
                </button>
              </li>
              <li>
                <button onClick={onOpenFitting} className="hover:text-white transition-colors cursor-pointer">
                  Heirloom Fabric Restoration
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Global Salons */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em]">
              Global Ateliers
            </h4>
            <div className="space-y-2 text-xs text-neutral-400 font-light">
              <div>
                <strong className="text-white block font-medium">Mayfair Salon, London</strong>
                <span>14 Old Bond Street, W1S 4PP</span>
              </div>
              <div>
                <strong className="text-white block font-medium">Fifth Avenue, New York</strong>
                <span>720 Fifth Avenue, NY 10019</span>
              </div>
              <div className="pt-2 text-neutral-300">
                <span>Direct Concierge: </span>
                <span className="text-[#D4AF37] font-semibold">+1 (800) 942-DORICIA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Guarantee Strip */}
        <div className="mt-14 pt-8 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <CrownIcon size={14} />
            <span>© {new Date().getFullYear()} DORICIAELLAVINS FASHION SET. All Sovereign Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-neutral-400">Complimentary Worldwide Insured Delivery</span>
            <span>·</span>
            <span className="text-neutral-400">Pure Gold Bullion Certified</span>
            <span>·</span>
            <span className="text-[#D4AF37]">Dress Well · Live Classy · Be You</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

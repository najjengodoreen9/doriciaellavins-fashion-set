import React from 'react';
import { Gift, Sparkles, Tag, ArrowRight } from 'lucide-react';
import { CrownIcon } from './GoldOrnament';

export const SpecialOffers: React.FC<{ onExploreShop: () => void; onBookFitting: () => void }> = ({
  onExploreShop,
  onBookFitting,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#141008] via-[#1D170D] to-[#141008] border-y border-[#D4AF37]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: VIP 15% Welcome Privilege */}
          <div className="p-8 rounded-2xl bg-[#0F0D09]/90 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#282010] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center mb-5">
                <Tag className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-cinzel text-[#D4AF37] tracking-[0.25em] uppercase font-bold">
                Royal Society Welcome
              </span>
              <h3 className="font-cinzel text-xl font-bold text-white uppercase mt-1">
                15% Inaugural Privilege
              </h3>
              <p className="font-sans-body text-xs sm:text-sm text-neutral-300 font-light mt-2 leading-relaxed">
                Enjoy 15% courtesy savings across all ready-to-wear couture collections. Apply invitation code <strong className="text-[#D4AF37] font-semibold">ROYAL15</strong> during checkout.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D4AF37]/15">
              <button
                onClick={onExploreShop}
                className="text-xs font-cinzel tracking-wider text-[#D4AF37] hover:text-white uppercase font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>Redeem in Boutique</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Complimentary Monogramming */}
          <div className="p-8 rounded-2xl bg-[#0F0D09]/90 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#282010] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center mb-5">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-cinzel text-[#D4AF37] tracking-[0.25em] uppercase font-bold">
                Bespoke Personalization
              </span>
              <h3 className="font-cinzel text-xl font-bold text-white uppercase mt-1">
                Gold Monogramming
              </h3>
              <p className="font-sans-body text-xs sm:text-sm text-neutral-300 font-light mt-2 leading-relaxed">
                Complimentary 24K gold thread crest or initials embroidered onto cuffs, suit linings, or gown ribbons for all orders exceeding $500.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D4AF37]/15">
              <button
                onClick={onBookFitting}
                className="text-xs font-cinzel tracking-wider text-[#D4AF37] hover:text-white uppercase font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>Request Custom Initials</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: White Glove Family Fitting */}
          <div className="p-8 rounded-2xl bg-[#0F0D09]/90 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#282010] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center mb-5">
                <Gift className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-cinzel text-[#D4AF37] tracking-[0.25em] uppercase font-bold">
                Private Concierge
              </span>
              <h3 className="font-cinzel text-xl font-bold text-white uppercase mt-1">
                Virtual & In-Home Fittings
              </h3>
              <p className="font-sans-body text-xs sm:text-sm text-neutral-300 font-light mt-2 leading-relaxed">
                Book a confidential styling appointment with our Senior Couturier for whole-family gala attire, wedding parties, or birthday milestones.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D4AF37]/15">
              <button
                onClick={onBookFitting}
                className="text-xs font-cinzel tracking-wider text-[#D4AF37] hover:text-white uppercase font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>Schedule Private Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

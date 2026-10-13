import React, { useState } from 'react';
import { Sparkles, Calendar, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { CrownIcon } from './GoldOrnament';
import { Product, Occasion } from '../types';

interface OccasionsSectionProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onBookFitting: () => void;
}

export const OccasionsSection: React.FC<OccasionsSectionProps> = ({
  products,
  onQuickView,
  onBookFitting,
}) => {
  const [activeOccasion, setActiveOccasion] = useState<Occasion>('wedding');

  const occasionTabs: { id: Occasion; label: string; description: string }[] = [
    {
      id: 'wedding',
      label: 'Wedding Wear',
      description: 'Grand Royal Bride, Groom & Entourage coordination with pure gold threadwork.',
    },
    {
      id: 'birthday',
      label: 'Milestone Birthdays',
      description: 'Fairytale 1st, sweet 16th, 21st, and golden jubilees for children and adults.',
    },
    {
      id: 'gala',
      label: 'Galas & Party Dresses',
      description: 'Floor-sweeping corseted gowns and velvet dinner jackets for red carpet soirees.',
    },
    {
      id: 'suits',
      label: 'Bespoke Suits',
      description: 'Savile Row inspired English wool tuxedos with hand-carved gold buttons.',
    },
    {
      id: 'traditional',
      label: 'Traditional Royal Regalia',
      description: 'Opulent Agbada robes, Sherwanis, and Kaftans honoring majestic cultural heritage.',
    },
  ];

  const filteredOccasionProducts = products.filter(
    (p) => p.occasion === activeOccasion || (activeOccasion === 'suits' && p.category === 'gentlemen')
  );

  return (
    <section id="occasions" className="py-20 sm:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#120F09] to-[#0A0A0A] border-t border-[#D4AF37]/20 relative overflow-hidden">
      {/* Background Gold Ambient */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-[#D4AF37]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs text-[#D4AF37] font-cinzel tracking-[0.25em] uppercase mb-2">
            <CrownIcon size={16} />
            <span>Grand Celebrations & Ceremonies</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white uppercase tracking-wider">
            Special Occasion Collection
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-[#D4AF37] mt-2">
            Every Milestone Deserves Royal Splendor
          </p>
          <p className="font-sans-body text-neutral-300 text-sm mt-3 font-light">
            Whether walking the aisle, celebrating a prince or princess’s birthday, or attending an imperial state banquet, our bespoke artisans tailor every stitch to perfection.
          </p>
        </div>

        {/* Feature Banner: Opulent Wedding Gala Photography */}
        <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image Left */}
            <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[480px]">
              <img
                src="/src/assets/images/occasion_wedding_gala_1791892914630.jpg"
                alt="DORICIAELLAVINS Royal Wedding and Gala Occasion Wear"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-transparent to-transparent" />
            </div>

            {/* Banner Text Right */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 bg-[#12100B] flex flex-col justify-center">
              <span className="text-[11px] font-cinzel text-[#D4AF37] tracking-[0.25em] uppercase font-semibold">
                Royal Ceremonial Commissions
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide mt-2">
                Bespoke Bridal, Gala & Sovereign Sets
              </h3>
              <p className="font-sans-body text-xs sm:text-sm text-neutral-300 font-light mt-3 leading-relaxed">
                Experience unparalleled coordination. Our bespoke atelier pairs bride and groom, parents and children in harmonized luxury palettes—using identical gold zari thread batches and dyed-to-match silks.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Complimentary Private Atelier Fitting Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Family Color Harmony Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Heirloom Keepsake Wooden Chest Presentation</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex flex-wrap items-center gap-4">
                <button
                  onClick={onBookFitting}
                  className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-cinzel text-xs font-bold tracking-wider uppercase rounded-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Occasion Fitting</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Occasion Selection Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {occasionTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveOccasion(tab.id)}
              className={`px-5 py-3 rounded-xl border text-xs font-cinzel tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0 ${
                activeOccasion === tab.id
                  ? 'bg-[#1E190E] border-[#D4AF37] text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                  : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${activeOccasion === tab.id ? 'text-[#D4AF37]' : 'text-neutral-500'}`} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Curated Occasion Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOccasionProducts.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => onQuickView(item)}
              className="group rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-[#121212] hover:border-[#D4AF37] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#0A0A0A]/90 border border-[#D4AF37]/30 px-2.5 py-1 text-[10px] font-cinzel text-[#D4AF37] uppercase tracking-wider">
                  {item.badge || item.occasion}
                </div>
              </div>

              <div className="p-5 bg-gradient-to-b from-[#141414] to-[#0A0A0A] flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-cinzel text-[#D4AF37] tracking-[0.2em] uppercase">
                    {item.category} Occasion Wear
                  </span>
                  <h4 className="font-cinzel text-base font-bold text-white uppercase tracking-wide mt-1 group-hover:text-[#D4AF37] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between">
                  <span className="font-cinzel text-base font-bold text-white tabular-nums">
                    ${item.price.toLocaleString()}
                  </span>
                  <span className="text-xs font-cinzel text-[#D4AF37] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Gem, Scissors, Truck } from 'lucide-react';
import { CrownIcon } from './GoldOrnament';

interface HeroProps {
  onExploreClick: () => void;
  onBookFitting: () => void;
  onOccasionClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onBookFitting, onOccasionClick }) => {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#0A0A0A] pt-4 pb-16 lg:pb-24">
      {/* Background ambient gold glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D4AF37]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Showcase Container */}
        <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-gradient-to-b from-[#14120D] to-[#0A0A0A] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {/* Subtle gold filigree corner borders */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/60 pointer-events-none z-20" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/60 pointer-events-none z-20" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/60 pointer-events-none z-20" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/60 pointer-events-none z-20" />

          {/* Grid Layout: Editorial Storytelling Left + High-Fidelity Family Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[580px]">
            {/* Left Content Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative z-10">
              {/* Crown & Royal Kicker */}
              <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-cinzel tracking-[0.25em] uppercase mb-4">
                <CrownIcon size={18} className="text-[#D4AF37]" />
                <span>Haute Couture & Heritage Atelier</span>
                <span className="inline-block w-6 h-[1px] bg-[#D4AF37]" />
              </div>

              {/* Welcome Message */}
              <h2 className="text-sm sm:text-base font-cinzel tracking-[0.2em] uppercase text-[#E5C378] font-semibold mb-2">
                Welcome to
              </h2>

              {/* Brand Title */}
              <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-white leading-tight uppercase">
                <span className="text-gold-gradient block">DORICIAELLAVINS</span>
                <span className="text-neutral-100 text-2xl sm:text-3xl lg:text-4xl tracking-widest block font-light mt-1">
                  FASHION SET
                </span>
              </h1>

              {/* Brand Slogan */}
              <div className="my-5 py-3 border-y border-[#D4AF37]/20 flex flex-col sm:flex-row items-baseline gap-2">
                <span className="font-script text-2xl sm:text-3xl text-[#D4AF37] tracking-wide">
                  Dress Well · Live Classy · Be You
                </span>
              </div>

              {/* Editorial Description */}
              <p className="font-sans-body text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl font-light mb-8">
                Curating bespoke magnificence for every generation. Discover opulent embroidered outfits, royal velvet blazers, and handcrafted couture meticulously tailored for cherished kids, empowered women, and distinguished gentlemen.
              </p>

              {/* Primary Call to Action Cluster */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onExploreClick}
                  className="px-7 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#DFBA51] to-[#AA7C11] text-black font-cinzel text-xs font-bold tracking-[0.18em] uppercase rounded-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-2 group whitespace-nowrap"
                >
                  <span>Explore Collections</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onBookFitting}
                  className="px-6 py-3.5 bg-[#14120D] border border-[#D4AF37]/60 hover:border-[#D4AF37] text-[#FAF8F5] font-cinzel text-xs font-semibold tracking-[0.16em] uppercase rounded-lg hover:bg-[#1E1A11] transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap"
                >
                  <Scissors className="w-4 h-4 text-[#D4AF37]" />
                  <span>Book Private Fitting</span>
                </button>

                <button
                  onClick={onOccasionClick}
                  className="text-xs font-cinzel tracking-widest text-[#D4AF37] hover:text-white transition-colors py-2 px-1 cursor-pointer underline underline-offset-4 decoration-[#D4AF37]/50"
                >
                  Royal Occasions →
                </button>
              </div>

              {/* Unboxed Metadata Trust Strips */}
              <div className="mt-10 pt-6 border-t border-[#D4AF37]/15 flex items-center gap-4 sm:gap-6 text-xs text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Hand-Dyed Silks</span>
                </div>
                <span className="text-[#D4AF37]/40">·</span>
                <div className="flex items-center gap-1.5">
                  <Gem className="w-4 h-4 text-[#D4AF37]" />
                  <span>24K Zari Embroidery</span>
                </div>
                <span className="text-[#D4AF37]/40">·</span>
                <div className="flex items-center gap-1.5">
                  <span>Generational Harmony</span>
                </div>
              </div>
            </div>

            {/* Right Photography Column - Family Wearing Fashionable Outfits */}
            <div className="lg:col-span-6 relative overflow-hidden min-h-[380px] lg:min-h-full">
              <img
                src="/src/assets/images/hero_family_fashion_1791892912869.jpg"
                alt="DORICIAELLAVINS FASHION SET - Royal family wearing bespoke luxury fashion outfits"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Gradient scrim for rich edge blending */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#14120D] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70 lg:hidden" />

              {/* Floating Luxury Tag */}
              <div className="absolute bottom-6 right-6 bg-[#0A0A0A]/85 backdrop-blur-md border border-[#D4AF37]/40 p-4 rounded-xl max-w-xs shadow-xl hidden sm:block">
                <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-cinzel font-semibold uppercase tracking-wider mb-1">
                  <CrownIcon size={14} />
                  <span>The Grand Heritage Collection</span>
                </div>
                <p className="text-xs text-neutral-300 font-light">
                  Coordinated royal bespoke sets for parents and children in silk velvet, brocade, and tailored wool.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence below Hero (Full-width row) */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-xl bg-[#12100B] border border-[#D4AF37]/20 flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-[#1F190E] text-[#D4AF37] shrink-0 border border-[#D4AF37]/30">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#FAF8F5]">
                Bespoke Tailoring
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Hand-measured to your family's exact contours by master artisans.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#12100B] border border-[#D4AF37]/20 flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-[#1F190E] text-[#D4AF37] shrink-0 border border-[#D4AF37]/30">
              <Gem className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#FAF8F5]">
                Royal Embellishments
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Authentic metallic bullion thread, Swarovski crystals, and fine lace.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#12100B] border border-[#D4AF37]/20 flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-[#1F190E] text-[#D4AF37] shrink-0 border border-[#D4AF37]/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#FAF8F5]">
                Generational Quality
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Heirloom construction created to be cherished and passed forward.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#12100B] border border-[#D4AF37]/20 flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-[#1F190E] text-[#D4AF37] shrink-0 border border-[#D4AF37]/30">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#FAF8F5]">
                Royal Express Delivery
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Insured white-glove packaging shipped across the globe in luxury chests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

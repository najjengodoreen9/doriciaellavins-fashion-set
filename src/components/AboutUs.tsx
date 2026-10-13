import React from 'react';
import { CrownIcon, GoldDivider } from './GoldOrnament';
import { Award, Compass, Heart, Sparkles } from 'lucide-react';

export const AboutUs: React.FC<{ onBookFitting: () => void }> = ({ onBookFitting }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0D0B08] border-t border-[#D4AF37]/20 relative">
      {/* Background radial gold glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs text-[#D4AF37] font-cinzel tracking-[0.25em] uppercase mb-2">
            <CrownIcon size={16} />
            <span>The Heritage of DORICIAELLAVINS</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white uppercase tracking-wider">
            Fashion for Every Generation
          </h2>
          <div className="mt-2 font-script text-2xl sm:text-3xl text-[#D4AF37]">
            Dress Well • Live Classy • Be You
          </div>
          <GoldDivider />
          <p className="font-sans-body text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
            Founded on the noble belief that true luxury bridges generations, <strong className="text-[#D4AF37] font-semibold">DORICIAELLAVINS FASHION SET</strong> was born to create timeless, majestically decorated garments that celebrate human dignity, family unity, and extraordinary self-expression.
          </p>
        </div>

        {/* 2-Column Split: Editorial Story + Brand Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Gold Borders */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl p-2 bg-[#121212]">
              <img
                src="/src/assets/images/hero_family_fashion_1791892912869.jpg"
                alt="DORICIAELLAVINS Family Heritage"
                className="w-full h-[460px] object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-2 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl" />

              {/* Inset Quote Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0A0A0A]/90 backdrop-blur-md border border-[#D4AF37]/40 rounded-lg">
                <p className="font-script text-xl text-[#D4AF37] leading-tight">
                  "When a family dresses in harmony, royalty is not an inheritance — it is an aura."
                </p>
                <span className="text-[10px] font-cinzel uppercase tracking-widest text-neutral-400 mt-2 block">
                  — The Creative Directors of DORICIAELLAVINS
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Pillars of Craft */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-xl bg-[#14120D] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#241D0E] text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white uppercase tracking-wide">
                    Artisanal Handcraft & 24K Zari Embroidery
                  </h3>
                  <p className="font-sans-body text-xs sm:text-sm text-neutral-300 font-light mt-1.5 leading-relaxed">
                    Every motif, crown emblem, and floral flourish is brought to life using centuries-old bullion embroidery techniques. We weave real metallic threads with Venetian velvets and Italian silks to create wearable works of fine art.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#14120D] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#241D0E] text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white uppercase tracking-wide">
                    The Sacred Trinity: Kids, Women & Gentlemen
                  </h3>
                  <p className="font-sans-body text-xs sm:text-sm text-neutral-300 font-light mt-1.5 leading-relaxed">
                    Most fashion houses separate generations into distant silos. At DORICIAELLAVINS, our collections are harmonized in cut, palette, and texture—empowering a father, mother, and children to arrive as an unforgettable royal presence.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#14120D] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#241D0E] text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white uppercase tracking-wide">
                    Bespoke Tailoring & Made-to-Measure Guarantee
                  </h3>
                  <p className="font-sans-body text-xs sm:text-sm text-neutral-300 font-light mt-1.5 leading-relaxed">
                    We honor individual beauty. Each commission can be personalized to exact measurements, customized with monogrammed initials, or altered by our master tailors before dispatch to your residence.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onBookFitting}
                className="px-6 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#DFBA51] to-[#AA7C11] text-black font-cinzel text-xs font-bold tracking-widest uppercase rounded-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Meet Our Atelier Masters</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

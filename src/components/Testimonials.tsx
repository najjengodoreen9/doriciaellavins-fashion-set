import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { CrownIcon, GoldDivider } from './GoldOrnament';
import { REVIEWS } from '../data/products';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A0A0A] border-t border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs text-[#D4AF37] font-cinzel tracking-[0.25em] uppercase mb-2">
            <CrownIcon size={16} />
            <span>Voices of Distinction</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider">
            Client Testimonials & Royal Society Reviews
          </h2>
          <p className="font-sans-body text-neutral-400 text-sm mt-3 font-light">
            Read authentic accounts from esteemed patrons, gala chairs, and families who wore DORICIAELLAVINS to celebrate life's most unforgettable triumphs.
          </p>
          <GoldDivider />
        </div>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-2xl bg-[#12100B] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all flex flex-col justify-between relative shadow-lg group"
            >
              <div className="absolute top-6 right-6 text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Rating Stars & Occasion Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-cinzel uppercase tracking-wider text-[#C5A059] bg-[#1E190E] px-2.5 py-0.5 rounded border border-[#D4AF37]/25">
                    {rev.occasion}
                  </span>
                </div>

                <h3 className="font-cinzel text-base font-bold text-white tracking-wide mb-2">
                  "{rev.title}"
                </h3>

                <p className="font-sans-body text-neutral-300 text-sm leading-relaxed font-light italic">
                  "{rev.content}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#D4AF37]/15 flex items-center justify-between">
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-[#FAF8F5] tracking-wide">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light">
                    {rev.role} · {rev.location}
                  </p>
                </div>

                {rev.verified && (
                  <div className="flex items-center gap-1 text-[11px] text-[#D4AF37] font-medium font-cinzel">
                    <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Verified Commission</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CrownIcon } from './GoldOrnament';
import { Category } from '../types';

interface CategoryShowcaseProps {
  onSelectCategory: (category: Category) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'kids' as Category,
      title: "Kids Collection",
      subtitle: 'Cherished Royal Youth',
      tagline: 'Heirloom blazers, lace ballgowns & festive regalia',
      image: '/src/assets/images/category_kids_luxury_1791893113001.jpg',
      itemCount: '18 Bespoke Creations',
      highlights: ['Hypoallergenic Silk Linings', 'Adjustable Waistbands', 'Matching Family Pieces'],
    },
    {
      id: 'women' as Category,
      title: "Women's Collection",
      subtitle: 'Majestic Haute Couture',
      tagline: 'Sculpted corsets, gold-embroidered caftans & gala gowns',
      image: '/src/assets/images/category_women_couture_1791893113229.jpg',
      itemCount: '26 Haute Coutures',
      highlights: ['Internal Boned Corsetry', '24K Metallic Thread Zari', 'Custom Hemline Service'],
    },
    {
      id: 'gentlemen' as Category,
      title: "Gentlemen's Collection",
      subtitle: 'Distinguished Nobility',
      tagline: 'Tailored black-tie dinner suits & ceremonial agbada sets',
      image: '/src/assets/images/category_gentlemen_tailored_1791892912920.jpg',
      itemCount: '22 Tailored Cuts',
      highlights: ['Savile Row Full Canvas', 'Worsted English Wool', 'Hand-stitched Lapel Filigree'],
    },
  ];

  return (
    <section id="categories" className="py-16 sm:py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs text-[#D4AF37] font-cinzel tracking-[0.25em] uppercase mb-2">
            <CrownIcon size={16} />
            <span>Curated Sovereign Wardrobes</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white uppercase tracking-wider">
            Explore the Three Pillars of Elegance
          </h2>
          <p className="font-sans-body text-neutral-400 text-sm sm:text-base mt-3 font-light">
            Each creation is an exquisite union of regal heritage, immaculate tailoring, and precious gold ornamentation crafted for life's most unforgettable milestones.
          </p>
        </div>

        {/* 3 Large Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#121212] hover:border-[#D4AF37] transition-all duration-500 cursor-pointer flex flex-col hover:shadow-[0_15px_40px_rgba(212,175,55,0.2)]"
            >
              {/* Corner Ornaments */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#D4AF37]/50 pointer-events-none z-10" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#D4AF37]/50 pointer-events-none z-10" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#D4AF37]/50 pointer-events-none z-10" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#D4AF37]/50 pointer-events-none z-10" />

              {/* Image Container with 4:3 Aspect Ratio and subtle hover zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#18181B]">
                <img
                  src={cat.image}
                  alt={`DORICIAELLAVINS ${cat.title}`}
                  className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/25 to-transparent" />

                {/* Subdued Item Count Pill/Tag Replacement: Clean Unboxed Text with Separator */}
                <div className="absolute top-4 right-4 bg-[#0A0A0A]/85 backdrop-blur-sm border border-[#D4AF37]/30 px-3 py-1 text-[11px] font-cinzel text-[#D4AF37] tracking-wider uppercase">
                  {cat.itemCount}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-1 justify-between bg-gradient-to-b from-[#121212] to-[#0D0D0D]">
                <div>
                  <div className="text-[11px] font-cinzel text-[#D4AF37] tracking-[0.2em] uppercase font-semibold">
                    {cat.subtitle}
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mt-1 group-hover:text-gold-gradient transition-colors">
                    {cat.title}
                  </h3>
                  <p className="font-sans-body text-xs sm:text-sm text-neutral-300 font-light mt-2 line-clamp-2">
                    {cat.tagline}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 pt-4 border-t border-[#D4AF37]/15 space-y-1.5">
                    {cat.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-400 font-light">
                        <Sparkles className="w-3 h-3 text-[#D4AF37] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Button */}
                <div className="mt-6 pt-4 flex items-center justify-between text-xs font-cinzel font-semibold tracking-widest text-[#D4AF37] group-hover:text-white transition-colors">
                  <span className="uppercase">View Collection</span>
                  <div className="w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

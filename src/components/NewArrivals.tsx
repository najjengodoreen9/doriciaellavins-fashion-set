import React, { useState, useMemo } from 'react';
import { Product, Category } from '../types';
import { ProductCard } from './ProductCard';
import { CrownIcon } from './GoldOrnament';

interface NewArrivalsProps {
  products: Product[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: { name: string; hex: string }) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onQuickView,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
}) => {
  const [sortOption, setSortOption] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => p.isNewArrival || selectedCategory !== 'all');
    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Sorting
    return [...list].sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [products, selectedCategory, sortOption]);

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Collections' },
    { id: 'kids', label: 'Kids Collection' },
    { id: 'women', label: "Women's Collection" },
    { id: 'gentlemen', label: "Gentlemen's Collection" },
  ];

  return (
    <section id="new-arrivals" className="py-16 sm:py-24 bg-[#0A0A0A] border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-cinzel tracking-[0.25em] uppercase mb-2">
              <CrownIcon size={16} />
              <span>Haute Couture Release · 2026 Season</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white uppercase tracking-wider">
              New Arrivals & Signature Pieces
            </h2>
            <p className="font-sans-body text-neutral-400 text-sm max-w-xl mt-2 font-light">
              Hand-embroidered silks, regal brocades, and tailored velvets for boys, girls, ladies, and gentlemen.
            </p>
          </div>

          {/* Interactive Category Segmented Control Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#141414] border border-[#D4AF37]/30 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs font-cinzel tracking-wider uppercase rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold shadow-md'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter / Result bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D4AF37]/15 text-xs text-neutral-400">
          <div className="font-cinzel tracking-wider uppercase">
            Showing <span className="text-[#D4AF37] font-bold tabular-nums">{filteredProducts.length}</span> curated pieces
          </div>
          <div className="flex items-center gap-2">
            <span className="font-cinzel tracking-wider uppercase text-[11px] text-neutral-400 hidden sm:inline">Sort:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as any)}
              className="bg-[#141414] border border-[#D4AF37]/30 text-neutral-200 text-xs px-2.5 py-1.5 rounded-lg focus:outline-none focus:border-[#D4AF37] cursor-pointer"
            >
              <option value="featured">Featured Curations</option>
              <option value="price-asc">Price: Royal Modest to Prime</option>
              <option value="price-desc">Price: Prime to Royal Modest</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid: 3-column desktop layout adhering to ecommerce reference */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#121212] rounded-2xl border border-neutral-800">
            <p className="font-cinzel text-neutral-400 uppercase tracking-widest text-sm">
              No bespoke garments found in this view.
            </p>
            <button
              onClick={() => onSelectCategory('all')}
              className="mt-4 px-5 py-2 text-xs font-cinzel text-[#D4AF37] border border-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              Reset Category
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

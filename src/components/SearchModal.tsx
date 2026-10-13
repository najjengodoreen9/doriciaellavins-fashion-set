import React, { useState, useMemo } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const results = useMemo(() => {
    let list = products;
    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (!query.trim()) return list;

    const q = query.toLowerCase();
    return list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.occasion.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [products, query, selectedCategory]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#12100C] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden z-10">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#D4AF37]/20 bg-[#17140E] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search velvet blazers, lace gowns, wedding sets, agbada..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-neutral-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-neutral-400 hover:text-white cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Filter Buttons */}
        <div className="px-6 py-2.5 bg-[#14110A] border-b border-[#D4AF37]/10 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
          <span className="font-cinzel text-[10px] uppercase text-neutral-500 tracking-wider">Filter:</span>
          {['all', 'kids', 'women', 'gentlemen'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full uppercase tracking-wider text-[11px] font-cinzel transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-black font-semibold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All' : cat}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
          {results.length === 0 ? (
            <div className="text-center py-12 text-neutral-400 font-light text-sm">
              No garments found matching "{query}".
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="flex items-center gap-4 p-3 rounded-xl bg-[#17130D] border border-transparent hover:border-[#D4AF37]/40 transition-all cursor-pointer group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg border border-[#D4AF37]/20 shrink-0 bg-neutral-900"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-cinzel uppercase text-[#D4AF37] tracking-wider">
                    {product.category} · {product.occasion}
                  </span>
                  <h4 className="font-cinzel text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors truncate">
                    {product.name}
                  </h4>
                  <p className="text-xs text-neutral-400 truncate font-light">
                    {product.fabric}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-cinzel text-sm font-bold text-[#FAF8F5] tabular-nums">
                    ${product.price.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-[#D4AF37] flex items-center gap-1 justify-end mt-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

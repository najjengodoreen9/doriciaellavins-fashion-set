import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: { name: string; hex: string }) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string }>(
    product.colors[0] || { name: 'Black & Gold', hex: '#0A0A0A' }
  );
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize, selectedColor);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative rounded-xl overflow-hidden border border-[#D4AF37]/25 bg-[#121212] hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-[0_10px_30px_rgba(212,175,55,0.18)]"
    >
      {/* Top Image Section (65%-75% height) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#18181B]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />

        {/* Badge (Text tag, quiet metadata, no garish badge sandwich) */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#D4AF37]/40 px-2.5 py-1 text-[10px] font-cinzel text-[#D4AF37] tracking-widest uppercase">
            {product.badge}
          </div>
        )}

        {/* Action icons top right */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
              isWishlisted
                ? 'bg-[#D4AF37] text-black shadow-md'
                : 'bg-black/60 text-white hover:text-[#D4AF37] hover:bg-black/80'
            }`}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            aria-label="Wishlist toggle"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-black' : ''}`} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#D4AF37] transition-all cursor-pointer hidden sm:flex"
            title="Quick View"
            aria-label="Quick view product"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Content & Purchasing Controls */}
      <div className="p-5 flex flex-col flex-1 justify-between bg-gradient-to-b from-[#121212] to-[#0A0A0A]">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
            <span className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-[#C5A059]">
              {product.category} · {product.occasion}
            </span>
            <div className="flex items-center gap-1 text-[11px] text-[#D4AF37]">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
              <span className="tabular-nums font-semibold">{product.rating.toFixed(1)}</span>
              <span className="text-neutral-500">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-cinzel text-base font-bold text-white tracking-wide group-hover:text-gold-gradient transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Fabric Note */}
          <p className="text-[11px] text-neutral-400 font-light mt-1 line-clamp-1">
            {product.fabric}
          </p>

          {/* Pricing Row */}
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-cinzel text-lg font-bold text-[#FAF8F5] tabular-nums">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-neutral-500 line-through tabular-nums">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-[10px] font-sans-body text-[#D4AF37]/90 uppercase tracking-widest ml-auto">
              Bespoke Fit
            </span>
          </div>

          {/* Color Swatches */}
          <div className="mt-3.5 pt-3 border-t border-[#D4AF37]/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 mr-1 font-cinzel">Color:</span>
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(c);
                  }}
                  className={`w-4 h-4 rounded-full border transition-all cursor-pointer ${
                    selectedColor.name === c.name
                      ? 'border-[#D4AF37] ring-1 ring-[#D4AF37] scale-110'
                      : 'border-neutral-600 opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>

            {/* Sizes Preview */}
            <div className="text-[10px] text-neutral-400 font-cinzel tracking-wider">
              {product.sizes.length} Sizes
            </div>
          </div>

          {/* Size Selector Strip */}
          <div
            className="mt-2.5 flex items-center gap-1 overflow-x-auto py-1 no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {product.sizes.slice(0, 4).map((s) => (
              <button
                key={s}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(s);
                }}
                className={`px-2 py-1 text-[10px] font-medium rounded border transition-colors whitespace-nowrap cursor-pointer ${
                  selectedSize === s
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-semibold'
                    : 'bg-neutral-900/80 text-neutral-300 border-neutral-700/60 hover:border-neutral-500'
                }`}
              >
                {s}
              </button>
            ))}
            {product.sizes.length > 4 && (
              <span className="text-[10px] text-neutral-500 pl-1">+{product.sizes.length - 4}</span>
            )}
          </div>
        </div>

        {/* Add to Cart CTA */}
        <div className="mt-4 pt-3 border-t border-[#D4AF37]/15">
          <button
            onClick={handleAdd}
            className={`w-full py-2.5 px-3 rounded-lg font-cinzel text-xs font-bold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
              addedAnimation
                ? 'bg-emerald-600 text-white'
                : 'bg-gradient-to-r from-[#2A2213] to-[#1A160E] border border-[#D4AF37]/60 hover:border-[#D4AF37] text-[#FAF8F5] hover:bg-[#382E19]'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

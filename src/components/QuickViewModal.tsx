import React, { useState } from 'react';
import { X, Star, ShoppingBag, Check, Shield, Sparkles, Scissors, Heart } from 'lucide-react';
import { Product } from '../types';
import { CrownIcon } from './GoldOrnament';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: { name: string; hex: string }, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string }>(
    product.colors[0] || { name: 'Black & Gold', hex: '#0A0A0A' }
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState<string>(product.image);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#12100C] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image Gallery */}
          <div className="p-6 sm:p-8 bg-[#0D0B08] flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#D4AF37]/20">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-neutral-900">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {product.badge && (
                <div className="absolute top-3 left-3 bg-[#0A0A0A]/90 border border-[#D4AF37]/40 px-3 py-1 text-[10px] font-cinzel text-[#D4AF37] uppercase tracking-wider">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnail switcher if secondary image exists */}
            {product.secondaryImage && (
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setActiveImage(product.image)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border cursor-pointer ${
                    activeImage === product.image ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]' : 'border-neutral-700 opacity-60'
                  }`}
                >
                  <img src={product.image} alt="View 1" className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => setActiveImage(product.secondaryImage!)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border cursor-pointer ${
                    activeImage === product.secondaryImage ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]' : 'border-neutral-700 opacity-60'
                  }`}
                >
                  <img src={product.secondaryImage} alt="View 2" className="w-full h-full object-cover" />
                </button>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] text-neutral-400 space-y-1 font-light">
              <div className="flex items-center gap-2">
                <Scissors className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Bespoke Made-to-Measure Alterations Included</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Authentic DORICIAELLAVINS Royal Seal of Craftsmanship</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Purchasing Specs */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category, Occasion & Ratings */}
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-cinzel text-[11px] tracking-[0.2em] uppercase text-[#D4AF37]">
                  {product.category} · {product.occasion}
                </span>
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  <span className="font-semibold tabular-nums">{product.rating.toFixed(1)}</span>
                  <span className="text-neutral-500">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                {product.name}
              </h2>

              {/* Price */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-cinzel text-2xl font-bold text-[#D4AF37] tabular-nums">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-neutral-500 line-through tabular-nums">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-xs text-neutral-400 font-light">
                  Tax & Bespoke Fitting Included
                </span>
              </div>

              {/* Description */}
              <p className="font-sans-body text-xs sm:text-sm text-neutral-300 font-light mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Fabric & Embroidery Specs */}
              <div className="mt-5 p-3.5 rounded-lg bg-[#18140D] border border-[#D4AF37]/20 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-neutral-400 font-light">Fabric:</span>
                  <span className="text-neutral-200 font-medium">{product.fabric}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400 font-light">Embellishment:</span>
                  <span className="text-[#D4AF37] font-medium">{product.embroidery}</span>
                </div>
              </div>

              {/* Color Selector */}
              <div className="mt-5">
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-cinzel uppercase text-neutral-400">Select Color:</span>
                  <span className="text-white font-medium">{selectedColor.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs cursor-pointer transition-all ${
                        selectedColor.name === c.name
                          ? 'border-[#D4AF37] bg-[#221B0F] text-white shadow-sm'
                          : 'border-neutral-800 bg-[#121212] text-neutral-400 hover:text-white'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-neutral-600"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mt-5">
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-cinzel uppercase text-neutral-400">Select Size:</span>
                  <span className="text-[#D4AF37] font-medium">{selectedSize}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                        selectedSize === s
                          ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold'
                          : 'bg-[#14120D] text-neutral-300 border-neutral-700 hover:border-[#D4AF37]/50'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions: Quantity Stepper, Wishlist & Add to Bag */}
            <div className="mt-6 pt-5 border-t border-[#D4AF37]/20 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#D4AF37]/40 rounded-lg bg-[#18140D] px-2 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 text-neutral-300 hover:text-white text-base cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-semibold tabular-nums text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 text-neutral-300 hover:text-white text-base cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex-1 py-3 px-4 rounded-lg font-cinzel text-xs font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gradient-to-r from-[#D4AF37] via-[#DFBA51] to-[#AA7C11] text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Added to Royal Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Royal Bag · ${(product.price * quantity).toLocaleString()}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    isWishlisted
                      ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                      : 'border-neutral-700 bg-[#16130E] text-neutral-300 hover:text-[#D4AF37]'
                  }`}
                  title="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-black' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Sparkles, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.15) : 0;
  const shipping = subtotal > 300 || items.length === 0 ? 0 : 45;
  const total = subtotal - discount + shipping;
  const freeShippingThreshold = 300;
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'ROYAL15') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Use ROYAL15 for 15% off.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#100E0A] border-l border-[#D4AF37]/30 shadow-2xl flex flex-col justify-between">
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#15120C]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="font-cinzel text-lg font-bold text-white uppercase tracking-wider">
                Royal Shopping Bag ({items.reduce((sum, i) => sum + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Progress Bar */}
          <div className="px-6 py-3 bg-[#1A150D] border-b border-[#D4AF37]/15">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-neutral-300 font-light">
                {subtotal >= freeShippingThreshold ? (
                  <span className="text-[#D4AF37] font-medium flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Complimentary Royal Express Delivery Unlocked!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-[#D4AF37] tabular-nums">${freeShippingThreshold - subtotal}</strong> more for complimentary shipping
                  </span>
                )}
              </span>
              <span className="text-[#D4AF37] font-semibold text-[11px] tabular-nums">
                {progressToFreeShipping}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#C5A059] to-[#D4AF37] transition-all duration-300"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#1C170E] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-cinzel text-base font-semibold text-white uppercase">
                  Your Bag is Currently Empty
                </h3>
                <p className="font-sans-body text-xs text-neutral-400 font-light max-w-xs mx-auto">
                  Discover our majestic new arrivals for kids, women, and gentlemen.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-cinzel text-xs font-bold uppercase tracking-widest rounded-lg cursor-pointer"
                >
                  Explore Boutique
                </button>
              </div>
            ) : (
              items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}-${idx}`}
                  className="flex gap-4 p-4 rounded-xl bg-[#17140E] border border-[#D4AF37]/20 relative"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover rounded-lg border border-[#D4AF37]/20 shrink-0 bg-neutral-900"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-cinzel text-xs font-bold text-white tracking-wide line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(idx)}
                          className="text-neutral-500 hover:text-red-400 transition-colors p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-[11px] text-neutral-400 mt-1 space-y-0.5">
                        <div>
                          Size: <span className="text-[#FAF8F5] font-medium">{item.selectedSize}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span>Color:</span>
                          <span
                            className="inline-block w-2.5 h-2.5 rounded-full border border-neutral-500"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          <span className="text-[#FAF8F5]">{item.selectedColor.name}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-800">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#D4AF37]/30 rounded-lg bg-[#0F0D09]">
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                          className="p-1 hover:text-[#D4AF37] transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold tabular-nums text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="p-1 hover:text-[#D4AF37] transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="font-cinzel text-sm font-bold text-[#D4AF37] tabular-nums">
                        ${(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#D4AF37]/20 bg-[#15120C] space-y-4">
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (ROYAL15)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-[#0F0D09] border border-[#D4AF37]/30 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 uppercase tracking-wider focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#261E0F] border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#D4AF37] text-xs font-cinzel font-bold uppercase rounded-lg hover:bg-[#342914] cursor-pointer"
                >
                  Apply
                </button>
              </form>

              {promoApplied && (
                <div className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Royal 15% Privilege Activated (-${discount})</span>
                </div>
              )}
              {promoError && (
                <div className="text-xs text-red-400">{promoError}</div>
              )}

              {/* Cost Breakdown */}
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-medium text-white">${subtotal.toLocaleString()}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Royal Privilege (15%)</span>
                    <span className="tabular-nums font-medium">-${discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Royal Express Shipping</span>
                  <span className="tabular-nums font-medium text-white">
                    {shipping === 0 ? 'Complimentary' : `$${shipping}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#D4AF37]/20 flex justify-between text-sm font-bold text-white font-cinzel">
                  <span>Total Due</span>
                  <span className="text-[#D4AF37] text-base tabular-nums">${total.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#DFBA51] to-[#AA7C11] text-black font-cinzel text-xs font-bold tracking-[0.2em] uppercase rounded-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Proceed to Royal Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 font-light">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Bespoke Fit Guaranteed · Secured Luxury Transaction</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

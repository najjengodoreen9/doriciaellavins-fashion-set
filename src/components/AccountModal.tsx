import React, { useState } from 'react';
import { X, User, Crown, Shield, Clock, Ruler, Sparkles, Check } from 'lucide-react';
import { CrownIcon } from './GoldOrnament';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'profile' | 'measurements' | 'orders'>('profile');
  const [measurements, setMeasurements] = useState({
    chest: '40 in',
    waist: '32 in',
    hips: '39 in',
    shoulder: '18 in',
    sleeve: '25 in',
    monogram: 'D.E.L.',
  });
  const [saved, setSaved] = useState(false);

  const handleSaveMeasurements = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#12100C] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="p-6 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#17140E]">
          <div className="flex items-center gap-2">
            <CrownIcon size={20} />
            <h2 className="font-cinzel text-lg font-bold text-white uppercase tracking-wider">
              Royal VIP Client Chamber
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Member Tier Banner */}
        <div className="p-6 bg-gradient-to-r from-[#211A0D] via-[#2F2412] to-[#211A0D] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#161208] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-lg">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel text-base font-bold text-white uppercase tracking-wider">
                  Lady Genevieve Laurent
                </h3>
                <span className="text-[10px] font-cinzel text-black bg-[#D4AF37] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  Gold Sovereign Tier
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-light mt-0.5">
                Member ID: DE-VIP-9042 · Private Atelier Access Granted
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#D4AF37]/15 bg-[#14110A] text-xs font-cinzel tracking-wider uppercase">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-3 text-center border-b-2 transition-all cursor-pointer ${
              activeTab === 'profile'
                ? 'border-[#D4AF37] text-[#D4AF37] font-semibold bg-[#1C160B]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Overview & Privileges
          </button>
          <button
            onClick={() => setActiveTab('measurements')}
            className={`flex-1 py-3 text-center border-b-2 transition-all cursor-pointer ${
              activeTab === 'measurements'
                ? 'border-[#D4AF37] text-[#D4AF37] font-semibold bg-[#1C160B]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Bespoke Measurements
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 py-3 text-center border-b-2 transition-all cursor-pointer ${
              activeTab === 'orders'
                ? 'border-[#D4AF37] text-[#D4AF37] font-semibold bg-[#1C160B]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Commission History
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <h4 className="font-cinzel text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                Active VIP Concierge Privileges
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-lg bg-[#18140D] border border-[#D4AF37]/20 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Dedicated Senior Couturier</span>
                    <span className="text-neutral-400 font-light text-[11px]">Direct WhatsApp & telephone access for custom commissions.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#18140D] border border-[#D4AF37]/20 flex items-start gap-3">
                  <Shield className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Lifetime Garment Preservation</span>
                    <span className="text-neutral-400 font-light text-[11px]">Complimentary annual gold bullion inspection and silk steaming.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#18140D] border border-[#D4AF37]/20 flex items-start gap-3">
                  <Ruler className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Family Sizing Vault</span>
                    <span className="text-neutral-400 font-light text-[11px]">Saved measurements for spouse and children ready for 1-click orders.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#18140D] border border-[#D4AF37]/20 flex items-start gap-3">
                  <Crown className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Secret Lookbook Previews</span>
                    <span className="text-neutral-400 font-light text-[11px]">Private 72-hour preview window prior to global seasonal releases.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'measurements' && (
            <form onSubmit={handleSaveMeasurements} className="space-y-4">
              <p className="text-xs text-neutral-300 font-light">
                Keep your atelier measurements updated so our master tailors can craft your pieces to perfection without delay.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="block text-neutral-400 mb-1">Chest / Bust</label>
                  <input
                    type="text"
                    value={measurements.chest}
                    onChange={(e) => setMeasurements({ ...measurements, chest: e.target.value })}
                    className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Waist</label>
                  <input
                    type="text"
                    value={measurements.waist}
                    onChange={(e) => setMeasurements({ ...measurements, waist: e.target.value })}
                    className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Hips</label>
                  <input
                    type="text"
                    value={measurements.hips}
                    onChange={(e) => setMeasurements({ ...measurements, hips: e.target.value })}
                    className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Shoulder Width</label>
                  <input
                    type="text"
                    value={measurements.shoulder}
                    onChange={(e) => setMeasurements({ ...measurements, shoulder: e.target.value })}
                    className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Sleeve Length</label>
                  <input
                    type="text"
                    value={measurements.sleeve}
                    onChange={(e) => setMeasurements({ ...measurements, sleeve: e.target.value })}
                    className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Crest Monogram</label>
                  <input
                    type="text"
                    value={measurements.monogram}
                    onChange={(e) => setMeasurements({ ...measurements, monogram: e.target.value })}
                    className="w-full bg-[#18140D] border border-[#D4AF37]/30 rounded-lg p-2 text-white"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                {saved && (
                  <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                    <Check className="w-3.5 h-3.5" />
                    Measurements Saved to Vault
                  </span>
                )}
                <button
                  type="submit"
                  className="ml-auto px-5 py-2 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-cinzel text-xs font-bold uppercase rounded-lg cursor-pointer"
                >
                  Update Atelier Vault
                </button>
              </div>
            </form>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#18140D] border border-[#D4AF37]/20 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-cinzel font-bold text-white">#DE-2026-7812</span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded">
                      Delivered
                    </span>
                  </div>
                  <p className="text-neutral-400 mt-1 font-light">
                    Sovereign Corset Brocade Gown (Custom US 4) · $1,850
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-neutral-400 text-[11px]">Jan 18, 2026</div>
                  <button className="text-[11px] font-cinzel text-[#D4AF37] hover:underline mt-1 cursor-pointer">
                    View Archival Receipt
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#18140D] border border-[#D4AF37]/20 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-cinzel font-bold text-white">#DE-2025-4109</span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded">
                      Delivered
                    </span>
                  </div>
                  <p className="text-neutral-400 mt-1 font-light">
                    Royal Heritage Velvet Blazer (Boy 7-8Y) · $340
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-neutral-400 text-[11px]">Nov 04, 2025</div>
                  <button className="text-[11px] font-cinzel text-[#D4AF37] hover:underline mt-1 cursor-pointer">
                    View Archival Receipt
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React from 'react';

export const GoldDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
      <div className="flex items-center gap-1.5 text-[#D4AF37]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" fill="#D4AF37" fillOpacity="0.3" />
        </svg>
      </div>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
    </div>
  );
};

export const CrownIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`text-[#D4AF37] ${className}`}
    >
      <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM5 18H19V20H5V18Z" />
    </svg>
  );
};

export const GoldCornerFlourish: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br'; className?: string }> = ({
  position,
  className = '',
}) => {
  const rotation =
    position === 'tr' ? 'rotate-90' : position === 'br' ? 'rotate-180' : position === 'bl' ? '-rotate-90' : '';

  return (
    <div className={`pointer-events-none absolute w-8 h-8 text-[#D4AF37]/50 ${rotation} ${className}`}>
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 38V12C2 6.47715 6.47715 2 12 2H38" />
        <path d="M8 38V14C8 10.6863 10.6863 8 14 8H38" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    </div>
  );
};

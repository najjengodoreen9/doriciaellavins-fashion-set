import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showSubtitle = true, className = '' }) => {
  const iconSize = size === 'sm' ? 38 : size === 'lg' ? 64 : 48;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Royal Crest with D & E Monogram and Crown */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA7C11" />
              <stop offset="100%" stopColor="#E5C378" />
            </linearGradient>
            <linearGradient id="goldGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#5B4310" />
            </linearGradient>
            <radialGradient id="royalGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background subtle circle */}
          <circle cx="50" cy="50" r="48" fill="#121212" stroke="url(#goldGradient)" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="44" fill="url(#royalGlow)" stroke="url(#goldGradientDark)" strokeWidth="0.75" strokeDasharray="2 3" />

          {/* Royal Crown on Top */}
          <path
            d="M34 31 L38 22 L45 27 L50 18 L55 27 L62 22 L66 31 Z"
            fill="url(#goldGradient)"
            stroke="#AA7C11"
            strokeWidth="0.8"
          />
          {/* Crown Jewels */}
          <circle cx="38" cy="21" r="1.5" fill="#FFF2B2" />
          <circle cx="50" cy="17" r="2" fill="#FFF2B2" />
          <circle cx="62" cy="21" r="1.5" fill="#FFF2B2" />
          <rect x="35" y="30" width="30" height="3" rx="1.5" fill="url(#goldGradient)" />

          {/* Intertwined D and E Monogram */}
          {/* 'D' */}
          <path
            d="M36 39 V72 H46 C56 72 63 65 63 55.5 C63 46 56 39 46 39 Z M42 45 H46 C51.5 45 56.5 49.5 56.5 55.5 C56.5 61.5 51.5 66 46 66 H42 Z"
            fill="url(#goldGradient)"
          />

          {/* 'E' interwoven */}
          <path
            d="M48 42 H64 V47 H53 V53 H61 V58 H53 V66 H65 V71 H48 Z"
            fill="url(#goldGradient)"
            fillOpacity="0.9"
            stroke="#121212"
            strokeWidth="1"
          />

          {/* Decorative Laurel flourishes on bottom */}
          <path
            d="M26 62 C26 76 37 84 50 84 C63 84 74 76 74 62"
            stroke="url(#goldGradient)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="50" cy="84" r="2" fill="url(#goldGradient)" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`font-cinzel tracking-[0.22em] font-bold text-gold-gradient uppercase leading-none ${
            size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : 'text-lg'
          }`}
        >
          DORICIAELLAVINS
        </span>
        {showSubtitle && (
          <span
            className={`font-sans-body tracking-[0.38em] text-[#C5A059] uppercase mt-1 text-[9px] font-medium leading-none`}
          >
            FASHION SET
          </span>
        )}
      </div>
    </div>
  );
};

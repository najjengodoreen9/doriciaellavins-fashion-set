import React, { useState } from 'react';
import { Search, ShoppingBag, User, Heart, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onOpenWishlist: () => void;
  onNavigateSection: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenSearch,
  onOpenAccount,
  onOpenWishlist,
  onNavigateSection,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Shop', id: 'new-arrivals' },
    { label: 'Kids', id: 'categories', filter: 'kids' },
    { label: 'Women', id: 'categories', filter: 'women' },
    { label: 'Gentlemen', id: 'categories', filter: 'gentlemen' },
    { label: 'Occasions', id: 'occasions' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#1A160E] via-[#2A2213] to-[#1A160E] border-b border-[#D4AF37]/15 py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs tracking-wider">
          <div className="hidden sm:flex items-center gap-2 text-[#D4AF37]/80 text-[11px] font-cinzel">
            <span>ROYAL ATELIER SERVICE</span>
            <span>·</span>
            <span>WORLDWIDE BESPOKE COUTURE</span>
          </div>
          <div className="mx-auto sm:mx-0 flex items-center gap-2 text-[11px] text-[#FAF8F5]/90">
            <span className="font-script text-base text-[#D4AF37] pr-1">Dress Well · Live Classy · Be You</span>
            <span className="hidden md:inline text-neutral-500">|</span>
            <span className="hidden md:inline text-[#FAF8F5]/80">Use code <strong className="text-[#D4AF37] font-semibold">ROYAL15</strong> for 15% VIP Privilege</span>
          </div>
          <div className="hidden lg:flex items-center gap-3 text-[11px] text-[#D4AF37]/90 font-medium">
            <button onClick={() => onNavigateSection('contact')} className="hover:text-white transition-colors cursor-pointer">
              Book Private Fitting
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Row adhering to Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark & Royal Crest */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center text-left cursor-pointer group shrink-0 focus-visible:outline-none"
            aria-label="DORICIAELLAVINS FASHION SET Home"
          >
            <Logo size="md" />
          </button>

          {/* Zone 2: Navigation Links (Single-line, clear hover underlines) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-cinzel tracking-[0.16em] uppercase font-medium text-neutral-300">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer hover:text-[#D4AF37] ${
                  activeSection === item.id ? 'text-[#D4AF37] font-semibold' : ''
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D4AF37]" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Interactive Affordances (Search, Wishlist, Account, Cart) */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Search */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-neutral-300 hover:text-[#D4AF37] transition-colors rounded-full hover:bg-neutral-900 cursor-pointer"
              title="Search Collections"
              aria-label="Search outfits"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-neutral-300 hover:text-[#D4AF37] transition-colors rounded-full hover:bg-neutral-900 cursor-pointer hidden sm:flex"
              title="Saved Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#D4AF37] text-black text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Account / VIP */}
            <button
              onClick={onOpenAccount}
              className="p-2 text-neutral-300 hover:text-[#D4AF37] transition-colors rounded-full hover:bg-neutral-900 cursor-pointer hidden sm:flex"
              title="VIP Client Portal"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#211B10] to-[#17130A] border border-[#D4AF37]/50 hover:border-[#D4AF37] text-neutral-100 rounded-lg transition-all duration-200 cursor-pointer group shadow-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.25)]"
              aria-label={`Shopping Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-cinzel text-xs tracking-wider font-semibold">BAG</span>
              <span className="bg-[#D4AF37] text-black font-bold text-xs px-2 py-0.5 rounded-full tabular-nums">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121212] border-b border-[#D4AF37]/30 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-cinzel text-sm uppercase tracking-widest">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className="text-left py-2 text-neutral-200 hover:text-[#D4AF37] transition-colors flex items-center justify-between border-b border-neutral-800/80 cursor-pointer"
              >
                <span>{item.label}</span>
                <span className="text-neutral-600">→</span>
              </button>
            ))}
          </nav>

          <div className="pt-4 flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-800">
            <button
              onClick={() => {
                onOpenAccount();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 hover:text-[#D4AF37]"
            >
              <User className="w-4 h-4 text-[#D4AF37]" />
              <span>VIP Client Portal</span>
            </button>
            <button
              onClick={() => {
                onOpenWishlist();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 hover:text-[#D4AF37]"
            >
              <Heart className="w-4 h-4 text-[#D4AF37]" />
              <span>Wishlist ({wishlistCount})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

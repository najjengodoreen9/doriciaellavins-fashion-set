/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PRODUCTS } from './data/products';
import { Product, CartItem, Category } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { NewArrivals } from './components/NewArrivals';
import { OccasionsSection } from './components/OccasionsSection';
import { AboutUs } from './components/AboutUs';
import { SpecialOffers } from './components/SpecialOffers';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { AccountModal } from './components/AccountModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  // State management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Royal Heritage Velvet Blazer
      selectedSize: '7-8Y',
      selectedColor: PRODUCTS[0].colors[0],
      quantity: 1,
    },
    {
      product: PRODUCTS[3], // Sovereign Corset Brocade Gown
      selectedSize: 'US 4 (S)',
      selectedColor: PRODUCTS[3].colors[0],
      quantity: 1,
    },
  ]);

  const [wishlistIds, setWishlistIds] = useState<string[]>([PRODUCTS[1].id, PRODUCTS[6].id]);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Modal open states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Cart operations
  const handleAddToCart = (
    product: Product,
    selectedSize: string,
    selectedColor: { name: string; hex: string },
    quantity: number = 1
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor.name === selectedColor.name
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [...prev, { product, selectedSize, selectedColor, quantity }];
    });
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = quantity;
      return updated;
    });
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'contact') {
      setIsContactOpen(true);
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromShowcase = (category: Category) => {
    setSelectedCategory(category);
    const elem = document.getElementById('new-arrivals');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAF8F5] flex flex-col font-sans-body">
      {/* Luxury Navbar conforming to Top Bar Contract */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onOpenWishlist={() => {
          // Open new arrivals filtered by wishlist or show quick view of first wishlisted item
          const first = PRODUCTS.find((p) => wishlistIds.includes(p.id));
          if (first) setQuickViewProduct(first);
        }}
        onNavigateSection={handleNavigateSection}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Banner Section */}
        <Hero
          onExploreClick={() => handleNavigateSection('new-arrivals')}
          onBookFitting={() => setIsContactOpen(true)}
          onOccasionClick={() => handleNavigateSection('occasions')}
        />

        {/* 2. Three Attractive Category Sections (Kids, Women, Gentlemen) */}
        <CategoryShowcase onSelectCategory={handleSelectCategoryFromShowcase} />

        {/* 3. New Arrivals & Signature Pieces */}
        <NewArrivals
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onQuickView={setQuickViewProduct}
          onAddToCart={(product, size, color) => handleAddToCart(product, size, color, 1)}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
        />

        {/* 4. Special Occasion Collection (Weddings, Birthdays, Galas, Suits, Traditional) */}
        <OccasionsSection
          products={PRODUCTS}
          onQuickView={setQuickViewProduct}
          onBookFitting={() => setIsContactOpen(true)}
        />

        {/* 5. Special Offers & VIP Privileges */}
        <SpecialOffers
          onExploreShop={() => handleNavigateSection('new-arrivals')}
          onBookFitting={() => setIsContactOpen(true)}
        />

        {/* 6. About Us: Brand Heritage & Passion for Every Generation */}
        <AboutUs onBookFitting={() => setIsContactOpen(true)} />

        {/* 7. Client Testimonials & Royal Society Reviews */}
        <Testimonials />
      </main>

      {/* 8. Luxury Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenFitting={() => setIsContactOpen(true)}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Product Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderComplete={() => setCartItems([])}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      {/* VIP Client Account Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      {/* Private Fitting / Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

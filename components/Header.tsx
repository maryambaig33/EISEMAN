import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="bg-luxury-black text-white text-xs text-center py-2 tracking-widest uppercase">
        Complimentary Overnight Shipping on Orders Over $500
      </div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto md:justify-start">
            <a href="#" className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-luxury-black">
              EISEMAN
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase text-gray-800">
            <a href="#" className="hover:text-gold-600 transition-colors">Jewelry</a>
            <a href="#" className="hover:text-gold-600 transition-colors">Watches</a>
            <a href="#" className="hover:text-gold-600 transition-colors">Designers</a>
            <a href="#" className="hover:text-gold-600 transition-colors">Bridal</a>
            <a href="#" className="hover:text-gold-600 transition-colors">Gifts</a>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6 text-gray-600">
            <button className="hover:text-gold-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="hover:text-gold-600 transition-colors">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="hover:text-gold-600 transition-colors relative">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-gold-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg py-4 px-4 flex flex-col space-y-4 z-40">
           <a href="#" className="block text-sm font-medium tracking-widest uppercase text-gray-800">Jewelry</a>
            <a href="#" className="block text-sm font-medium tracking-widest uppercase text-gray-800">Watches</a>
            <a href="#" className="block text-sm font-medium tracking-widest uppercase text-gray-800">Designers</a>
            <a href="#" className="block text-sm font-medium tracking-widest uppercase text-gray-800">Bridal</a>
        </div>
      )}
    </header>
  );
};
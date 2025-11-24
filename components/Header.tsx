import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
      <div className="bg-luxury-black text-white text-[10px] md:text-xs text-center py-2.5 tracking-[0.2em] uppercase font-sans">
        Complimentary 2-Day Shipping & Returns
      </div>
      
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6 relative">
          
          {/* Mobile Layout: Menu Button + Logo + Icons */}
          <div className="w-full flex justify-between items-center md:hidden">
            <button 
              className="p-2 -ml-2 text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <a href="#" className="text-2xl font-serif font-bold tracking-widest text-luxury-black">
              EISEMAN
            </a>

            <div className="flex items-center space-x-4">
              <button className="text-gray-800">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop: Centered Logo Approach */}
          <div className="hidden md:flex items-center w-full justify-between">
            {/* Left Nav */}
            <div className="flex space-x-8 text-xs font-bold tracking-[0.15em] uppercase text-gray-800 flex-1">
              <a href="#" className="hover:text-gold-600 transition-colors">Jewelry</a>
              <a href="#" className="hover:text-gold-600 transition-colors">Watches</a>
              <a href="#" className="hover:text-gold-600 transition-colors">Designers</a>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex justify-center px-8">
              <a href="#" className="text-4xl font-serif font-bold tracking-widest text-luxury-black">
                EISEMAN
              </a>
            </div>

            {/* Right Nav & Icons */}
            <div className="flex items-center justify-end space-x-6 flex-1">
              <nav className="flex space-x-8 text-xs font-bold tracking-[0.15em] uppercase text-gray-800 mr-8">
                 <a href="#" className="hover:text-gold-600 transition-colors">Bridal</a>
                 <a href="#" className="hover:text-gold-600 transition-colors">Services</a>
              </nav>

              <div className="flex items-center space-x-6 text-gray-800 border-l border-gray-200 pl-6">
                <button className="hover:text-gold-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="hover:text-gold-600 transition-colors relative">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="absolute -top-1.5 -right-1.5 bg-luxury-black text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center">0</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="py-6 px-6 flex flex-col space-y-5">
           <a href="#" className="block text-sm font-bold tracking-widest uppercase text-gray-800 border-b border-gray-100 pb-2">Jewelry</a>
            <a href="#" className="block text-sm font-bold tracking-widest uppercase text-gray-800 border-b border-gray-100 pb-2">Watches</a>
            <a href="#" className="block text-sm font-bold tracking-widest uppercase text-gray-800 border-b border-gray-100 pb-2">Designers</a>
            <a href="#" className="block text-sm font-bold tracking-widest uppercase text-gray-800 border-b border-gray-100 pb-2">Bridal</a>
            <a href="#" className="block text-sm font-bold tracking-widest uppercase text-gray-800 pb-2">Services</a>
        </div>
      </div>
    </header>
  );
};
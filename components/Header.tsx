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
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
      {/* Top Bar */}
      <div className="bg-luxury-black text-white text-[10px] text-center py-2 tracking-[0.2em] uppercase font-sans font-medium">
        Complimentary 2-Day Shipping & Returns
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col relative pt-6 pb-0">
          
          {/* Mobile Header Row */}
          <div className="flex justify-between items-center md:hidden pb-4">
            <button 
              className="p-2 -ml-2 text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <a href="#" className="text-2xl font-serif font-bold tracking-widest text-luxury-black">
              EISEMAN
            </a>

            <div className="flex items-center space-x-4">
               <button className="text-gray-800 relative">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-luxury-black text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">0</span>
               </button>
            </div>
          </div>

          {/* Desktop Logo Row */}
          <div className="hidden md:flex justify-between items-center pb-6 border-b border-gray-100">
             <div className="w-1/3 flex space-x-6">
                <a href="#" className="text-xs text-gray-500 hover:text-luxury-black transition-colors uppercase tracking-wider">Locations</a>
                <a href="#" className="text-xs text-gray-500 hover:text-luxury-black transition-colors uppercase tracking-wider">Contact</a>
             </div>
             
             <div className="w-1/3 flex justify-center">
                <a href="#" className="text-4xl font-serif font-bold tracking-[0.15em] text-luxury-black">
                  EISEMAN
                </a>
             </div>

             <div className="w-1/3 flex justify-end items-center space-x-6">
                <div className="relative group">
                   <input type="text" placeholder="Search" className="border-b border-gray-300 py-1 text-xs focus:outline-none focus:border-luxury-black w-32 transition-all focus:w-48 placeholder-gray-400 font-sans" />
                   <svg className="w-3 h-3 absolute right-0 top-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <button className="text-gray-800 hover:text-gold-600 transition-colors">
                  <span className="text-xs uppercase tracking-wider">Account</span>
                </button>
                 <button className="text-gray-800 hover:text-gold-600 transition-colors relative">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="absolute -top-1.5 -right-1.5 bg-luxury-black text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center">0</span>
                </button>
             </div>
          </div>

          {/* Desktop Nav Row */}
          <div className="hidden md:flex justify-center py-4">
             <nav className="flex space-x-12 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-800">
                <a href="#" className="hover:text-gold-600 transition-colors relative group">
                  Jewelry
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-600 transition-all group-hover:w-full"></span>
                </a>
                <a href="#" className="hover:text-gold-600 transition-colors relative group">
                  Timepieces
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-600 transition-all group-hover:w-full"></span>
                </a>
                <a href="#" className="hover:text-gold-600 transition-colors relative group">
                  Designers
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-600 transition-all group-hover:w-full"></span>
                </a>
                <a href="#" className="hover:text-gold-600 transition-colors relative group">
                  Bridal
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-600 transition-all group-hover:w-full"></span>
                </a>
                <a href="#" className="hover:text-gold-600 transition-colors relative group">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-600 transition-all group-hover:w-full"></span>
                </a>
                <a href="#" className="hover:text-gold-600 transition-colors relative group">
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-600 transition-all group-hover:w-full"></span>
                </a>
             </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="py-8 px-8 flex flex-col space-y-6">
           <a href="#" className="block text-sm font-bold tracking-[0.2em] uppercase text-gray-800 border-b border-gray-100 pb-3">Jewelry</a>
            <a href="#" className="block text-sm font-bold tracking-[0.2em] uppercase text-gray-800 border-b border-gray-100 pb-3">Timepieces</a>
            <a href="#" className="block text-sm font-bold tracking-[0.2em] uppercase text-gray-800 border-b border-gray-100 pb-3">Designers</a>
            <a href="#" className="block text-sm font-bold tracking-[0.2em] uppercase text-gray-800 border-b border-gray-100 pb-3">Bridal</a>
            <a href="#" className="block text-sm font-bold tracking-[0.2em] uppercase text-gray-800 pb-3">Services</a>
        </div>
      </div>
    </header>
  );
};
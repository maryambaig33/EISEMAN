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
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-0' : 'py-2'}`}>
      {/* Top Bar */}
      <div className={`bg-luxury-black text-white transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0' : 'h-8'} flex items-center justify-center`}>
        <p className="text-[10px] tracking-[0.2em] uppercase font-medium">Complimentary 2-Day Shipping & Returns</p>
      </div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col relative">
          
          {/* Mobile Header Row */}
          <div className="flex justify-between items-center md:hidden py-4">
            <button 
              className="p-2 -ml-2 text-luxury-black"
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
               <button className="text-luxury-black relative">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-luxury-black text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">0</span>
               </button>
            </div>
          </div>

          {/* Desktop Logo Row */}
          <div className="hidden md:flex justify-between items-center py-6 border-b border-gray-100">
             <div className="w-1/3 flex space-x-8">
                <a href="#" className="text-[11px] font-bold text-gray-400 hover:text-luxury-black transition-colors uppercase tracking-[0.15em]">Locations</a>
                <a href="#" className="text-[11px] font-bold text-gray-400 hover:text-luxury-black transition-colors uppercase tracking-[0.15em]">Contact</a>
             </div>
             
             <div className="w-1/3 flex justify-center">
                <a href="#" className="text-4xl font-serif font-bold tracking-[0.2em] text-luxury-black ml-4">
                  EISEMAN
                </a>
             </div>

             <div className="w-1/3 flex justify-end items-center space-x-8">
                <div className="relative group">
                   <input type="text" placeholder="SEARCH" className="border-b border-gray-200 py-1 text-[10px] uppercase tracking-widest focus:outline-none focus:border-luxury-black w-24 transition-all focus:w-40 placeholder-gray-400 text-luxury-black bg-transparent" />
                   <svg className="w-3 h-3 absolute right-0 top-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <button className="text-gray-800 hover:text-gold-600 transition-colors">
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em]">Account</span>
                </button>
                 <button className="text-gray-800 hover:text-gold-600 transition-colors relative">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="absolute -top-1.5 -right-1.5 bg-luxury-black text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center">0</span>
                </button>
             </div>
          </div>

          {/* Desktop Nav Row */}
          <div className="hidden md:flex justify-center py-5">
             <nav className="flex space-x-14 text-[11px] font-bold tracking-[0.25em] uppercase text-luxury-black">
                {['Jewelry', 'Timepieces', 'Designers', 'Bridal', 'Services', 'About Us'].map((item) => (
                  <a key={item} href="#" className="hover:text-gold-600 transition-colors relative group">
                    {item}
                    <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-gold-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </a>
                ))}
             </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 top-[108px] bg-white z-40 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-8 space-y-6">
            {['Jewelry', 'Timepieces', 'Designers', 'Bridal', 'Services', 'About Us'].map((item) => (
               <a key={item} href="#" className="text-sm font-bold tracking-[0.2em] uppercase text-luxury-black border-b border-gray-100 pb-4 hover:text-gold-600 transition-colors">
                 {item}
               </a>
            ))}
        </div>
      </div>
    </header>
  );
};
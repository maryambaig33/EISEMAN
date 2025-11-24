import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4 pr-8">
             <a href="#" className="text-3xl font-serif font-bold tracking-[0.15em] text-white mb-8 block">
              EISEMAN
            </a>
            <p className="text-gray-400 text-xs leading-loose mb-8 font-sans tracking-wide max-w-xs">
              Defining luxury in Dallas since 1963. We are committed to offering the finest collection of jewels and timepieces with unparalleled service and expertise.
            </p>
            <div className="flex space-x-6 text-gray-400">
               {/* Social placeholders */}
               <div className="w-6 h-6 bg-white/10 rounded-none hover:bg-gold-600 transition-colors cursor-pointer"></div>
               <div className="w-6 h-6 bg-white/10 rounded-none hover:bg-gold-600 transition-colors cursor-pointer"></div>
               <div className="w-6 h-6 bg-white/10 rounded-none hover:bg-gold-600 transition-colors cursor-pointer"></div>
            </div>
          </div>

          {/* Spacer */}
          <div className="md:col-span-1"></div>

          {/* Links Column 1 */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-8 text-gold-500">Collection</h4>
            <ul className="space-y-5 text-[11px] font-medium text-gray-400 uppercase tracking-[0.15em]">
              <li><a href="#" className="hover:text-white transition-colors">Bridal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Timepieces</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fine Jewelry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Designers</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-8 text-gold-500">Concierge</h4>
            <ul className="space-y-5 text-[11px] font-medium text-gray-400 uppercase tracking-[0.15em]">
              <li><a href="#" className="hover:text-white transition-colors">Repairs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Appraisals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-8 text-gold-500">Newsletter</h4>
            <p className="text-gray-400 text-xs mb-8 leading-relaxed tracking-wide">Sign up to receive updates on new arrivals, exclusive events and special offers.</p>
            <div className="flex border-b border-gray-700 pb-3 relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent w-full text-white placeholder-gray-600 focus:outline-none text-[10px] tracking-[0.15em] uppercase font-bold"
              />
              <button className="text-gold-500 hover:text-white uppercase text-[9px] font-bold tracking-[0.25em] ml-2 absolute right-0 bottom-3">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-500 uppercase tracking-[0.2em]">
          <p>&copy; 2024 Eiseman Jewels. All Rights Reserved.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
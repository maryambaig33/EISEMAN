import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black text-white pt-20 pb-10 border-t border-gold-600/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1 pr-4">
             <a href="#" className="text-3xl font-serif font-bold tracking-widest text-white mb-6 block">
              EISEMAN
            </a>
            <p className="text-gray-400 text-xs leading-loose mb-6 font-sans">
              Defining luxury in Dallas since 1963. We are committed to offering the finest collection of jewels and timepieces with unparalleled service and expertise.
            </p>
            <div className="flex space-x-4 text-gray-400">
               {/* Social placeholders */}
               <div className="w-5 h-5 bg-gray-800 rounded-sm hover:bg-gold-600 transition-colors"></div>
               <div className="w-5 h-5 bg-gray-800 rounded-sm hover:bg-gold-600 transition-colors"></div>
               <div className="w-5 h-5 bg-gray-800 rounded-sm hover:bg-gold-600 transition-colors"></div>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-gold-500">Collection</h4>
            <ul className="space-y-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
              <li><a href="#" className="hover:text-white transition-colors">Bridal & Engagement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Timepieces</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fine Jewelry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Designers</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-gold-500">Concierge</h4>
            <ul className="space-y-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
              <li><a href="#" className="hover:text-white transition-colors">Repairs & Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Appraisals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-gold-500">Newsletter</h4>
            <p className="text-gray-400 text-xs mb-6 leading-relaxed">Sign up to receive updates on new arrivals, exclusive events and special offers.</p>
            <div className="flex border-b border-gray-600 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none text-xs tracking-wide"
              />
              <button className="text-gray-400 hover:text-white uppercase text-[10px] font-bold tracking-widest ml-2">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest">
          <p>&copy; 2024 Eiseman Jewels. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
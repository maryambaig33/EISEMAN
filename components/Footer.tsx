import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
             <a href="#" className="text-2xl font-serif font-bold tracking-widest text-white mb-6 block">
              EISEMAN
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Defining luxury in Dallas since 1963. We are committed to offering the finest collection of jewels and timepieces with unparalleled service.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gold-500">Collection</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Engagement Rings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Watches</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fine Jewelry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gold-500">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Repairs & Appraisals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sell Your Watch</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financing</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gold-500">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Be the first to know about new arrivals and exclusive events.</p>
            <div className="flex border-b border-gray-600 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none text-sm"
              />
              <button className="text-gray-400 hover:text-white uppercase text-xs font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2024 Eiseman Jewels. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
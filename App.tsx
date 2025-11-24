import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FilterSidebar } from './components/FilterSidebar';
import { ProductCard } from './components/ProductCard';
import { AIStylist } from './components/AIStylist';
import { Product, FilterState } from './types';

// Enhanced Mock Data
const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: "Oyster Perpetual Datejust 36", brand: "Rolex", price: 8950, category: "Watches", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800", isNew: true },
  { id: 2, name: "Panthère de Cartier Watch", brand: "Cartier", price: 4150, category: "Watches", image: "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Round Brilliant Diamond Solitaire", brand: "Eiseman Collection", price: 15500, category: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Move Romane Large Ring", brand: "Messika", price: 6850, category: "Rings", image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Celestial Amulet Necklace", brand: "Temple St. Clair", price: 2200, category: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Diamond Tennis Bracelet", brand: "Eiseman Collection", price: 9500, category: "Bracelets", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800", isNew: true },
  { id: 7, name: "Submariner Date", brand: "Rolex", price: 10250, category: "Watches", image: "https://images.unsplash.com/photo-1547996663-b855b979645d?auto=format&fit=crop&q=80&w=800" },
  { id: 8, name: "Love Bracelet, Small Model", brand: "Cartier", price: 4450, category: "Bracelets", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800" },
  { id: 9, name: "Diamond Stud Earrings 2ct", brand: "Eiseman Collection", price: 12000, category: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800" },
  { id: 10, name: "Rock Candy Gelato Bangle", brand: "Temple St. Clair", price: 3400, category: "Bracelets", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800" },
  { id: 11, name: "Baby Move Necklace", brand: "Messika", price: 2890, category: "Necklaces", image: "https://images.unsplash.com/photo-1602751584552-8ba420552259?auto=format&fit=crop&q=80&w=800" },
  { id: 12, name: "Day-Date 40", brand: "Rolex", price: 38500, category: "Watches", image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=800" },
  { id: 13, name: "Classic Fusion Titanium", brand: "Hublot", price: 7600, category: "Watches", image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800" },
  { id: 14, name: "Serpenti Viper Ring", brand: "Bvlgari", price: 5350, category: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800" },
  { id: 15, name: "Vintage Alhambra Necklace", brand: "Van Cleef & Arpels", price: 2950, category: "Necklaces", image: "https://images.unsplash.com/photo-1599643477877-53135397e201?auto=format&fit=crop&q=80&w=800" },
];

const App: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    brand: [],
    priceRange: [0, 50000]
  });

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const categoryMatch = filters.category.length === 0 || filters.category.includes(product.category);
      const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand);
      return categoryMatch && brandMatch;
    });
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-luxury-text bg-white">
      <Header />
      
      {/* Breadcrumbs & Title */}
      <div className="container mx-auto px-4 md:px-12 pt-12 pb-8">
        <nav className="text-[10px] uppercase tracking-widest text-gray-400 mb-6 font-bold">
            <a href="#" className="hover:text-gold-600">Home</a>
            <span className="mx-2">/</span>
            <span className="text-luxury-black">Jewelry</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-serif text-luxury-black mb-4 text-center">Jewelry & Timepieces</h1>
        <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto text-center font-serif italic">
          Explore our exclusive collection of unparalleled craftsmanship and design.
        </p>
      </div>

      <main className="container mx-auto px-4 md:px-12 flex-1 pb-20">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar */}
          <FilterSidebar filters={filters} setFilters={setFilters} />

          {/* Product Grid Area */}
          <div className="flex-1">
            
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">{filteredProducts.length} Items</span>
              
              <div className="flex items-center space-x-6">
                <div className="relative group">
                    <button className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-gray-800 hover:text-gold-600">
                        <span>Sort By</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-xl font-serif text-gray-400 italic">No items match your selection.</p>
                <button 
                  onClick={() => setFilters({ category: [], brand: [], priceRange: [0, 50000]})}
                  className="mt-6 px-6 py-2 border border-luxury-black text-xs font-bold uppercase tracking-widest hover:bg-luxury-black hover:text-white transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-20 border-t border-gray-100 pt-8 flex justify-center items-center space-x-2">
                 <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gold-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                 </button>
                <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-gray-500 hover:text-luxury-black">1</button>
                <button className="w-8 h-8 flex items-center justify-center text-xs font-bold bg-luxury-black text-white">2</button>
                <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-gray-500 hover:text-luxury-black">3</button>
                <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-gray-500 hover:text-luxury-black">4</button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gold-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                 </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <AIStylist inventory={MOCK_PRODUCTS} />
    </div>
  );
};

export default App;
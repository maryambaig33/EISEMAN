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
      
      {/* Page Title Section */}
      <div className="bg-luxury-light py-10 mb-8 border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-8 text-center">
             <h1 className="text-3xl md:text-4xl font-serif text-luxury-black mb-3">Jewelry & Timepieces</h1>
             <div className="flex justify-center items-center text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold space-x-2">
                <a href="#" className="hover:text-gold-600">Home</a>
                <span>/</span>
                <span className="text-luxury-black">Collection</span>
            </div>
          </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 flex-1 pb-20">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <FilterSidebar filters={filters} setFilters={setFilters} />

          {/* Product Grid Area */}
          <div className="flex-1">
            
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6 pb-2">
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">{filteredProducts.length} Results</span>
              
              <div className="flex items-center space-x-6">
                <div className="relative group cursor-pointer">
                    <button className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-gray-800 hover:text-gold-600">
                        <span>Sort By: Featured</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="py-24 text-center">
                <p className="text-xl font-serif text-gray-400 italic mb-4">No items match your specific criteria.</p>
                <button 
                  onClick={() => setFilters({ category: [], brand: [], priceRange: [0, 50000]})}
                  className="px-8 py-3 bg-luxury-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gold-600 transition-colors"
                >
                  View All Products
                </button>
              </div>
            )}

            {/* Pagination Simulation */}
            {filteredProducts.length > 0 && (
              <div className="mt-16 flex justify-center items-center space-x-1">
                 <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-luxury-black transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                 </button>
                <button className="w-10 h-10 flex items-center justify-center text-xs font-bold bg-gray-100 text-luxury-black border border-gray-200">1</button>
                <button className="w-10 h-10 flex items-center justify-center text-xs font-bold text-gray-500 hover:text-luxury-black hover:bg-gray-50">2</button>
                <button className="w-10 h-10 flex items-center justify-center text-xs font-bold text-gray-500 hover:text-luxury-black hover:bg-gray-50">3</button>
                <span className="w-10 h-10 flex items-center justify-center text-xs text-gray-400">...</span>
                <button className="w-10 h-10 flex items-center justify-center text-xs font-bold text-gray-500 hover:text-luxury-black hover:bg-gray-50">8</button>
                <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-luxury-black transition-colors">
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
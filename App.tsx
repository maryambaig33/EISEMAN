import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FilterSidebar } from './components/FilterSidebar';
import { ProductCard } from './components/ProductCard';
import { AIStylist } from './components/AIStylist';
import { Product, FilterState } from './types';

// Mock Data
const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: "Oyster Perpetual Datejust 36", brand: "Rolex", price: 8950, category: "Watches", image: "https://picsum.photos/400/400?random=1", isNew: true },
  { id: 2, name: "Panthère de Cartier Watch", brand: "Cartier", price: 4150, category: "Watches", image: "https://picsum.photos/400/400?random=2" },
  { id: 3, name: "Round Brilliant Diamond Solitaire", brand: "Eiseman Collection", price: 15500, category: "Rings", image: "https://picsum.photos/400/400?random=3" },
  { id: 4, name: "Move Romane Large Ring", brand: "Messika", price: 6850, category: "Rings", image: "https://picsum.photos/400/400?random=4" },
  { id: 5, name: "Celestial Amulet Necklace", brand: "Temple St. Clair", price: 2200, category: "Necklaces", image: "https://picsum.photos/400/400?random=5" },
  { id: 6, name: "Diamond Tennis Bracelet", brand: "Eiseman Collection", price: 9500, category: "Bracelets", image: "https://picsum.photos/400/400?random=6", isNew: true },
  { id: 7, name: "Submariner Date", brand: "Rolex", price: 10250, category: "Watches", image: "https://picsum.photos/400/400?random=7" },
  { id: 8, name: "Love Bracelet, Small Model", brand: "Cartier", price: 4450, category: "Bracelets", image: "https://picsum.photos/400/400?random=8" },
  { id: 9, name: "Diamond Stud Earrings 2ct", brand: "Eiseman Collection", price: 12000, category: "Earrings", image: "https://picsum.photos/400/400?random=9" },
  { id: 10, name: "Rock Candy Gelato Bangle", brand: "Temple St. Clair", price: 3400, category: "Bracelets", image: "https://picsum.photos/400/400?random=10" },
  { id: 11, name: "Baby Move Necklace", brand: "Messika", price: 2890, category: "Necklaces", image: "https://picsum.photos/400/400?random=11" },
  { id: 12, name: "Day-Date 40", brand: "Rolex", price: 38500, category: "Watches", image: "https://picsum.photos/400/400?random=12" },
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
      
      {/* Hero / Banner for Category */}
      <div className="bg-gray-50 py-16 mb-8 text-center border-b border-gray-100">
        <h1 className="text-4xl md:text-5xl font-serif text-luxury-black mb-4">Exquisite Collection</h1>
        <p className="text-gray-500 tracking-widest uppercase text-xs md:text-sm max-w-2xl mx-auto px-4">
          Discover our curated selection of fine jewelry and timepieces
        </p>
      </div>

      <main className="container mx-auto px-4 md:px-8 flex-1">
        <div className="flex flex-col md:flex-row">
          
          {/* Sidebar */}
          <FilterSidebar filters={filters} setFilters={setFilters} />

          {/* Product Grid */}
          <div className="flex-1">
            
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-500">{filteredProducts.length} Items Found</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 uppercase tracking-widest hidden md:inline">Sort By:</span>
                <select className="text-sm border-b border-gray-300 focus:border-gold-500 py-1 pr-8 bg-transparent focus:outline-none cursor-pointer">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-xl font-serif text-gray-400">No items match your selection.</p>
                <button 
                  onClick={() => setFilters({ category: [], brand: [], priceRange: [0, 50000]})}
                  className="mt-4 text-gold-600 underline hover:text-gold-500"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination Mockup */}
            {filteredProducts.length > 0 && (
              <div className="mt-16 flex justify-center space-x-2">
                <button className="w-10 h-10 flex items-center justify-center border border-luxury-black bg-luxury-black text-white">1</button>
                <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-luxury-black transition-colors">2</button>
                <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-luxury-black transition-colors">3</button>
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
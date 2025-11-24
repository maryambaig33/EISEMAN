import React from 'react';
import { FilterState } from '../types';

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, setFilters }) => {
  const categories = ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Watches'];
  const brands = ['Rolex', 'Cartier', 'Eiseman Collection', 'Messika', 'Temple St. Clair'];

  const toggleCategory = (cat: string) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category.includes(cat) 
        ? prev.category.filter(c => c !== cat)
        : [...prev.category, cat]
    }));
  };

  const toggleBrand = (brand: string) => {
    setFilters(prev => ({
      ...prev,
      brand: prev.brand.includes(brand) 
        ? prev.brand.filter(b => b !== brand)
        : [...prev.brand, brand]
    }));
  };

  return (
    <aside className="w-full md:w-64 flex-shrink-0 pr-0 md:pr-8 mb-8 md:mb-0">
      <div className="sticky top-24 space-y-8">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-luxury-black mb-4 pb-2 border-b border-gray-200">
            Category
          </h3>
          <div className="space-y-2">
            {categories.map(cat => (
              <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                <div className={`w-4 h-4 border transition-colors ${filters.category.includes(cat) ? 'bg-luxury-black border-luxury-black' : 'border-gray-300 group-hover:border-gold-500'}`}>
                   {filters.category.includes(cat) && (
                     <svg className="w-full h-full text-white p-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                     </svg>
                   )}
                </div>
                <input 
                  type="checkbox" 
                  className="hidden"
                  checked={filters.category.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                <span className={`text-sm ${filters.category.includes(cat) ? 'text-luxury-black font-semibold' : 'text-gray-600'}`}>
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-luxury-black mb-4 pb-2 border-b border-gray-200">
            Designers
          </h3>
          <div className="space-y-2">
            {brands.map(brand => (
              <label key={brand} className="flex items-center space-x-3 cursor-pointer group">
                <div className={`w-4 h-4 border transition-colors ${filters.brand.includes(brand) ? 'bg-luxury-black border-luxury-black' : 'border-gray-300 group-hover:border-gold-500'}`}>
                    {filters.brand.includes(brand) && (
                     <svg className="w-full h-full text-white p-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                     </svg>
                   )}
                </div>
                <input 
                  type="checkbox" 
                  className="hidden"
                  checked={filters.brand.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                />
                <span className={`text-sm ${filters.brand.includes(brand) ? 'text-luxury-black font-semibold' : 'text-gray-600'}`}>
                  {brand}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
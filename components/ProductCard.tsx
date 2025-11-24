import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-[#fafafa] mb-5">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain p-8 transform transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 shadow-sm border border-gray-100 text-gray-800">
            New
          </span>
        )}
        
        {/* Quick View Overlay */}
        <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
             <button className="w-full bg-white/95 backdrop-blur-sm text-luxury-black py-4 text-xs font-bold uppercase tracking-widest border-t border-gray-100 hover:bg-luxury-black hover:text-white transition-colors">
                Quick View
            </button>
        </div>
      </div>
      
      <div className="text-center space-y-2 flex-grow flex flex-col justify-between">
        <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-1.5">{product.brand}</h3>
            <h2 className="text-base font-medium text-luxury-black font-serif leading-snug group-hover:text-gold-600 transition-colors">
            {product.name}
            </h2>
        </div>
        <p className="text-sm text-gray-900 font-sans tracking-wide mt-2">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
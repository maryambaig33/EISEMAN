import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer flex flex-col h-full bg-white">
      <div className="relative aspect-square overflow-hidden bg-[#fafafa] mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain p-8 transform transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute top-0 left-0 bg-white text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-2 border-r border-b border-gray-100 text-luxury-black">
            New Arrival
          </span>
        )}
        
        {/* Quick View Overlay */}
        <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
             <button className="w-full bg-white/95 backdrop-blur-sm text-luxury-black py-3 text-[10px] font-bold uppercase tracking-[0.2em] border-t border-gray-100 hover:bg-luxury-black hover:text-white transition-colors">
                Quick View
            </button>
        </div>
      </div>
      
      <div className="text-center space-y-1.5 flex-grow flex flex-col items-center">
        <h3 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">{product.brand}</h3>
        <h2 className="text-sm font-medium text-luxury-black font-serif leading-relaxed group-hover:text-gold-600 transition-colors px-2">
           {product.name}
        </h2>
        <p className="text-sm text-gray-900 font-sans tracking-wider mt-1">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer flex flex-col h-full bg-white">
      <div className="relative aspect-square overflow-hidden bg-gray-50 mb-5">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        {product.isNew && (
          <span className="absolute top-0 left-0 bg-white/90 backdrop-blur-sm text-[9px] font-bold tracking-[0.2em] uppercase px-4 py-2 text-luxury-black shadow-sm">
            New Arrival
          </span>
        )}
        
        {/* Quick View Overlay */}
        <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
             <button className="w-full bg-white/95 backdrop-blur-md text-luxury-black py-4 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-luxury-black hover:text-white transition-colors border-t border-gray-100">
                Quick View
            </button>
        </div>
      </div>
      
      <div className="text-center space-y-2 flex-grow flex flex-col items-center px-2">
        <h3 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">{product.brand}</h3>
        <h2 className="text-base font-serif text-luxury-black leading-snug group-hover:text-gold-600 transition-colors">
           {product.name}
        </h2>
        <p className="text-xs font-bold text-luxury-black tracking-widest mt-1">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
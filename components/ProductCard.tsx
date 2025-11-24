import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden bg-gray-50 mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-white/90 text-[10px] font-bold tracking-widest uppercase px-2 py-1">
            New Arrival
          </span>
        )}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick actions that appear on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm border-t border-gray-100 flex justify-center">
            <button className="text-xs font-bold uppercase tracking-widest text-luxury-black hover:text-gold-600">
                Quick View
            </button>
        </div>
      </div>
      
      <div className="text-center space-y-1">
        <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase">{product.brand}</h3>
        <h2 className="text-sm font-medium text-luxury-black line-clamp-2 min-h-[40px] px-2 font-serif leading-relaxed">
          {product.name}
        </h2>
        <p className="text-sm text-gold-600 font-semibold mt-2">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
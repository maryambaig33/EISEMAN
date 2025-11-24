export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  category: string;
  image: string;
  material?: string;
  gemstone?: string;
  isNew?: boolean;
}

export interface FilterState {
  category: string[];
  brand: string[];
  priceRange: [number, number];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
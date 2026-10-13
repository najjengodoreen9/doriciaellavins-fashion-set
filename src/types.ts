export type Category = 'all' | 'kids' | 'women' | 'gentlemen';

export type Occasion = 'all' | 'wedding' | 'birthday' | 'gala' | 'traditional' | 'suits';

export interface Product {
  id: string;
  name: string;
  category: 'kids' | 'women' | 'gentlemen';
  occasion: 'wedding' | 'birthday' | 'gala' | 'traditional' | 'suits';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  secondaryImage?: string;
  badge?: string;
  description: string;
  fabric: string;
  embroidery: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  isNewArrival?: boolean;
  isSpecialOccasion?: boolean;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: { name: string; hex: string };
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  title: string;
  content: string;
  occasion: string;
  date: string;
  verified: boolean;
}

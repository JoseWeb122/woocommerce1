export type ProductCategory = 
  | 't-shirts' 
  | 'hoodies-sweatshirts' 
  | 'bottoms' 
  | 'outerwear' 
  | 'accessories'
  | 'unrelated-review';

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface SizeMeasurement {
  size: string;
  lengthInches?: number;
  lengthCm?: number;
  chestInches?: number;
  chestCm?: number;
  shoulderInches?: number;
  shoulderCm?: number;
  waistInches?: number;
  waistCm?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  price: number;
  compareAtPrice?: number;
  category: ProductCategory;
  categoryName: string;
  description: string;
  fabric?: string;
  fabricWeight?: string;
  fit?: string;
  careInstructions?: string[];
  features?: string[];
  images: string[];
  colors: ProductColor[];
  sizes: string[];
  sizeChart?: SizeMeasurement[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  inStock: boolean;
  source: 'Tapstitch' | 'WooCommerce Sample';
  flaggedForReview?: boolean;
  flagReason?: string;
}

export interface CartItem {
  id: string; // unique item id composed of productId-color-size
  productId: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

export interface WishlistItem {
  productId: string;
  addedAt: number;
}

export type SortOption = 
  | 'featured'
  | 'newest'
  | 'price-asc'
  | 'price-desc'
  | 'name-asc';

export interface FilterState {
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  selectedSizes: string[];
  selectedColors: string[];
  onlyInStock?: boolean;
  searchQuery?: string;
}

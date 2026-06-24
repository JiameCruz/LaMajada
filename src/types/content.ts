export interface MenuItemDisplay {
  id?: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  price: number;
}

export interface PromoDisplay {
  id?: string;
  image: string;
  description: string;
  alt: string;
}

export type MenuCategory = 'platos' | 'bebidas';

export interface Product {
  id: number;
  name: string;
  brand: string;
  model: string;
  category: string;
  description: string;
  shoeSize: number[];
  price: number;
  discount: number;
  stock: number;

  image: string;
}

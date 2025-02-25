export interface Product {
  id: number;
  name: string;
  brand: string;
  model: string;
  category: string;
  description: string;
  shoeSize: number;
  price: number;
  discount: number;
  stock: number;

  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Zapato Deportivo',
    brand: 'Nike',
    model: 'Air Zoom Pegasus 39',
    category: 'Deportivo',
    description: 'Ideal para correr y entrenar.',
    shoeSize: 42,
    price: 150000,
    discount: 10, // 10% de descuento
    stock: 25,
    image: 'https://i.etsystatic.com/35428788/r/il/30062a/5883368804/il_1080xN.5883368804_l6wt.jpg'
  },
  {
    id: 2,
    name: 'Zapato Casual',
    brand: 'Adidas',
    model: 'Stan Smith',
    category: 'Casual',
    description: 'Perfecto para el día a día.',
    shoeSize: 41,
    price: 130000,
    discount: 5, // 5% de descuento
    stock: 15,
    image: 'https://media.revistagq.com/photos/61c1a2e83a8adbe7b237d793/3:2/w_6891,h_4594,c_limit/GettyImages-1326397440.jpg'
  },
  {
    id: 3,
    name: 'Zapato Formal',
    brand: 'Clarks',
    model: 'Tilden Cap',
    category: 'Formal',
    description: 'Elegancia y comodidad.',
    shoeSize: 43,
    price: 120000,
    discount: 0, // Sin descuento
    stock: 10,
    image: 'https://img.freepik.com/foto-gratis/zapatero-taller-haciendo-zapatos_171337-12252.jpg'
  }
];

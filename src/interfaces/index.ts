export interface Category {
  _id: string;
  name: string;
  description?: string;
}
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[]; 
  category: string;
  stock: number;  
  createdAt?: string;
  updatedAt?: string;
}
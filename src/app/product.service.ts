import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: '1', name: 'Product 1', price: 10, quantity: 1 },
    { id: '2', name: 'Product 2', price: 20, quantity: 1 },
  ];

  getProducts(): Product[] {
    return this.products;
  }


}

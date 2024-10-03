import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  imports: [CommonModule]
})
export class ProductListComponent implements OnInit {
  products!: Product[];

  constructor(private cartService: CartService,  private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAddToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}

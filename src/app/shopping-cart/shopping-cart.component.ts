import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  imports: [CommonModule, FormsModule]
})
export class ShoppingCartComponent {
  constructor(private cartService: CartService) {}

  // Getter for cart
  get cart() {
    return this.cartService.getCart();
  }

  // Getter for total
  get total() {
    return this.cartService.total();
  }

  onRemoveFromCart(productId: string) {
    this.cartService.removeProduct(productId);
  }

  onUpdateQuantity(productId: string, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
  }
}

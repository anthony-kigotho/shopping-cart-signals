import { computed, Injectable, signal } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = signal<ReadonlyArray<Product>>([]);

  // Computed signal for calculating the total price of the cart
  total = computed(() =>
    this.cart().reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  );

  // Get the current cart
  getCart() {
    return this.cart();
  }

  // Add a product to the cart
  addProduct(product: Product) {
    const currentCart = this.cart();
    const existingProduct = currentCart.find((p) => p.id === product.id);

    if (existingProduct) {
      // Update quantity if product exists
      this.cart.update((cart) =>
        cart.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        )
      );
    } else {
      // Add new product if it does not exist
      this.cart.update((cart) => [...cart, product]);
    }
  }

  // Remove a product from the cart
  removeProduct(productId: string) {
    this.cart.update((cart) => cart.filter((p) => p.id !== productId));
  }

  // Update product quantity
  updateQuantity(productId: string, quantity: number) {
    this.cart.update((cart) =>
      cart.map((p) => (p.id === productId ? { ...p, quantity } : p))
    );
  }

}

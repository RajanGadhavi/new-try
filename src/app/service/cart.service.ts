import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Makes the service available application-wide
})
export class CartService {
  private cart: Array<{ id: number | string; title: string; price: number; imgPath: string; quantity: number }> = [];

  // Add a product to the cart
  addToCart(product: { id: number | string; title: string; price: number; imgPath: string }) {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++; // Increment quantity if the product already exists
    } else {
      this.cart.push({ ...product, quantity: 1 }); // Add new product with quantity 1
    }
  }

  // Remove a product from the cart
  removeFromCart(productId: number | string) {
    this.cart = this.cart.filter((item) => item.id !== productId);
  }

  // Get all products in the cart
  getCart() {
    return this.cart;
  }

  // Clear the cart
  clearCart() {
    this.cart = [];
  }
}
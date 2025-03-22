import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  product:
    | {
        id: number | string;
        title: string;
        price: number;
        imgPath: string;
      }
    | undefined;

  quantity: number = 1;
  total?: number;

  cart: Array<{
    id: number | string;
    title: string;
    price: number;
    imgPath: string;
    quantity: number;
  }> = [];

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.product = history.state.product;
    if (this.product) {
      const price = Number(this.product.price);
      this.total = price * this.quantity;
    }
    this.updateTotal();
  }

  increase(productId : number | string) {
    const product = this.cart.find((item) => item.id === productId);
    if (product) {
      this.quantity++;
      this.updateTotal();
    }
  }

  reduce(productId : number | string) {
    const product = this.cart.find((item) => item.id === productId);
    if (product && product.quantity > 1) {
      this.quantity--;
      this.updateTotal();
    }
  }

  removeFromCart(productId : number | string) {
    this.cartService.removeFromCart(productId);
    this.cart = this.cartService.getCart();
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  
}

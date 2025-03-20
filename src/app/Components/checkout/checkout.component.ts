import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [],
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  product:
    | {
        id: number | string;
        title: string;
        price: number;
        imgPath: string;
      }
    | undefined;

  shipping?: number;
  tax?: number;
  total?: number;
  quantity: number = 1;

  constructor(private router: Router) {}

  ngOnInit() {
    this.product = history.state.product;
    if (this.product) {
      const price = Number(this.product.price);
      this.shipping = price * 0.1;
      this.tax = price * 0.15;
      this.total = price + this.shipping + this.tax;
    }
  }

  increase() {
    this.quantity++;
    this.updateTotal();
  }

  reduce() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateTotal();
    }
  }

  updateTotal() {
    if (this.product) {
      const price = Number(this.product.price);
      this.total = this.quantity * (price + price * 0.1 + price * 0.15);
    }}
}

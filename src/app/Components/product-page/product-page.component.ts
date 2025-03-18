import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product!: { id: number; title: string; price: number | string; imgPath: string; };

  @Input() imgPath: string = '';
  @Input() title: string = '';
  @Input() price: number | string = '';
  @Input() id: number | string = '';

  constructor(private route: Router) {}

  ngOnInit() {
    console.log('ProductPageComponent initialized');
    this.product = history.state.product;
    this.title = history.state.title;
    this.price = history.state.price;
    this.imgPath = history.state.imgPath;
    this.id = history.state.id;

    if (!this.product) {
      this.route.navigate(['/']);
      console.log('Product not found');
    }
  }
}

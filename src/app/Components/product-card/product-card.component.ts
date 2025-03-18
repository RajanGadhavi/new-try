import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {

  @Input() product!: { id: number; title: string; price: number | string; imgPath: string; };
  
  @Input() imgPath: string = '';
  @Input() title: string = '';
  @Input() price: number | string = '';
  @Input() id: number | string = '';

  constructor(private router: Router) {}

  openProduct() {
    this.router.navigate(['/product'],{
      state:{imgPath:this.imgPath,title:this.title,price:this.price,id:this.id,product:this.product}
    });
  }
}

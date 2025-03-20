import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router} from '@angular/router';

export interface ProductInterface{
  imgPath: string ;
  title: string;
  price: number | string;
  id: number | string; 
}

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'], 
})

export class ProductCardComponent {
  
  @Input() imgPath: string = '';
  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() id: number = 0;

  constructor(private router : Router) {}

  sendData() {
    this.router.navigate(['/product'], {
      state: {
        product: {
          id: this.id,
          title: this.title,
          price: this.price,
          imgPath: this.imgPath,
        },
      },
    });
  }

  buyNow() {
    this.router.navigate(['/checkout'], {
      state: {
        product: {
          id: this.id,
          title: this.title,
          price: this.price,
          imgPath: this.imgPath,
        },
      },
    });
  }

}

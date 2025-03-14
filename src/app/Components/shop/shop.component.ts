import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-shop',
  imports: [ProductCardComponent],
  standalone:true,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}

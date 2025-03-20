import { Component } from '@angular/core';
import { ProductCardComponent, ProductInterface } from "../product-card/product-card.component";

@Component({
  selector: 'app-homepage',
  imports: [ProductCardComponent],
  standalone:true,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {  
  
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component'
import { HomepageComponent } from "./Components/homepage/homepage.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { ShopComponent } from "./Components/shop/shop.component";
import { ProductPageComponent } from "./Components/product-page/product-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ProductPageComponent],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-try';
}

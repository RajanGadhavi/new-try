import { Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CartComponent } from './Components/cart/cart.component';
import { AccountComponent } from './Components/account/account.component';
import { ProfileComponent } from './Components/userprofile/userprofile.component';
import { AuthGuard } from './Guard/auth.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomepageComponent
    },
    {
        path:'shop',
        component:ShopComponent
    },
    {
        path:'product',
        component:ProductPageComponent
    },
    {
        path:'checkout',
        component:CheckoutComponent
    },
    {
        path:'cart',
        component:CartComponent 
    },
    {
        path:'account',
        component:AccountComponent,
    },
    {
        path:'userprofile',
        component:ProfileComponent
    },
    {
        path:'**',  // Wildcard route for a 404 page
        component:PagenotfoundComponent
    }
];

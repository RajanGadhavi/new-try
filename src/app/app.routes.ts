import { Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ShopComponent } from './Components/shop/shop.component';

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
    }
];

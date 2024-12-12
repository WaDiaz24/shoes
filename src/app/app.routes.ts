import { Routes } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { ProductsComponent } from './app/pages/products/products.component';
import { PurchaseComponent } from './app/pages/purchase/purchase.component';
import { ContactComponent } from './app/pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  {path: 'purchase', component: PurchaseComponent},
  {path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: '' },
 
];

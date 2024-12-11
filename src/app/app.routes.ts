import { Routes } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { ProductsComponent } from './app/pages/products/products.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: '' },
];

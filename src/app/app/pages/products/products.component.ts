import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../api/model/products';
import { allProducts } from '../../api/model/all-products';
import { ProductCardComponent } from "../../../components/product-card/product-card.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, CommonModule, ProductCardComponent],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  allProducts: Product[] = [];
  ngOnInit(): void {
    this.allProducts = allProducts
  }
}

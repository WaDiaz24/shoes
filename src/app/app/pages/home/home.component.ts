import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../api/model/products';
import { CommonModule, NgFor} from '@angular/common';
import { ProductCardComponent } from "../../../components/product-card/product-card.component";
import { allProducts } from '../../api/model/all-products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, CommonModule, ProductCardComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  listOfFeaturedProducts: Product[] = [];

  ngOnInit(): void {
    this.listOfFeaturedProducts = allProducts.slice(0,3);
  }

}

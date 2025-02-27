import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product, products } from '../../api/model/products';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ProductCardComponent } from "../../../components/product-card/product-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, CommonModule, ProductCardComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  listOfFeaturedProducts: Product[] = [];

  ngOnInit(): void {
    this.listOfFeaturedProducts = products;
  }

}

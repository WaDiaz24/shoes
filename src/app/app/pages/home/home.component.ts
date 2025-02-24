import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product, products } from '../../api/model/products';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  listOfFeaturedProducts: Product[] = [];

  ngOnInit(): void {
    this.listOfFeaturedProducts = products;
  }

  constructor(private readonly router: Router) { }
  
    goToCheckout(product: any) {
      this.router.navigate(['/purchase'], { state: {product} });
    }
  
    calculateOriginalPrice(price: string, discount: number): string {
      const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
      const originalPrice = numericPrice / (1 - discount / 100);
      return `$${originalPrice.toFixed(0)} COP`;
    }
    
}

import { Component, OnInit} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product, products } from '../../api/model/products';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, CommonModule],
  templateUrl: './home.component.html'
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
  
    calculateDiscountedPrice(price: number, discount: number): string {
      const discountedPrice  = price - (price * discount / 100);
      return `$${discountedPrice .toFixed(0)}`;
    }
    
}

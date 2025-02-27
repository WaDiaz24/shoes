import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../api/model/products';
import { allProducts } from '../../api/model/all-products';
import { PriceCalculatorService } from '../../../services/price-calculator.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  allProducts: Product[] = [];

  constructor(private readonly priceCalculator: PriceCalculatorService, private readonly router: Router) { }
  getDiscountPrice(price: number, discount: number): string{
    return this.priceCalculator.calculateDiscountedPrice(price, discount);
  }

  ngOnInit(): void{
      this.allProducts = allProducts
  }

  goToCheckout(product: any) {
    this.router.navigate(['/purchase'], { state: {product} });
  }

}

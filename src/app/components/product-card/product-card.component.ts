import { Component, Input } from '@angular/core';
import { Product } from '../../app/api/model/products';
import { CommonModule } from '@angular/common';
import { PriceCalculatorService } from '../../services/price-calculator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() highlight?: boolean = false;
  @Input() compact?: boolean = false;

  constructor(
    private readonly priceCalculator: PriceCalculatorService,
    private readonly router: Router
  ) { }

  getDiscountPrice(price: number, discount: number): number {
    return this.priceCalculator.calculateDiscountedPrice(price, discount);
  }

  goToCheckout(product: any) {
    this.router.navigate(["/purchase"], { state: { product } });
  }
}

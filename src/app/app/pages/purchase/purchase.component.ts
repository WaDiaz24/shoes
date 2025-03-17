import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../api/model/products';
import { PriceCalculatorService } from '../../../services/price-calculator.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchase.component.html'
})
export class PurchaseComponent{
  product?: Product;

  constructor(private readonly router: Router, private readonly  priceCalculator: PriceCalculatorService){
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras.state?.['product'] || null;
  }

  getDiscountPrice(price: number, discount: number): number {
    return this.priceCalculator.calculateDiscountedPrice(price, discount);
  }

}

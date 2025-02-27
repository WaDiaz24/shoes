import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceCalculatorService {

  constructor() { }

  calculateDiscountedPrice(price: number, discount: number): number {
    const discountedPrice  = price - (price * discount / 100);
    return Math.round(discountedPrice);
  }
}

import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../app/api/model/products';
import { allProducts } from '../../app/api/model/all-products';
import { PriceCalculatorService } from '../../services/price-calculator.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  details: { label: string; value: string }[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly priceCalculator: PriceCalculatorService
  ) {}
  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    // Busca el producto en la lista
    this.product = allProducts.find((p) => p.id === productId);
    console.log("ID", this.product?.id);
    // Si el producto existe, genera los detalles dinámicamente
    if (this.product) {
      this.generateDetails(this.product);
    }
  }

  generateDetails(product: Product): void {
    this.details = [
      { label: 'Marca', value: product.brand },
      { label: 'Modelo', value: product.model },
      { label: 'Categoría', value: product.category }
    ]
  }

   getDiscountPrice(price: number, discount: number): number{
    return this.priceCalculator.calculateDiscountedPrice(price, discount);
  }

}

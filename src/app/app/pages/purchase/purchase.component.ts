import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [],
  templateUrl: './purchase.component.html'
})
export class PurchaseComponent{
  product: any;

  constructor(private readonly router: Router){
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras.state?.['product'] || null;
  }

}

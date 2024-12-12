import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [NgIf],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent{
  product: any;

  constructor(private router: Router){
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras.state?.['product'] || null;
  }

}

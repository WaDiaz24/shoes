import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../app/api/model/products';
import { SidebarService } from '../../services/sidebar.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,  FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: Product[] = [];
  isSidebarOpen = false;

  constructor(private readonly cartService: CartService,
    private readonly sidebarService: SidebarService
  ){}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
    this.sidebarService.isSidebarOpen$.subscribe((isOpen) => {
      this.isSidebarOpen = isOpen;
    });
  }

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }

  closeSidebar(): void {
    this.sidebarService.closeSidebar();
  }

  
  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  updateQuantity(item: Product): void {
    if (item.quantity < 1) {
      item.quantity = 1; // Asegurarse de que la cantidad no sea menor a 1
    }
    this.cartService.updateCartItem(item); // Actualiza el carrito en el servicio
  }

}

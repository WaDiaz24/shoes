import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../app/api/model/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItems.asObservable();
  
  constructor() { }
  addToCart(product: Product ){
    const currentItems = this.cartItems.value;
    this.cartItems.next([...currentItems, product]);
  }

  getCartItems(): Product[] {
    return this.cartItems.value;
  }
  
  removeFromCart(productId: number){
    const currentItems = this.cartItems.value.filter(item => item.id != productId);
    this.cartItems.next(currentItems);
  }

  clearCart(){
    this.cartItems.next( []);
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

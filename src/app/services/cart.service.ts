import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../app/api/model/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly cartItems = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItems.asObservable();
  
  constructor() { }
  addToCart(product: Product ): void{
    const currentItems = this.cartItems.value;
    const existingProduct = currentItems.find((item) => item.id === product.id);
    if(existingProduct) {
      existingProduct.quantity += 1;
    }else {
      currentItems.push({...product, quantity: 1});
    }
    this.cartItems.next([...currentItems]);
  }

  getCartItems(): Product[] {
    return this.cartItems.value;
  }
  
  removeFromCart(productId: number): void{
    const currentItems = this.cartItems.value
    .map((item) => {
      if (item.id === productId){
        item.quantity -= 1;
      }
      return item;
    }).filter((item) => item.quantity > 0);
    this.cartItems.next(currentItems);
  }

  clearCart(){
    this.cartItems.next( []);
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  updateCartItem(updatedItem: Product): void {
    const cartItems = this.cartItems.value.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    this.cartItems.next(cartItems); // Emitir los cambios al observable
  }
}

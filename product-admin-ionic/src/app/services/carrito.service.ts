import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cartKey = 'cart';

  constructor() { }

  addToCart(product: any) {
    let cart = this.getCart();
    if (!cart) {
      cart = [];
    }
    cart.push(product);
    this.saveCart(cart);
  }

  removeFromCart(productId: number) {
    let cart = this.getCart();
    if (!cart) {
      return;
    }
    cart = cart.filter(item => item.id !== productId);
    this.saveCart(cart);
  }

  getCart(): any[] {
    const cartJson = localStorage.getItem(this.cartKey);
    return cartJson ? JSON.parse(cartJson) : null;
  }

  saveCart(cart: any[]) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  calculateTotal() {
    const cart = this.getCart();
    if (!cart) {
      return 0;
    }
    return cart.reduce((total, item) => total + item.price, 0);
  }
}

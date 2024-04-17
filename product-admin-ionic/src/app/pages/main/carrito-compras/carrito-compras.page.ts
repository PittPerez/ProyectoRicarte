import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.page.html',
  styleUrls: ['./carrito-compras.page.scss'],
})
export class CarritoComprasPage {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private modalController: ModalController, private navParams: NavParams) {
    this.cartItems = this.navParams.get('cartItems') || [];
    const product = this.navParams.get('product');
    if (product) {
      this.addOrUpdateProduct(product);
      this.saveCartToLocalStorage();
    }

    this.calculateTotal();
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.saveCartToLocalStorage();
      this.calculateTotal();
    }
  }

  closeCart() {
    this.modalController.dismiss();
  }

  
  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.saveCartToLocalStorage();
      this.calculateTotal();
    }
  }

  incrementQuantity(item: any) {
    item.quantity++;
    this.saveCartToLocalStorage();
    this.calculateTotal();
  }

  private saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  private calculateTotal() {
    this.total = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  private addOrUpdateProduct(product: any) {
    const existingProduct = this.cartItems.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      product.quantity = 1;
      this.cartItems.push(product);
    }
  }
}

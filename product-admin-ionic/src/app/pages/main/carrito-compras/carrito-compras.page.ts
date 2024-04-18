import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

declare var paypal: any; // Declaramos la variable paypal

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

  procesarPago() {
    // Cargar el script de PayPal de forma dinámica
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AS6_d7xjB0mqXD5WtbK2_xEm5AQLOKVgACVGqSvJis1OBNO0yxoRtj8doiKwIrQtacvtzHOnqwqEel3d';
    script.onload = () => {
      // Una vez cargado el script, renderiza el botón de PayPal
      paypal.Buttons({
        style: {
          color: 'blue',
          shape: 'pill',
          label: 'pay'
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: this.total.toString() // Pasamos el total del carrito como valor del pago
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            console.log(details);
            window.location.href = "pagocompleto.html";
          });
        },
        onCancel: (data) => {
          alert("Pago cancelado");
          console.log(data);
        }
      }).render('#paypal-button-container');
    };
    document.body.appendChild(script);
  }
}

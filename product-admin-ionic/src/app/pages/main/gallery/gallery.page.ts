import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CakeDetailsPage } from '../cake-details/cake-details.page';
import { CarritoComprasPage } from '../carrito-compras/carrito-compras.page';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage {
  products = [
    { id: 1, name: 'Pastel de Chocolate', imgUrl: 'assets/img/1.jpg', price: 50, description: 'Delicioso pastel de chocolate.' },
    { id: 2, name: 'Pastel de Fresa', imgUrl: 'assets/img/8.jpg', price: 50, description: 'Jugoso pastel de fresa.' },
    { id: 3, name: 'Pastel de Fresa', imgUrl: 'assets/img/3.jpg', price: 50, description: 'Jugoso pastel de fresa.' },
    { id: 4, name: 'Pastel de Chocolate', imgUrl: 'assets/img/10.jpg', price: 50, description: 'Delicioso pastel de chocolate.' },
    { id: 5, name: 'Pastel de Fresa', imgUrl: 'assets/img/4.jpg', price: 50, description: 'Jugoso pastel de fresa.' },
    { id: 6, name: 'Pastel de Fresa', imgUrl: 'assets/img/11.jpg', price: 50, description: 'Jugoso pastel de fresa.' },
    { id: 7, name: 'Pastel de Chocolate', imgUrl: 'assets/img/2.jpg', price: 50, description: 'Delicioso pastel de chocolate.' },
    { id: 8, name: 'Pastel de Fresa', imgUrl: 'assets/img/5.jpg', price: 50, description: 'Jugoso pastel de fresa.' },
    { id: 9, name: 'Pastel de Fresa', imgUrl: 'assets/img/6.jpg', price: 50, description: 'Jugoso pastel de fresa.' },
  ];
  cartItems: any[] = [];

  constructor(private modalController: ModalController) {}

  async openProductModal(product: any) {
    const modal = await this.modalController.create({
      component: CakeDetailsPage,
      componentProps: {
        product: product
      }
    });

    return await modal.present();
  }

  async addToCart(product: any) {
    const modal = await this.modalController.create({
      component: CarritoComprasPage,
      componentProps: {
        product: product,
        cartItems: this.cartItems
      }
    });

    modal.onDidDismiss().then((data) => {
      if (data && data.data && data.data.item) {
        this.cartItems.push(data.data.item);
      }
    });

    return await modal.present();
  }

  async goToCart() {
    const modal = await this.modalController.create({
      component: CarritoComprasPage,
      componentProps: {
        cartItems: this.cartItems
      }
    });

    return await modal.present();
  }
}
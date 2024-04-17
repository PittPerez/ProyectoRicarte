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
    { id: 1, name: 'Pastel de Cumpleaños', imgUrl: 'assets/img/1.jpg', price: 350, description: 'Delicioso pastel de chocolate con butter cream.' },
    { id: 2, name: 'Pastel Tradicional', imgUrl: 'assets/img/8.jpg', price: 450, description: 'Jugoso pastel sabor fresa, decorado con chantilly.' },
    { id: 3, name: 'Pastel de Choconaranja', imgUrl: 'assets/img/3.jpg', price: 400, description: 'Pastel sabor chocolate con naranja.' },
    { id: 4, name: 'Pastel de Quinceaños', imgUrl: 'assets/img/10.jpg', price: 1500, description: 'Pastel de chocolate de dos pisos, con hoja dorada y drip blanco.' },
    { id: 5, name: 'Pastel de Boda', imgUrl: 'assets/img/4.jpg', price: 2500, description: 'Pastel de vainilla de 3 pisos, con toques dorados y plantas verdes.' },
    { id: 6, name: 'Pastel de Quinceaños', imgUrl: 'assets/img/11.jpg', price: 200, description: 'Pastel de red velvet de 3 pisos con decoración en rosa y toque dorados.' },
    { id: 7, name: 'Pastel de Cumpleaños', imgUrl: 'assets/img/2.jpg', price: 500, description: 'Pastel de fresa color blanco con perlitas.' },
    { id: 8, name: 'Pastel de Cumpleaños', imgUrl: 'assets/img/5.jpg', price: 700, description: 'Pastel red velvet de color rojo, decorado con una flor.' },
    { id: 9, name: 'Pastel de Cumpleaños', imgUrl: 'assets/img/6.jpg', price: 800, description: 'Pastel de vainilla con drip rosa.' },
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
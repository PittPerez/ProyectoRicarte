import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; // Importa ModalController
import { CakeDetailsPage } from '../cake-details/cake-details.page';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  products = [
    { name: 'Pastel de Chocolate', imgUrl: 'assets/img/pastelchocolate.jpg', price:50, description: 'Delicioso pastel de chocolate.' },
    { name: 'Pastel de Fresa', imgUrl: 'assets/img/pastelchoconaranja.jpg',price:50, description: 'Jugoso pastel de fresa.' },
    { name: 'Pastel de Fresa', imgUrl: 'assets/img/pastelfresa.jpg', price:50, description: 'Jugoso pastel de fresa.' },
    // Agrega más pasteles aquí
  ];

  constructor(private modalController: ModalController) {} // Inyecta ModalController

  ngOnInit() {
  }

  async openProductModal(product: any) {
    const modal = await this.modalController.create({
      component: CakeDetailsPage,
      componentProps: {
        product: product
      }
    });
  
    return await modal.present();
  }
  
}
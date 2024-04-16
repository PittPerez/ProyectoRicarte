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
    { name: 'Pastel de Chocolate', imgUrl: 'assets/img/1.jpg', price:50, description: 'Delicioso pastel de chocolate.' },
    { name: 'Pastel de Fresa', imgUrl: 'assets/img/8.jpg',price:50, description: 'Jugoso pastel de fresa.' },
    { name: 'Pastel de Fresa', imgUrl: 'assets/img/3.jpg', price:50, description: 'Jugoso pastel de fresa.' },
    { name: 'Pastel de Chocolate', imgUrl: 'assets/img/10.jpg', price:50, description: 'Delicioso pastel de chocolate.' },
    { name: 'Pastel de Fresa', imgUrl: 'assets/img/4.jpg',price:50, description: 'Jugoso pastel de fresa.' },
    { name: 'Pastel de Fresa', imgUrl: 'assets/img/11.jpg', price:50, description: 'Jugoso pastel de fresa.' },
    { name: 'Pastel de Chocolate', imgUrl: 'assets/img/2.jpg', price:50, description: 'Delicioso pastel de chocolate.' },
    { name: 'Pastel de Fresa', imgUrl: 'assets/img/5.jpg',price:50, description: 'Jugoso pastel de fresa.' },
    { name: 'Pastel de Fresa', imgUrl: 'assets/img/6.jpg', price:50, description: 'Jugoso pastel de fresa.' },
    
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
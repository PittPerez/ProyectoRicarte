import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.page.html',
  styleUrls: ['./cake-details.page.scss'],
})
export class CakeDetailsPage {
  product: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController
  ) { }

  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.product = params['product'];
    });
  }

  // Método para cerrar el modal
  closeModal() {
    this.modalController.dismiss();
  }
}

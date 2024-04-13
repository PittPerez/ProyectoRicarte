import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CakeDetailsPageRoutingModule } from './cake-details-routing.module';

import { CakeDetailsPage } from './cake-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CakeDetailsPageRoutingModule
  ],
  declarations: [CakeDetailsPage]
})
export class CakeDetailsPageModule {}

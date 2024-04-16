import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarComentariosPageRoutingModule } from './visualizar-comentarios-routing.module';

import { VisualizarComentariosPage } from './visualizar-comentarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarComentariosPageRoutingModule
  ],
  declarations: [VisualizarComentariosPage]
})
export class VisualizarComentariosPageModule {}

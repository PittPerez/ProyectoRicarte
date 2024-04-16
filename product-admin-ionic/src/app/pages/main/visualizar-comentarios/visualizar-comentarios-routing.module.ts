import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarComentariosPage } from './visualizar-comentarios.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarComentariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarComentariosPageRoutingModule{} {}

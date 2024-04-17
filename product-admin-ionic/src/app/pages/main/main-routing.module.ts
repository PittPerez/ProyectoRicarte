import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
      },
      {
        path: 'cake-details',
        loadChildren: () => import('./cake-details/cake-details.module').then( m => m.CakeDetailsPageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
      },
    
      {
        path: 'visualizar-comentarios',
        loadChildren: () => import('./visualizar-comentarios/visualizar-comentarios.module').then( m => m.VisualizarComentariosPageModule)
      },
      
      
    ]
  },
  {
    path: 'carrito-compras',
    loadChildren: () => import('./carrito-compras/carrito-compras.module').then( m => m.CarritoComprasPageModule)
  },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }

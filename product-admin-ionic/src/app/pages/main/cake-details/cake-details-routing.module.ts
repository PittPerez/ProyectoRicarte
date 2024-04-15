import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CakeDetailsPage } from './cake-details.page';

const routes: Routes = [
  {
    path: '',
    component: CakeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CakeDetailsPageRoutingModule {}

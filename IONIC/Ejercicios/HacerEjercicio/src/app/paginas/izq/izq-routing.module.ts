import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IzqPage } from './izq.page';

const routes: Routes = [
  {
    path: '',
    component: IzqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IzqPageRoutingModule {}

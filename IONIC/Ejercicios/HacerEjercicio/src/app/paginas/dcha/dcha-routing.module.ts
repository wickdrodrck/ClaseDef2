import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DchaPage } from './dcha.page';

const routes: Routes = [
  {
    path: '',
    component: DchaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DchaPageRoutingModule {}

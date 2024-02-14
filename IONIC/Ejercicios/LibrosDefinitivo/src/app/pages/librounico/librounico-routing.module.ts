import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibrounicoPage } from './librounico.page';

const routes: Routes = [
  {
    path: '',
    component: LibrounicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibrounicoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipPage } from './princip.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: PrincipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ComponentesModule,IonicModule],
  exports: [RouterModule],
})
export class PrincipPageRoutingModule {}

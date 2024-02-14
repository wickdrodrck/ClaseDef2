import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipPageRoutingModule } from './princip-routing.module';

import { PrincipPage } from './princip.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    PrincipPageRoutingModule,
    ComponentesModule
  ],
  declarations: [PrincipPage]
})
export class PrincipPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibreriaPageRoutingModule } from './libreria-routing.module';

import { LibreriaPage } from './libreria.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibreriaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [LibreriaPage]
})
export class LibreriaPageModule {}

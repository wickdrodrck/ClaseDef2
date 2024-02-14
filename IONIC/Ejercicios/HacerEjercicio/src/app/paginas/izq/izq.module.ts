import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IzqPageRoutingModule } from './izq-routing.module';

import { IzqPage } from './izq.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IzqPageRoutingModule, ComponentesModule
  ],
  declarations: [IzqPage]
})
export class IzqPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuentesPageRoutingModule } from './fuentes-routing.module';

import { FuentesPage } from './fuentes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuentesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FuentesPage]
})
export class FuentesPageModule {}

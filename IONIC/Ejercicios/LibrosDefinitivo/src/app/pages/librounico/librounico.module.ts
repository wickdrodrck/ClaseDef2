import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibrounicoPageRoutingModule } from './librounico-routing.module';

import { LibrounicoPage } from './librounico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibrounicoPageRoutingModule
  ],
  declarations: [LibrounicoPage]
})
export class LibrounicoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DchaPageRoutingModule } from './dcha-routing.module';

import { DchaPage } from './dcha.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DchaPageRoutingModule,ComponentesModule
  ],
  declarations: [DchaPage]
})
export class DchaPageModule {}

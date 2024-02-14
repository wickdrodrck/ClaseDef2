import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionPageRoutingModule } from './action-routing.module';

import { ActionPage } from './action.page';
import { ComponenentesModule } from 'src/app/componenentes/componenentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionPageRoutingModule,
    ComponenentesModule
  ],
  declarations: [ActionPage]
})
export class ActionPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPageRoutingModule } from './lista-routing.module';

import { ListaPage } from './lista.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { UsuariosserviService } from 'src/app/servicios/usuariosservi.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPageRoutingModule,
    ComponentesModule,
  ],
  declarations: [ListaPage],
  providers: [UsuariosserviService]
})
export class ListaPageModule {}

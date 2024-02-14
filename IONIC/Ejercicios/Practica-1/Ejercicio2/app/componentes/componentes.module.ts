import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CabeceraComponent, ContenidoComponent],
  imports: [
    CommonModule,
    IonicModule
  ], exports:[
    CabeceraComponent, ContenidoComponent
  ]
})
export class ComponentesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar/buscar.component';



@NgModule({
  declarations: [BuscarComponent],
  imports: [
    CommonModule
  ],
  exports:[
    BuscarComponent
  ]
})
export class ComponentesModule { }

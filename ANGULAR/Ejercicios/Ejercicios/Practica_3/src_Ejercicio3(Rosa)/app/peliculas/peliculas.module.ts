import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculascomponentComponent } from './peliculascomponent/peliculascomponent.component';



@NgModule({
  declarations: [
    PeliculascomponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PeliculascomponentComponent
  ]
})
export class PeliculasModule { }

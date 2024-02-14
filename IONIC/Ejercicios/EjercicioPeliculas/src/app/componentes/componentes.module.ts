import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarPelisComponent } from './mostrar-pelis/mostrar-pelis.component';
import { IonicModule } from '@ionic/angular';
import { SlidesComponent } from './slides/slides.component';



@NgModule({
  declarations: [MostrarPelisComponent,SlidesComponent],
  imports: [
    CommonModule,
    IonicModule,
  ], exports: [MostrarPelisComponent, SlidesComponent]
})
export class ComponentesModule { }

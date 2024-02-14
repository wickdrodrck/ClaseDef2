import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LibrosComponent } from './libros/libros.component';
import { OrdenarComponent } from './ordenar/ordenar.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LibroComponent } from './libro/libro.component';
import { ServiciolibrosService } from '../servicios/serviciolibros.service';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, LibrosComponent, OrdenarComponent, LibroComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ], exports: [
    HeaderComponent, FooterComponent, LibrosComponent, OrdenarComponent, LibroComponent
  ],providers: []
})
export class ComponentesModule { }

import { HeaderComponent } from './../../../../HacerEjercicio/src/app/componentes/header/header.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    HeaderComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ], exports:[
    FormComponent,
    HeaderComponent
  ]
})
export class ComponentesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    FormComponent,

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ], exports:[
    FormComponent
  ]
})
export class ComponentesModule { }

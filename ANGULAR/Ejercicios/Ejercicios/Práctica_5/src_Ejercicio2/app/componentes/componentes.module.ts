import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajesComponent } from './mensajes/mensajes.component';
import { MensajeriaService } from './mensajeria.service';
import { MensajeComponent } from './mensaje/mensaje.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MensajesComponent,
    MensajeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    MensajesComponent,
    MensajeComponent,
  ],
  providers: [MensajeriaService]
})
export class ComponentesModule { }

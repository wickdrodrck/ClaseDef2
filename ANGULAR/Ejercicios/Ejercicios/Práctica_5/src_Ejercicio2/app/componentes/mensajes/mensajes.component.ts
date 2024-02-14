import { Component } from '@angular/core';
import { MensajeriaService } from '../mensajeria.service';
import { IMensaje } from '../Interfaces'

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {
  lmensajes:IMensaje[]=[];

  constructor(ds:MensajeriaService){
    this.lmensajes = ds.GetMensajes();
    
  }

}

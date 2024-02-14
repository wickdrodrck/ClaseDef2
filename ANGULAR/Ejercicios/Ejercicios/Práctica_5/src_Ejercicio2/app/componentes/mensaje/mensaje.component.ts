import { Component } from '@angular/core';
import { MensajeriaService } from '../mensajeria.service';
import { IMensaje } from '../Interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {
  mensaje:any;
  id:any;
  constructor(ds:MensajeriaService, private router:ActivatedRoute){
    this.id = this.router.snapshot.paramMap.get("id");
    this.mensaje = ds.GetMensaje(this.id);

  }
}

import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  nombre: string = '';
  dss:ServicioService;
  constructor(ds:ServicioService){
    this.dss = ds;
  }

  public agregarNom(){
    if(this.nombre.trim() !== ""){
      console.log(this.nombre)
      this.dss.SetNombreArray(this.nombre);
      this.nombre = "";
    }
  }
}

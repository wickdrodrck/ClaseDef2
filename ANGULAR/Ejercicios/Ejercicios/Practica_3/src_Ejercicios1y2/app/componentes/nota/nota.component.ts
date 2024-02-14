import { Component } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent {

  asignatura:string;
  nombre:string;
  nota:number;
  mensaje:string

  constructor(){
    this.asignatura = "Lengua";
    this.nombre = "Paco";
    this.nota = 4;
    this.mensaje = "";
  }

  mostrarMSG(){
    if (this.nota >= 5){
      return this.mensaje = "Has aprobado.";
    } else {
      return this.mensaje = "Has suspendido.";
    }
  }
  get bar(): number {
    return this.nota;
}

  
}

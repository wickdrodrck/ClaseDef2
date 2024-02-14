import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo1';
  nombre:String="Rodrigo";
  edad:any;
  curso:String='';
  resumen:String="";

  VerDatos(){
    this.resumen="Nombre: "+this.nombre+"<br>"+"Edad: "+this.edad+"<br>Curso: "+this.curso;
  }
}



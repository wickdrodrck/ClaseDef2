import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  Nombres:string[] = []
  dss:ServicioService

  constructor(ds:ServicioService){
    this.dss = ds
    this.Nombres = this.dss.GetNombresArray();
  }

  public limpiar(){
    this.dss.LimpiaArray();

  }

  public limpiarUno(id:any){
    this.dss.LimpiarUno(id);
  }

}

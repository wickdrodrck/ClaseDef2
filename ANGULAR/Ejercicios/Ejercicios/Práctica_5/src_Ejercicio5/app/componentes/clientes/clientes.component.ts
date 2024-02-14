import { Component } from '@angular/core';
import { ServicioclientService } from '../cliente.service';
import { Cliente } from '../Interfaces';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  id:any;
  nombre:any;
  cif:any;
  direccion:any;
  grupo:any;
  dss:ServicioclientService;
  ArrayClientes:Cliente[]=[];

  constructor(ds:ServicioclientService){
    this.dss=ds;
    this.id=0;
  }

  public AnadirCliente(){
    let cl : Cliente = {
      id: this.id,
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo
    }
    this.id +=1;
    this.dss.AnadirClientes(cl);
    this.ArrayClientes = this.dss.DarArray();
    console.log(this.ArrayClientes)
  }
}

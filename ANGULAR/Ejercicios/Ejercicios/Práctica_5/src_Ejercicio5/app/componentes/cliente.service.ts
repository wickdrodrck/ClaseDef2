import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './Interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioclientService {

  ArrayClientes:Cliente[]=[];
  ArrayGrupos:Grupo[]=[];


  constructor(private http:HttpClient) {
    this.http.get<Grupo[]>('../assets/data/grupo.json').subscribe(
      l=>{
        l.forEach(m=>{this.ArrayGrupos.push(m)})
      }
    )
  }

  public AnadirClientes(cl:Cliente){
    this.ArrayClientes.push(cl);
  }

  public DarArray(){
    return this.ArrayClientes;
  }

  public DarArrayGrupo(){
    return this.ArrayGrupos;
  }
}

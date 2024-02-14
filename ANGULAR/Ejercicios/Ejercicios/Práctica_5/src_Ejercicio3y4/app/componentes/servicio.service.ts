import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  Nombres:any[] = [];
  constructor() { 

  }

  public GetNombresArray(){
    return this.Nombres;
  }

  public SetNombreArray(nombre:any){
    this.Nombres.push(nombre);
  }

  public LimpiarUno(id:any){
    for(let i = 0;i<this.Nombres.length;i++){
      if(id == this.Nombres[i]){
        this.Nombres.splice(i);
      }
    }
  }

  public LimpiaArray(){
    this.Nombres.length = 0;
  }
}

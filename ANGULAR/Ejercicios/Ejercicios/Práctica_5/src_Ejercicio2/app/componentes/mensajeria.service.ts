import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMensaje } from './Interfaces';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {
  memensajes:IMensaje[]=[];
  otro:IMensaje[]=[];

  constructor(private http: HttpClient){
    this.http.get<IMensaje[]>('../assets/data/mensajes.json').subscribe(
      l =>{
       
        l.forEach(m =>{this.memensajes.push(m)})
      }
    );
  
  }

  public GetMensajes(){
    return this.memensajes;
  }

  public GetMensaje(id:any){
    for (let a = 0; a < this.memensajes.length; a++){
      console.log(a);
      if (this.memensajes[a].ID == id){
        console.log(this.memensajes[a]);
        return this.memensajes[a]
      }
    }
    return null;
    }

    
  }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPelicula } from './Interfaces';

@Injectable({
  providedIn: 'root'
})
export class PelimediaService {

  Pepelis:IPelicula[]=[];

  public GetPeliculas(){
    return this.Pepelis;
  }

  public EliminarPeli(peli:any){
    this.Pepelis.forEach(
      (m, index)=>{
        if (m.titulo == peli){
          this.Pepelis.splice(index, 1);
        }
      }
    )
  }

  public GetPelicula(id:any){
    let posi:any;
    this.Pepelis.forEach(m=>{
      if(m.id == id){
        console.log('ola');
        posi = m;
        
      }
    })
    console.log(posi);
    return posi;
  }

  constructor(private http: HttpClient) { 
    this.http.get<IPelicula[]>("../assets/data/Pelis.json").subscribe(
      l => {
        l.forEach(m=>{console.log(m), this.Pepelis.push(m)})
      }
    );
  }
}

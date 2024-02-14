import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPelicula } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  Pepepelis:IPelicula[]=[];

  public GetPeliculas(){
    return this.Pepepelis;
  }

  public GetPelicula(id:any){
    for (let a = 0; a < this.Pepepelis.length; a++){
      if (this.Pepepelis[a].id == id){
        return this.Pepepelis[a]
      }
    }
    return null;
  }

  public GetPOS(){
    return this.Pepepelis.indexOf;
  }

  constructor(private http: HttpClient) {
    this.http.get<IPelicula[]>('../assets/data/datosPelis.json').subscribe(
      l => {
        l.forEach(m=>{this.Pepepelis.push(m)})
      }
    );
  }
}

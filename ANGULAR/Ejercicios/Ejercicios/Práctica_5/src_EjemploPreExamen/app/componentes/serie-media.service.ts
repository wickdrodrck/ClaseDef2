import { Injectable } from '@angular/core';
import { ISerie } from './Interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SerieMediaService {

  Seseries:ISerie[]=[];

  public GetSeries(){
    return this.Seseries;
  }

  public GetSerie(id:any){
    let posi:any;
    this.Seseries.forEach(m=>{
      if(m.id == id){
        console.log('ola');
        posi = m;
        
      }
    })
    return posi;
  }

  constructor(private http: HttpClient) { 
    this.http.get<ISerie[]>("../assets/data/Series.json").subscribe(
      l => {
        l.forEach(m=>{this.Seseries.push(m)})
      }
    );
  }
}

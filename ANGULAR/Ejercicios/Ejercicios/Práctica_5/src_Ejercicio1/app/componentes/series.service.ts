import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISerie } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  
  Series:ISerie[]=[];

  public GetSeries(){
    
    return this.Series;
  }

  public GetSerie(id:any){
    for (let a = 0; a < this.Series.length; a++){
      if (this.Series[a].id == id){
        return this.Series[a];
      }
    }
    return null;
  }
  constructor(private http: HttpClient) { 
    this.http.get<ISerie[]>('../assets/data/datosSeries.json').subscribe(
      l => {
        l.forEach(m => {this.Series.push(m)
          
        });
        
      }
      );
    
  }
}

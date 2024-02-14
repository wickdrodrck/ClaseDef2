import { Component } from '@angular/core';
import { PelimediaService } from '../pelimedia.service';
import { IPelicula } from '../Interfaces';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  dss:any;
  Pelis:IPelicula[]=[];
  elimin:any;

  public eliminarserie(){
    this.dss.EliminarPeli(this.elimin);
  }

  constructor(ds:PelimediaService){
    this.dss = ds;
    this.Pelis = ds.GetPeliculas();
  }

}

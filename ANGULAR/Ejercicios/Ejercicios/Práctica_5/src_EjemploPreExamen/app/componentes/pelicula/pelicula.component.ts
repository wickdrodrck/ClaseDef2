import { Component } from '@angular/core';
import { PelimediaService } from '../pelimedia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

  pos:any = "";
  Pelicul:any;
  elimin:any;

  constructor(ds:PelimediaService, private router:ActivatedRoute){
    this.pos = this.router.snapshot.paramMap.get("pos");
    this.Pelicul = ds.GetPelicula(this.pos);
    console.log(this.Pelicul);
  }
}

import { Component, OnInit } from '@angular/core';
import { IPelicula } from '../interfaces';
import { MultimediaService } from '../multimedia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
  
  pos:any;
  nombre:any;
  Pelicul:any;

  constructor(ds:MultimediaService, private router:ActivatedRoute){
    this.pos = this.router.snapshot.paramMap.get("pos");
    this.Pelicul = ds.GetPelicula(this.pos);
    
  }
}

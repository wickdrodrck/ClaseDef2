import { Component } from '@angular/core';
import { TraerPeliculasService } from '../servicios/traer-peliculas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pokemons:any;

  constructor(private servipoke: TraerPeliculasService) {

  }

}

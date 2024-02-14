import { Component, Input, OnInit } from '@angular/core';
import { IAnime } from 'src/app/interfaz/anime';
import { TraerPeliculasService } from 'src/app/servicios/traer-peliculas.service';

@Component({
  selector: 'app-mostrar-pelis',
  templateUrl: './mostrar-pelis.component.html',
  styleUrls: ['./mostrar-pelis.component.scss'],
})
export class MostrarPelisComponent  implements OnInit {
  pokemons:any;

  @Input() pelisdoraemon: IAnime[] = [];
  constructor(private servipoke: TraerPeliculasService) {
    servipoke.getAnimeByGenre().subscribe((data) => {
      console.log(data.data);
      this.pokemons = data.data;
    });
   }

  ngOnInit() {}

}

import { Component } from '@angular/core';
import { libro } from '../modelos/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arraybusc:any;
  arraing: libro[];
  constructor() {
    this.arraing = [{autor : "Paco porras", titulo:"El día que me caí", genero:"chorradas"}, {autor:"Elxokas", titulo:"Mi nueva casa, eres tonto o que!", genero:"Youtuber"}, {autor:"Jorge el Wild",titulo:"Asi es mi puta madre",genero:"Youtuber"}, {autor:"Paco porras",titulo:"La Maquinita",genero:"Cuñaismo ilustrado"}];
  }

  ordenacion(){
    this.arraing = this.arraybusc;
  }
}

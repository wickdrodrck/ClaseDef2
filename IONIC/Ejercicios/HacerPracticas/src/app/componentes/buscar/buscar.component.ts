import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { libro } from 'src/app/modelos/interfaces';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss'],
})
export class BuscarComponent  implements OnInit {
  @Output() arraybusc = new EventEmitter<libro[]>();
  buscaut:string="";
  busctit:string="";
  arraing: libro[];
  arraign:any;
  constructor() {
    this.arraing = [{autor : "Paco porras", titulo:"El día que me caí", genero:"chorradas"}, {autor:"Elxokas", titulo:"Mi nueva casa, eres tonto o que!", genero:"Youtuber"}, {autor:"Jorge el Wild",titulo:"Asi es mi puta madre",genero:"Youtuber"}, {autor:"Paco porras",titulo:"La Maquinita",genero:"Cuñaismo ilustrado"}];
    this.arraign = [];
  }

  filtrarautor(){
    this.arraign =  this.arraing.find((element) => element.autor == this.buscaut)!
    this.arraybusc.emit(this.arraign);
  }

  filtrartitulo(){
    this.arraign =  this.arraing.find((element) => element.titulo == this.busctit)!
    this.arraybusc.emit(this.arraign);
  }

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';
import { Ilibro } from 'src/app/libro';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  Inicio: string = 'Inicio';
  constructor() { }

  arrlibr: any;
  emitirarray(arraylibros: Ilibro[] ){
    this.arrlibr = arraylibros;
  }

  ngOnInit() {
  }

}

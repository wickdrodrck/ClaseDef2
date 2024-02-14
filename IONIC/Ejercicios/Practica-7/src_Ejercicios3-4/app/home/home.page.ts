import { Lenguajes } from './../Interfaces/Lenguajes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  arrayLenguajes: Lenguajes[];
  cont=0;

  constructor() {
     this.arrayLenguajes = [
      { nombre: 'JavaScript', seleccionado: false, descripcion: 'Lenguaje de programación para la web.', img: '/assets/img/javascript.png' },
      { nombre: 'Python', seleccionado: false, descripcion: 'Versátil y fácil de aprender.', img: '/assets/img/python.png'},
      { nombre: 'Java', seleccionado: false, descripcion: 'Utilizado en desarrollo empresarial y móvil.', img: '/assets/img/java.png' },
    ];
  }

  onClick(l:Lenguajes){
    if(l.seleccionado){
      l.seleccionado = true;
      this.cont++
    }else{
      l.seleccionado = false;
      this.cont--
    }
  }

}

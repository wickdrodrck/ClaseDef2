import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ilibro } from 'src/app/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {
  id: any;
  tituloLibro:any;
  idmax: any;

  actualizarTituloLibro(titulo: string) {
    this.tituloLibro = titulo; // Captura el título del libro emitido por el componente LibroComponent
    console.log(this.tituloLibro)
  }



  constructor() {

}

  ngOnInit() {
  }

}

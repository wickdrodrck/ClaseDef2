import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Ilibro } from 'src/app/libro';
import { ServiciolibrosService } from 'src/app/servicios/serviciolibros.service';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss'],
})
export class OrdenarComponent  implements OnInit {

  constructor(private router: Router, private servic: ServiciolibrosService) {
    this.libros = servic.getLibros();
  }
  @Output() arraylibros: EventEmitter<Ilibro[]> = new EventEmitter<Ilibro[]>();
  libros: Ilibro[] = [];
  ngOnInit() {}
  ordenartit(){
    this.arraylibros.emit(this.libros.sort((a, b) => a.title.localeCompare(b.title)));
  }

  ordenarautor(){
    this.arraylibros.emit(this.libros.sort((a, b) => a.author.localeCompare(b.author)));
  }

  ordenargenero(){
    this.arraylibros.emit(this.libros.sort((a, b) => a.genre.localeCompare(b.genre)));
  }
}

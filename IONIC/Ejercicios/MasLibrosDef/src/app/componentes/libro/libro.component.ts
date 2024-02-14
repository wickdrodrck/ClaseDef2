import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ilibro } from 'src/app/libro';
import { ServiciolibrosService } from 'src/app/servicios/serviciolibros.service';

@Component({
  selector: 'app-libro2',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss'],
})

export class LibroComponent  implements OnInit {
  @Output() tituloActualizado: EventEmitter<string> = new EventEmitter<string>();
  titulo:any;
  id:any;
  libro: any;


  constructor(private router : Router, private r : ActivatedRoute, private servic: ServiciolibrosService) {
    this.id = this.r.snapshot.params['id'];
    console.log(this.id);

}
vuelta(){
  this.router.navigate(['/inicio']);
}

  ngOnInit() {
    this.libro = this.servic.getLibro(this.id);
    this.titulo = "Página detalles de: " + this.libro.title;
    console.log(this.titulo)
    this.tituloActualizado.emit(this.titulo);

  }

}

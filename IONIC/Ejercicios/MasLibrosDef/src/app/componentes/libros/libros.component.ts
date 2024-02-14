
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ilibro } from 'src/app/libro';
import { ServiciolibrosService } from 'src/app/servicios/serviciolibros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss'],
})
export class LibrosComponent  implements OnInit {

  @Input() libros: Ilibro[] = [];
  constructor(private router: Router, private servic: ServiciolibrosService) {

  }

  redireccion(id:any){
    this.router.navigate(['/libro',id]);
  }

  vuelta(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    this.libros = this.servic.getLibros();
  }

}

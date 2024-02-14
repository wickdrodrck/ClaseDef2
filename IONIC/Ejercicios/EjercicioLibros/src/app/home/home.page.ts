import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../libro';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private router: Router) {

  }

  redireccion(id:any){
    this.router.navigate(['/libro',id]);
  }

  vuelta(){
    this.router.navigate(['/home']);
  }

  ordenartit(){
    this.libros.sort((a, b) => a.title.localeCompare(b.title));
    this.vuelta();
  }

  ordenarautor(){
    this.libros.sort((a, b) => a.author.localeCompare(b.author));
    this.vuelta();
  }

  ordenargenero(){
    this.libros.sort((a, b) => a.genre.localeCompare(b.genre));
    this.vuelta();
  }



}

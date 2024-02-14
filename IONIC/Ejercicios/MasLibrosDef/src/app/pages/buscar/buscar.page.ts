import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ilibro } from 'src/app/libro';
import { ServiciolibrosService } from 'src/app/servicios/serviciolibros.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  libros: Ilibro[];
  searchTerm : string = "";
  searchResults: Ilibro[] = [];
  constructor(private router:Router, private servic: ServiciolibrosService) {
    this.libros = servic.getLibros();
  }

  vuelta(){
    this.router.navigate(['/inicio']);
  }

  searchChanged(){
    this.searchResults = this.libros.filter(result =>
      result.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  ngOnInit() {
  }

}

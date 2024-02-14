
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Ilibro } from '../libro';

@Injectable({
  providedIn: 'root'
})
export class ServiciolibrosService implements OnInit{

  libros :Ilibro[] = [];

  libro: any;

  constructor(private http: HttpClient) {
    this.http.get<Ilibro[]>("../assets/json/libros.json").subscribe(data => {
      data.forEach(l=> {
        this.libros.push(l);
      });
    });
  }
  ngOnInit(): void {

  }

  getLibros(): Ilibro[] {
    return this.libros;
  }

  getLibro(id: any) {
    // Espera a que los datos se carguen
    console.log(this.libros);
    this.libros.forEach(l=>{console.log(l)});
    let  l=this.libros.find(l => l.id == id);
    console.log(l);
    return l;
  }


}

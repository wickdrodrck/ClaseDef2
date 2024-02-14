import { Component, OnInit } from '@angular/core';
import { pelis } from './interfaces';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent  implements OnInit{

  cine:pelis[];
  titulos:string[]=["Star Wars","Star Trek", "Señor de los Anillos"];
  directores:string[]=["alguien", "alguien2", "alguien3"];
  anyos:number[]=[2000,2001,2002];
  portadas:string[]=["starwars.jpeg","startrek.jpg","señoranillos.jpg"]

  constructor(){
    this.cine=[];
  }
  
  ngOnInit(): void {
    for(let i = 0;i<3;i++){
      this.cine[i]={
        Titulo:this.titulos[i],director:this.directores[i],anyo:this.anyos[i],portada:this.portadas[i]}
    }
  }

}

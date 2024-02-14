import { Component, OnInit } from '@angular/core';
import { IPelicula } from '../interfaces';

@Component({
  selector: 'app-peliculascomponent',
  templateUrl: './peliculascomponent.component.html',
  styleUrls: ['./peliculascomponent.component.css']
})
export class PeliculascomponentComponent implements OnInit {

  cine:IPelicula[];
  titulos:string[]=["AAA","BBB","CCCC"];
  directores:string[]=["aaa","bbb","ccc"];
  anyos:number[]=[2000,2001,2002]

  constructor(){
    this.cine=[];
  }

  ngOnInit(): void {
    for (let i =0;i<3;i++){
      this.cine[i]={
        titulo:this.titulos[i],
        director:this.directores[i],
        anyo:this.anyos[i]
      }
    }
    console.log(this.cine);
  }
}

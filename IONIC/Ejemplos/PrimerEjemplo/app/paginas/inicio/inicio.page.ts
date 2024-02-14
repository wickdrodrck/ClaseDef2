import { Component, OnInit } from '@angular/core';


interface IItem{
  icono:string,
  texto:string,
  url:string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent  implements OnInit {

  Lista:IItem[]=[
    {
      icono:'american-football-outline',
      texto:'Accion',
      url:'/accion'
    },{
      icono:'',
      texto:'Alerta',
      url:'/alerta'
    }
  ];

  constructor() { }

  ngOnInit() {}

}

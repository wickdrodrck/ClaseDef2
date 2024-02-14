import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/Interfaces/Noticia';

@Component({
  selector: 'app-fuentes',
  templateUrl: './fuentes.page.html',
  styleUrls: ['./fuentes.page.scss'],
})
export class FuentesPage implements OnInit {
  fuenti:any;
  Noticias:Noticia[];
  constructor() {
    this.fuenti = "FUENTES"
    this.Noticias =[
      {
      nombre:"ABC news",
      descripcion:"Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
      url:"https://abcnews.com",
      categoria:"general",
      pais: "us"
      },
      {
      nombre:"ANSA.it",
      descripcion:"Agenzia ANSA: ultime notizie, foto, video e approfondimenti su: cronaca, politica, economia, regioni, mondo, sport, calcio, cultura e tecnologia.",
      url:"http://www.ansa.it",
      categoria:"general",
      pais: "it"
      }
      ]
  }

  ngOnInit() {
  }

}

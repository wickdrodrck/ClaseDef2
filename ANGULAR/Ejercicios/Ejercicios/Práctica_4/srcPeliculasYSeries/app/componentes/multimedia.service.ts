import { Injectable, OnInit } from '@angular/core';
import { IPelicula, ISerie } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService implements OnInit{


  public GetPeliculas(){
    return this.Pepepelis;
  }

  public GetPelicula(posicion:any){
    return this.Pepepelis[posicion];
  }

  public GetSeries(){
    return this.Series;
  }

  public GetSerie(posicion:any){
    return  this.Series[posicion];
  }


  public GetPOS(){
    return this.Pepepelis.indexOf;
  }

  Pepepelis:IPelicula[];
  caratulas: any[];
  titulos : any[];
  años : any[];
  directores : any[];
  sinopsis : any[];
  puntuaciones : any[];
  Series:ISerie[];
  sercaratulas = []
  sertitulos = []
  sertemporadas = []
  sersinopsis = []
  plataformas = []

  constructor() {
    this.Series = []; 
    this.Pepepelis=[];
    this.caratulas = ["Inception.jpeg","shawsank.jpg","batman.jpg","pulp.jpg","forrest.jpg"]
    this.titulos = [
      "Inception",
      "The Shawshank Redemption",
      "The Dark Knight",
      "Pulp Fiction",
      "Forrest Gump"
    ];
  
    this.años = [
    2010,
    1994,
    2008,
    1994,
    1994
    ];
  
    this.directores = [
    "Christopher Nolan",
    "Frank Darabont",
    "Christopher Nolan",
    "Quentin Tarantino",
    "Robert Zemeckis"
    ];
  
  this.sinopsis = [
    "Dom Cobb, un ladrón hábil, es capaz de entrar en los sueños \n de las personas y robar sus secretos más íntimos.",
    "Dos hombres encuentran la redención mientras están encarcelados \n en la prisión de Shawshank por crímenes que no cometieron.",
    "Batman se enfrenta al crimen organizado en Gotham City con la ayuda de su aliado, \n el fiscal de distrito Harvey Dent.",
    "Las vidas de varios personajes se entrelazan en la violenta y caótica Los Ángeles.",
    "La vida de Forrest Gump, un hombre con un coeficiente intelectual bajo, \n y su extraordinaria vida a lo largo de varias décadas."
  ];
  
  this.puntuaciones = [
    8.8,
    9.3,
    9.0,
    8.9,
    8.8
  ];

  for (let i = 0;i<this.titulos.length;i++){
    this.Pepepelis[i]={
      caratula:this.caratulas[i], titulo:this.titulos[i], anyo:this.años[i], director:this.directores[i], sinopsis:this.sinopsis[i], puntuacion:this.puntuaciones[i]
    } 
  }

  for (let f = 0;f<this.titulos.length;f++){
    this.Series[f] = {
      caratula:this.sercaratulas[f], titulo:this.sertitulos[f], temporadas:this.sertemporadas[f], sinopsis:this.sersinopsis[f], plataforma:this.plataformas[f]
    }
  }

  }

  ngOnInit(): void{
    
    }
}

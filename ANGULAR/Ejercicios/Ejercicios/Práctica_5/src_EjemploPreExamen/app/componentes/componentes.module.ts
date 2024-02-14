import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { SerieComponent } from './serie/serie.component';
import { InicioComponent } from './inicio/inicio.component';
import { SerieMediaService } from './serie-media.service';
import { PelimediaService } from './pelimedia.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PeliculasComponent,
    SeriesComponent,
    PeliculaComponent,
    SerieComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    PeliculaComponent,
    SeriesComponent,
    PeliculaComponent,
    SerieComponent,
    InicioComponent
  ], providers:[
    SerieMediaService, PelimediaService
  ]
})
export class ComponentesModule { }

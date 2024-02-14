import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { MultimediaService } from './multimedia.service';
import { RouterModule } from '@angular/router';
import { SerieComponent } from './serie/serie.component';
import { HttpClientModule } from '@angular/common/http';
import { SeriesService } from './series.service';



@NgModule({
  declarations: [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    PeliculaComponent,
    SerieComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    PeliculaComponent
  ],
  providers: [MultimediaService,SeriesService]
})
export class ComponentesModule { }

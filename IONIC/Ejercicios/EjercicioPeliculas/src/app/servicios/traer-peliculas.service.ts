import { IAnime } from './../interfaz/anime';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraerPeliculasService {
  pokemons: any;

  constructor(private http: HttpClient) {



  }

  getAnimeByGenre(): Observable<any> {
    const apiUrl = 'https://api.jikan.moe/v4/anime?q=Doraemon?type=movie';
    return this.http.get(apiUrl);
  }
}

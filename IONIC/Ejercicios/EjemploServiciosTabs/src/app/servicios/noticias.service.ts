import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { }

  getTopHeaders(){
    return this.http.get("https://newsapi.org/v2/top-headlines?q=Games&apiKey=f9671b45bced41a8ba8cbaecb02754b5");
  }
}

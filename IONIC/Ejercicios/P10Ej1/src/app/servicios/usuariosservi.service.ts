import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaz/interfaz';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosserviService implements OnInit{

  lista: IUsuario[] = [];

  constructor(private http: HttpClient) {
    this.getTopHeadlines().subscribe(data => {
      data.forEach(u=> {
        this.lista.push(u);
      });
    });
  }
  ngOnInit(): void {

  }

  getTopHeadlines(){
    return this.http.get<IUsuario[]>("/assets/json/usuarios.json");
  }

  getUsers(): IUsuario[] {
    return this.lista;
  }

  getUser (usu: string, password: string){
    console.log(this.lista);
    return this.lista.find(p => p.usuario === usu && p.password === password);
  }
}

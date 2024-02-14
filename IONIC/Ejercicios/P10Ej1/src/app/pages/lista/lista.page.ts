import { IUsuario } from './../../interfaz/interfaz';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuariosserviService } from 'src/app/servicios/usuariosservi.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  user:string | null;
  lista: any;
  userselect: IUsuario | null;
  constructor(private dataservice:UsuariosserviService, private r: ActivatedRoute, private router: Router) {
    this.lista = this.dataservice.lista;
    this.user = this.r.snapshot.paramMap.get('user');
    this.userselect = null;
  }

  ngOnInit() {
  }

  dalecomba(user:IUsuario){
    this.userselect = user;
  }
}

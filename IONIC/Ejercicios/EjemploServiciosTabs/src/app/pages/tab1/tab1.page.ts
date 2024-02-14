import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/servicios/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private noticis: NoticiasService) {}


ngOnInit(): void {
    this.noticis.getTopHeaders().subscribe( respuesta => {console.log('noticias', respuesta)})
  }

}

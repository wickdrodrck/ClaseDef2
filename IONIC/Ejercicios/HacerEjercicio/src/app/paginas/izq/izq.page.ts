import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-izq',
  templateUrl: './izq.page.html',
  styleUrls: ['./izq.page.scss'],
})
export class IzqPage implements OnInit {
  izquierda:any;
  constructor() {
    this.izquierda = "Es la página de la izq"
  }

  ngOnInit() {
  }

}

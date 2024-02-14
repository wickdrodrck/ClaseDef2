import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.page.html',
  styleUrls: ['./action.page.scss'],
})
export class ActionPage implements OnInit {
  titulo:any;
  constructor() { 
    this.titulo = "ACCIÓN"
  }

  ngOnInit() {
  }

}

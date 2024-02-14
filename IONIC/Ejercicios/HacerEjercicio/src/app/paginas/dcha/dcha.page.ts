import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dcha',
  templateUrl: './dcha.page.html',
  styleUrls: ['./dcha.page.scss'],
})
export class DchaPage {
  derecha:any;
  constructor() {
    this.derecha = "Es la página de la izq"
  }
}

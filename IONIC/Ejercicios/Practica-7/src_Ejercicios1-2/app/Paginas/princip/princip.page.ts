import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-princip',
  templateUrl: './princip.page.html',
  styleUrls: ['./princip.page.scss'],
})
export class PrincipPage implements OnInit {
  random:Number;
  input:any;
  mensaje:string;
  contador:number;
  correcto=false;
  constructor(private router: Router) {
    this.random = Math.round( Math.random()*(0-100)+100);
    this.mensaje = "...";
    this.contador=5;
    console.log(this.random);
  }


  SacarMensaje(){
    if(this.contador == 0){
      return;
    }
    if(this.input == this.random){
      this.mensaje = " el mismo."
      this.correcto = true;
    }else {
      this.contador -= 1;
      if(this.input < this.random){
        this.mensaje = " menor que el random."
      }else{
        this.mensaje = " mayor que el random."
      }
    }
  }

  reset(){
    this.router.navigate(['/princip']);
  }

  ngOnInit() {
  }

}

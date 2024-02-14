import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { FormsModule } from '@angular/forms';
import { ServicioclientService } from './servicioclient.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Client2Component } from './client2/client2.component';



@NgModule({
  declarations: [
    ClientesComponent,
    Client2Component,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ClientesComponent, 
    Client2Component
  ],
  providers:[
    ServicioclientService
  ]
})
export class ComponentesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';
import { MensajeComponent } from './componentes/mensaje/mensaje.component';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path:"Mensajes",
  component:MensajesComponent
},
{
  path:"Inicio",
  component:AppComponent
},
{
  path:"Mensajes/:id",
  component:MensajeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

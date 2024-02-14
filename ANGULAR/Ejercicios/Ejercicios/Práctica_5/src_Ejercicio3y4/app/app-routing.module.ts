import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './componentes/list/list.component';
import { InputComponent } from './componentes/input/input.component';

const routes: Routes = [
  {
    path: "", component: ListComponent
  },
  {
    path: "Añadir", component: InputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

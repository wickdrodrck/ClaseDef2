import { InicioPageModule } from './../../../HacerEjercicio/src/app/paginas/inicio/inicio.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'librounico',
    loadChildren: () => import('./pages/librounico/librounico.module').then( m => m.LibrounicoPageModule)
  },
  {
    path: 'libreria',
    loadChildren: () => import('./pages/libreria/libreria.module').then( m => m.LibreriaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

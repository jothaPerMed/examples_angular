import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

// dominio.com/
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule ),
  },
  // {
  //   path: 'heroes',
  //   loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule ),
  // },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
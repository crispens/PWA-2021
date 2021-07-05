import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const HomeModule = () => import('./features/home/home.module').then((m) => m.HomeModule);
const AccountModule = () => import('./features/account/account.module').then((m) => m.AccountModule);


const routes: Routes = [
  {
    path: 'home',
    loadChildren: HomeModule
  },
  {
    path: 'account',
    loadChildren: AccountModule,
    data: {showHeader : false},
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full' // me hace el redirectTO cuando la ruta sea exacta a la del path 
    // pathMatch: 'prefix' carga la ruta cuando sea parcialmente exacta a la del path
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

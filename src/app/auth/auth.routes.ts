import { Routes } from '@angular/router';

export const AuthRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login'),
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

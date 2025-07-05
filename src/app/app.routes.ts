import { Routes } from '@angular/router';

import { publicGuard } from './auth/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./linkhub/linkhub.routes').then((m) => m.LinkHubRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AuthRoutes),
    canActivateChild: [publicGuard()],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

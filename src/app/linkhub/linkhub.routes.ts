import { Routes } from '@angular/router';

import { privateGuard } from '../auth/guard/auth.guard';

export const LinkHubRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home'),
  },
  {
    path: 'credentials-wifi',
    loadComponent: () => import('./pages/credentials-wifi/credentials-wifi'),
    canActivate: [privateGuard()],
  },
];

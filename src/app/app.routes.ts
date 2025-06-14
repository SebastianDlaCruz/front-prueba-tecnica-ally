import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sing-in',
    loadComponent: () => import('./feature/auth/sing-in/sing-in.component').then(c => c.SingInComponent)
  },
  {
    path: 'sing-up',
    loadComponent: () => import('./feature/auth/sing-up/sing-up.component').then(c => c.SingUpComponent)
  },
  {
    path: '',
    loadComponent: () => import('./feature/dashboards/dashboards.component').then(c => c.DashboardsComponent),
    /*  canMatch: [authGuard] */
  },
  {
    path: 'users',
    loadComponent: () => import('./feature/users/users.component').then(c => c.UsersComponent),
    /* canMatch: [authGuard] */
  },
];

import { Routes } from '@angular/router';
import { isLoggedGuard } from './core/guards/is-logged-guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./core/pages/login/login').then((m) => m.Login) },
  {
    path: 'home',
    loadComponent: () => import('./core/pages/home/home').then((m) => m.Home),
    canActivate: [isLoggedGuard],
  },
  { path: '**', redirectTo: 'login' },
];

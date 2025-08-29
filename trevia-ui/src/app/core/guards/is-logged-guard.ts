import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../stores/auth-store';

export const isLoggedGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isLogged = inject(AuthStore).isLogged();

  if (!isLogged) {
    router.navigate(['/login']);

    return false;
  }

  return true;
};

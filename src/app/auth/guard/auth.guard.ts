import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthStateService } from '../service/auth-state';
import { map } from 'rxjs';

export const privateGuard = (): CanActivateFn => {
  return () => {
    const router = inject(Router);
    const authState = inject(AuthStateService);

    return authState.authState$.pipe(
      map((state) => {
        if (!state) {
          router.navigate(['/auth/login']);
          return false;
        }

        return true;
      }),
    );
  };
};

export const publicGuard = (): CanActivateFn => {
  return () => {
    const router = inject(Router);
    const authState = inject(AuthStateService);

    return authState.authState$.pipe(
      map((state) => {
        if (state) {
          router.navigate(['/']);
          return false;
        }

        return true;
      }),
    );
  };
};

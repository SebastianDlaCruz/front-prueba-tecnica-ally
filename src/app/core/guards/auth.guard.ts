import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';

export const authGuard: CanMatchFn = (route, segments) => {

  const store = inject<Store<{ token: string }>>(Store);
  const router = inject(Router);
  const token = store.selectSignal(state => state.token)();

  return token ? true : router.createUrlTree(['/sing-in']);

};

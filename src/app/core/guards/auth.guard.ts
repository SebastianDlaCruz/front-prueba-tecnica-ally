import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { LocalStoreService } from '@core/services/local-store/local-store.service';
import { Tokens } from '@core/store';
import { setTokens } from '@core/store/actions/token.action';
import { Store } from '@ngrx/store';

export const authGuard: CanMatchFn = (route, segments) => {

  const store = inject<Store<Tokens>>(Store);

  const router = inject(Router);
  const localStore = inject(LocalStoreService);
  const tokensLocal = localStore.getTokens();
  const token = localStore.getTokens().token;


  const currentStoreToken = store.selectSignal(state => state.token)();
  if (token && (!currentStoreToken || currentStoreToken !== token)) {
    store.dispatch(setTokens(localStore.getTokens()));
  }

  store.dispatch(setTokens({
    token: tokensLocal.token,
    refreshToken: tokensLocal.refreshToken
  }));

  return token ? true : router.createUrlTree(['/sing-in']);

};

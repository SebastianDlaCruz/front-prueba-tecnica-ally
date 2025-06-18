import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHttpService } from '@core/http';
import { LocalStoreService } from '@core/services/local-store/local-store.service';
import { Tokens } from '@core/store';
import { deleteTokens, setTokens } from '@core/store/actions/token.action';
import { Store } from '@ngrx/store';
import { catchError, switchMap, throwError } from 'rxjs';

export const authHeadInterceptor: HttpInterceptorFn = (req, next) => {

  const localStorageService = inject(LocalStoreService);
  const store = inject<Store<Tokens>>(Store);
  const tokenStore = store.selectSignal(state => state)();
  const tokensLocal = localStorageService.getTokens();

  const authHttpService = inject(AuthHttpService);
  const router = inject(Router);

  const accessToken = tokenStore.token ?? tokensLocal.token;
  const refreshToken = tokenStore.refreshToken ?? tokensLocal.refreshToken;


  req = req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + accessToken)
  })

  return next(req).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse && error.status === 401 && refreshToken) {
        return authHttpService.refreshToken(refreshToken).pipe(
          switchMap((newTokens) => {

            localStorageService.setTokens(newTokens.token, newTokens.refreshToken);
            store.dispatch(setTokens({
              token: newTokens.token,
              refreshToken: newTokens.refreshToken
            }));


            const newReq = req.clone({
              headers: req.headers.set('Authorization', `Bearer ${newTokens.token}`)
            });

            return next(newReq);
          }),
          catchError((refreshError) => {

            localStorageService.clearTokens();
            store.dispatch(deleteTokens());
            router.navigate(['/sing-in']);
            return throwError(() => refreshError);
          })
        );
      }
      return throwError(() => error);
    })
  );

};

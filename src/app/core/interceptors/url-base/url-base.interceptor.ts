import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

export const urlBaseInterceptor: HttpInterceptorFn = (req, next) => {

  const URL_BASE = environment.backend_api;

  req = req.clone({
    url: `${URL_BASE}${req.url}`
  });
  return next(req);
};

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenReducer } from '@core/store';
import { provideNgIconsConfig } from '@ng-icons/core';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { authHeadInterceptor } from './core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ tokens: tokenReducer }),
    provideNgIconsConfig({
      size: '1.5em',
    }),
    provideHttpClient(withInterceptors([authHeadInterceptor])),
  ]
};

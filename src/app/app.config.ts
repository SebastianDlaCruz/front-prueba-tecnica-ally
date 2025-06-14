import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { tokenReducer } from '@core/store';
import { provideNgIconsConfig } from '@ng-icons/core';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ token: tokenReducer }),
    provideNgIconsConfig({
      size: '1.5em',
    }),
  ]
};

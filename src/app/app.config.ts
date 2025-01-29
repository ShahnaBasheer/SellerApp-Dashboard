import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { DashboardEffects } from './features/dashboard/store/dashboard.effects';
import { appReducer } from './core/state/app.state';


export const appConfig: ApplicationConfig = {
  providers: [

    provideRouter(routes),
    provideCharts(withDefaultRegisterables()),
    provideStore(appReducer),
    provideEffects([ DashboardEffects ]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ]
};


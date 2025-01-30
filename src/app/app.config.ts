import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { DashboardEffects } from './features/dashboard/store/dashboard.effects';
import { appReducer } from './core/state/app.reducer';
import { AppSliceEffects } from './core/state/app.effects';



export const appConfig: ApplicationConfig = {
  providers: [

    provideRouter(routes),
    provideCharts(withDefaultRegisterables()),
    provideStore(appReducer),
    provideEffects([  AppSliceEffects, DashboardEffects ]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ]
};


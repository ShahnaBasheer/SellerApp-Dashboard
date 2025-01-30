


// src/app/store/effects/dashboard.effects.ts
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as DashboardActions from './dashboard.actions';
import { DashboardService } from '../services/dashboard.service';

@Injectable()

export class DashboardEffects {

  private actions$ = inject(Actions);
  private dashboardService = inject(DashboardService);


  loadDashboardData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadDashboardData),
      switchMap(({ country }) =>
        this.dashboardService.getDashboardData(country).pipe(
          map(data => DashboardActions.loadDashboardDataSuccess({ data })),
          catchError(error => of(DashboardActions.loadDashboardDataFailure({ error: error.message })))
        )
      )
    )
  );
}




// src/app/store/effects/dashboard.effects.ts
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap, finalize } from 'rxjs/operators';
import * as DashboardActions from './dashboard.actions';
import { DashboardService } from '../services/dashboard.service';
import * as AppActions from './../../../core/state/app.action';
import { Store } from '@ngrx/store';

@Injectable()

export class DashboardEffects {

  private store$ = inject(Store);
  private actions$ = inject(Actions);
  private dashboardService$ = inject(DashboardService);


  loadDashboardData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadDashboardData),
      tap(() => this.store$.dispatch(AppActions.setLoader())),
      switchMap(({ country }) =>
        this.dashboardService$.getDashboardData(country).pipe(
          map(data => DashboardActions.loadDashboardDataSuccess({ data })),
          catchError(error => of(DashboardActions.loadDashboardDataFailure({ error: error.message }))),
          finalize(() => this.store$.dispatch(AppActions.clearLoader()))
        )
      )
    )
  )

}

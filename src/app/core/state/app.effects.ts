// src/app/store/effects/dashboard.effects.ts
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import * as AppSliceActions from './app.action';


@Injectable()

export class AppSliceEffects {

  private actions$ = inject(Actions);

  setSelectedCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppSliceActions.setSelectedCountry),
      tap(({ country }) => localStorage.setItem('selectedCountry' , country) )
    ), { dispatch: false }
  );
}

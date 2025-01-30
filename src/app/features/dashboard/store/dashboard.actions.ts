
// src/app/store/actions/dashboard.actions.ts
import { createAction, props } from '@ngrx/store';
import { DashboardData } from '../../../core/models/dashboard.modal';


export const loadDashboardData = createAction(
  '[Dashboard] Load Dashboard Data',
  props<{ country: string }>()
);

export const loadDashboardDataSuccess = createAction(
  '[Dashboard] Load Dashboard Data Success',
  props<{ data: DashboardData }>()
);

export const loadDashboardDataFailure = createAction(
  '[Dashboard] Load Dashboard Data Failure',
  props<{ error: string }>()
);

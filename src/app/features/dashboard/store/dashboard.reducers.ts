import { initialState } from './dashboard.state';


// src/app/store/reducers/dashboard.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as DashboardActions  from './dashboard.actions'



export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.loadDashboardData, (state) => ({
    ...state
  })),
  on(DashboardActions.loadDashboardDataSuccess, (state, { data }) => ({
    ...state,
    dashboardData: data
  })),
  on(DashboardActions.loadDashboardDataFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

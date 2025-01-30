

// src/app/store/selectors/dashboard.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from './dashboard.state';


export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');


export const selectDashboardData = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.dashboardData
);


export const selectSalesOverview = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.dashboardData?.salesOverview
);

export const selectSalesByRegion = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.dashboardData?.salesByRegion
);

export const selectError = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.error
);

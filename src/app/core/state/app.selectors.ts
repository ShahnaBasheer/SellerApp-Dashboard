import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateSlice } from "./app.state";


const appStateSelector = createFeatureSelector<AppStateSlice>('app');

export const selectedCountry = createSelector(
  appStateSelector,
  (state: AppStateSlice) => state.selectedCountry
);

export const selectLoader = createSelector(
  appStateSelector,
  (state: AppStateSlice) => state.loading
);

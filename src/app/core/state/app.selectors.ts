import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateSlice } from "./app.state";


const selectCountryState = createFeatureSelector<AppStateSlice>('app');

export const selectedCountry = createSelector(
  selectCountryState,
  (state: AppStateSlice) => state.selectedCountry
);

import { AppState, AppStateSlice } from "./app.state";
import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import * as appActions from './app.action';
import { dashboardReducer } from "../../features/dashboard/store/dashboard.reducers";
import { Country } from "../enums/country.enum";

export const initialState: AppStateSlice = {
  selectedCountry:  Country.USA,
  loading: false,
}

export const globalReducer = createReducer(
  initialState,
  on(appActions.setSelectedCountry, (state, { country }) => ({
    ...state,
    selectedCountry: country
  })),
  on(appActions.setLoader, (state) => ({
    ...state,
    loading: true
  })),
  on(appActions.clearLoader, (state) => ({
    ...state,
    loading: false
  })),
);


export const appReducer: ActionReducerMap<AppState> = {
  app: globalReducer,
  dashboard: dashboardReducer,
};


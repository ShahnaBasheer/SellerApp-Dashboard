import { DashboardState } from '../../features/dashboard/store/dashboard.state';

export interface AppStateSlice {
  selectedCountry: string;
}

export interface AppState {
  app: AppStateSlice;
  dashboard: DashboardState;
}


import { DashboardState } from '../../features/dashboard/store/dashboard.state';

export interface AppStateSlice {
  selectedCountry: string;
  loading: boolean;
}

export interface AppState {
  app: AppStateSlice;
  dashboard: DashboardState;
}


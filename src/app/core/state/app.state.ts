import { DashboardState } from '../../features/dashboard/store/dashboard.state';
import { dashboardReducer } from './../../features/dashboard/store/dashboard.reducers';


export interface AppState {
  dashboard: DashboardState;
}


export const appReducer = {
  dashboard: dashboardReducer,
}


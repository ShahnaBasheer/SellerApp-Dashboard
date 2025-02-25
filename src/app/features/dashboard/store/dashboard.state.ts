import { Country } from "../../../core/enums/country.enum";
import { DashboardData } from "../../../core/models/dashboard.modal";



export interface DashboardState {
  dashboardData: DashboardData | null; // Modify as per the data structure you fetch from the backend
  error: string | null;
}

export const initialState: DashboardState = {
  dashboardData: null,
  error: null
};

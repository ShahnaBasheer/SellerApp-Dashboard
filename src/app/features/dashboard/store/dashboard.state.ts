import { Country } from "../../../core/enums/country.enum";
import { DashboardData } from "../../../core/models/dashboard.modal";



export interface DashboardState {
  selectedCountry: string;
  dashboardData: DashboardData | null; // Modify as per the data structure you fetch from the backend
  loading: boolean;
  error: string | null;
}

export const initialState: DashboardState = {
  selectedCountry: Country.USA, // Default country
  dashboardData: null,
  loading: false,
  error: null
};

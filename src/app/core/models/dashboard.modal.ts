// src/app/models/dashboard.model.ts

export interface statusCardData {
  title: string;
  value: number;
  percentageChange: number;
  unit: 'CURR' | '%' | 'VIEWS'
}


export interface SalesOverview {
  month: string;
  revenue: number;
  target: number;
}

export interface SalesByRegion {
  Asia: number;
  Europe: number;
  Pacific: number;
  Americas: number;
  MiddleEast: number;
  Africa: number;
}

export interface RegisteredUsers {
  premium: number;
  basic: number;
}

export interface Integration {
  application: { name: string, logoUrl: string };
  type: string;
  rate: number;
  profit: number;
}

export interface DashboardData {
  stats: statusCardData[];
  salesOverview: SalesOverview[];
  salesByRegion: SalesByRegion;
  registeredUsers: RegisteredUsers;
  integrations: Integration[];
}

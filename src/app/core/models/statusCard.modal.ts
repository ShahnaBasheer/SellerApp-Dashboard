import { currency } from "../enums/currency.enum";


export interface statusCardData {
  title: string;
  value: number;
  percentageChange: number;
  unit: 'CURR' | '%' | 'VIEWS'
}

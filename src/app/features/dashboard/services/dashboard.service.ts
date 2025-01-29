


// src/app/services/dashboard.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardData } from '../../../core/models/dashboard.modal';
import { CountryData } from '../../../core/json/data.json';


@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  constructor() {}
  getDashboardData(country: string): Observable<DashboardData> {
    const data = (CountryData as any).countries[country];
    return of(data);
  }
}

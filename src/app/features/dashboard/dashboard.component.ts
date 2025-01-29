import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { SalesOverviewComponent } from "./components/sales-overview/sales-overview.component";
import { SalesByRegionComponent } from "./components/sales-by-region/sales-by-region.component";
import { RegisteredUsersComponent } from "./components/registered-users/registered-users.component";
import { ListIntegrationComponent } from "./components/list-integration/list-integration.component";
import { Store } from '@ngrx/store';
import { selectDashboardData, selectSelectedCountry  } from './store/dashboard.selectors';
import { statusCardData } from '../../core/models/dashboard.modal';
import { Currency } from '../../core/enums/country.enum';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, StatusCardComponent, SalesOverviewComponent, SalesByRegionComponent, RegisteredUsersComponent, ListIntegrationComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})

export class DashboardComponent implements OnInit{
  private store = inject(Store);
  CURR!: Currency;
  statusCardData: statusCardData[] = [];

  ngOnInit(): void {
     this.store.select(selectDashboardData).subscribe((data) => {
       this.statusCardData = data?.stats ?? [];
     })

     this.store.select(selectSelectedCountry).subscribe((data: string) => {
      this.CURR = Currency[data.toUpperCase() as keyof typeof Currency];
      console.log(this.CURR);
    })

  }

}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatusCardComponent } from "../../shared/components/status-card/status-card.component";
import { statusCardData } from '../../core/models/statusCard.modal';
import { currency } from '../../core/enums/currency.enum';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, StatusCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent {

  statusCardData: statusCardData[] = [
    { title: 'Total Income', value: 12000, percentageChange: 10, unit: 'CURR' },
    { title: 'Profit', value: 7000, percentageChange: -3, unit: 'CURR' },
    { title: 'Total Views', value: 250000, percentageChange: 5, unit: 'VIEWS' },
    { title: 'Conversion Rate', value: 2.5, percentageChange: 0.5, unit: '%' }
  ];

  ngDoCheck(){
    console.log("dashboard working")
   }
}

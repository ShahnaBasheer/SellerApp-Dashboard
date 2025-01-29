import { Component, inject, Input } from '@angular/core';
import { CardHeaderWrapperComponent } from "../../../../shared/components/card-header-wrapper/card-header-wrapper.component";
import { CommonModule } from '@angular/common';
import { Integration } from '../../../../core/models/dashboard.modal';
import { Store } from '@ngrx/store';
import { selectDashboardData } from '../../store/dashboard.selectors';
import { Currency } from '../../../../core/enums/country.enum';

@Component({
  selector: 'app-list-integration',
  imports: [CardHeaderWrapperComponent, CommonModule],
  templateUrl: './list-integration.component.html',
  styleUrl: './list-integration.component.css'
})

export class ListIntegrationComponent {
  private store: Store = inject(Store);
  @Input({ required: true }) CURR!: Currency;
  tableData: Integration[] = []

  ngOnInit(): void {
     this.store.select(selectDashboardData).subscribe(data => {
        this.tableData = data?.integrations ?? []
     })
  }
}

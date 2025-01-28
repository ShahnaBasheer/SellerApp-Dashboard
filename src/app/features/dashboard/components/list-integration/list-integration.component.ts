import { Component } from '@angular/core';
import { CardHeaderWrapperComponent } from "../../../../shared/components/card-header-wrapper/card-header-wrapper.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-integration',
  imports: [CardHeaderWrapperComponent, CommonModule],
  templateUrl: './list-integration.component.html',
  styleUrl: './list-integration.component.css'
})

export class ListIntegrationComponent {
  tableData = [
    {
      application: 'Stripe',
      type: 'Finance',
      rate: 45,
      profit: 12345
    },
    {
      application: 'Zapier',
      type: 'CRM',
      rate: 20,
      profit: 4567
    },
    {
      application: 'Shopify',
      type: 'Marketplace',
      rate: 60,
      profit: 9234
    }
  ];

}

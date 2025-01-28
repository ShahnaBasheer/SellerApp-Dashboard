import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { statusCardData } from '../../../../core/models/statusCard.modal';
import { CardHeaderWrapperComponent } from '../../../../shared/components/card-header-wrapper/card-header-wrapper.component';

@Component({
  selector: 'app-status-card',
  imports: [ CommonModule, CurrencyPipe, CardHeaderWrapperComponent ],
  templateUrl: './status-card.component.html',
  styleUrl: './status-card.component.css',
})


export class StatusCardComponent {
  @Input({required: true}) data!: statusCardData;

  get getAbsolutePercentageChange(): number {
    return Math.abs(this.data.percentageChange);
  }

}

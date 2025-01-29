import { Component, inject, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CardHeaderWrapperComponent } from '../../../../shared/components/card-header-wrapper/card-header-wrapper.component';
import { statusCardData } from '../../../../core/models/dashboard.modal';
import { Store } from '@ngrx/store';
import { Currency } from '../../../../core/enums/country.enum';

@Component({
  selector: 'app-status-card',
  imports: [ CommonModule, CurrencyPipe, CardHeaderWrapperComponent ],
  templateUrl: './status-card.component.html',
  styleUrl: './status-card.component.css',
})


export class StatusCardComponent {
  @Input({required: true}) CURR!: Currency;
  @Input({required: true}) data!: statusCardData;

  get getAbsolutePercentageChange(): number {
    return Math.abs(this.data.percentageChange);
  }

}

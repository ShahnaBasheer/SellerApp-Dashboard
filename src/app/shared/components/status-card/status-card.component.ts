import { Component, Input } from '@angular/core';
import { statusCardData } from '../../../core/models/statusCard.modal';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-status-card',
  imports: [ CommonModule, CurrencyPipe ],
  templateUrl: './status-card.component.html',
  styleUrl: './status-card.component.css',
})


export class StatusCardComponent {
  @Input({required: true}) data!: statusCardData;

  get getAbsolutePercentageChange(): number {
    return Math.abs(this.data.percentageChange);
  }

}

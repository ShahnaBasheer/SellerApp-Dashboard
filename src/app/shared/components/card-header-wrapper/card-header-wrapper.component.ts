import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header-wrapper',
  imports: [],
  templateUrl: './card-header-wrapper.component.html',
  styleUrl: './card-header-wrapper.component.css'
})
export class CardHeaderWrapperComponent {
   @Input({required: true}) title!: string;
}

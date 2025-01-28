import { Component } from '@angular/core';
import { CardHeaderWrapperComponent } from '../../../../shared/components/card-header-wrapper/card-header-wrapper.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registered-users',
  imports: [ CardHeaderWrapperComponent, NgxGaugeModule, CommonModule ],
  templateUrl: './registered-users.component.html',
  styleUrl: './registered-users.component.css'
})

export class RegisteredUsersComponent {
  basicUsers = 597; // Example total users
  premiumUsers = 2504; // Example number of premium users

  // Calculate the percentage of Premium Users
  get currentUsersPercentage() {
    return (this.premiumUsers / (this.basicUsers + this.premiumUsers)) * 100;
  }
}

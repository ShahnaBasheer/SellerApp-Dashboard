import { Component, inject, OnInit } from '@angular/core';
import { CardHeaderWrapperComponent } from '../../../../shared/components/card-header-wrapper/card-header-wrapper.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectDashboardData } from '../../store/dashboard.selectors';

@Component({
  selector: 'app-registered-users',
  imports: [ CardHeaderWrapperComponent, NgxGaugeModule, CommonModule ],
  templateUrl: './registered-users.component.html',
  styleUrl: './registered-users.component.css'
})

export class RegisteredUsersComponent implements OnInit{
  basicUsers = 597;
  premiumUsers = 2504;

  private store: Store = inject(Store);


  ngOnInit(): void {
    this.store.select(selectDashboardData).subscribe(data => {
      if(data){
        this.basicUsers = data.registeredUsers.basic;
        this.premiumUsers = data.registeredUsers.premium;
      }
    })
  }

  get currentUsersPercentage() {
    return (this.premiumUsers / (this.basicUsers + this.premiumUsers)) * 100;
  }
}

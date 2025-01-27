import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PanelComponent } from './features/panel.component';


export const routes: Routes = [
  { path: '', component: PanelComponent,  children: [
      {  path: 'dashboard', component: DashboardComponent },
      {  path: '', redirectTo:'dashboard', pathMatch: 'full' }
    ]
  }
];

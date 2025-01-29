import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { icons } from '../../../core/enums/icons.enums';
import { FormsModule } from '@angular/forms'
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";


@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, SvgIconComponent, FormsModule, ThemeToggleComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',

})


export class SidebarComponent {
  brandIcon = icons.Brand;
  isExpanded: boolean = false;
  @Output() SliderTogglerEmitter = new EventEmitter<boolean>();

  menuItems =
    [
        {
          name: 'Dashboard',
          route: '/dashboard',
          path: icons.Dashboard,
        },
        {
          name: 'Payment',
          route: '/payment',
          path: icons.Payment,
        },
        {
          name: 'Customers',
          route: '/customers',
          path: icons.Customers,
        },
        {
          name: 'Messages',
          route: '/messages',
          path: icons.Messages,
        },
        {
          name: 'Product',
          route: '/product',
          path: icons.Product,
        },
        {
          name: 'Invoice',
          route: '/invoice',
          path: icons.Invoice,
        },
        {
          name: 'Analytics',
          route: '/analytics',
          path: icons.Analytics,
        },
        {
          name: 'Settings',
          route: '/settings',
          path: icons.Settings,
        },
        {
          name: 'Security',
          route: '/security',
          path: icons.Security,
        },
        {
          name: 'Help',
          route: '/help',
          path: icons.Help,
        },
        {
          name: 'Log Out',
          route: '/logout',
          path: icons.Logout,
        },
      ]


  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    this.SliderTogglerEmitter.emit(this.isExpanded);
  }

}






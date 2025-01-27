import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

@Component({
  selector: 'app-topbar',
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})

export class TopbarComponent {
  countries = [
    { name: 'USA', flag: 'https://flagcdn.com/w40/us.png' },
    { name: 'India', flag: 'https://flagcdn.com/w40/in.png' },
    { name: 'UK', flag: 'https://flagcdn.com/w40/gb.png' },
    { name: 'Canada', flag: 'https://flagcdn.com/w40/ca.png' },
    { name: 'France', flag: 'https://flagcdn.com/w40/fr.png' },
  ];

  // Store the currently selected country
  selectedCountry = this.countries[0]; // Default selected country
  isOpen = false; // Control the visibility of the dropdown

  // Select a country
  selectCountry(country: any) {
    this.selectedCountry = country;
    this.isOpen = false; // Close the dropdown after selection
  }

  closeDropdown() {
    this.isOpen = false;
  }

  // }
  // closeDropdown = () => {
  //   this.isOpen = false;
  //   console.log("ded", this.isOpen, this);
  // };
}

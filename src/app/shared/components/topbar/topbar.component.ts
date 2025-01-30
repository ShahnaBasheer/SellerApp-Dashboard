import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { Store } from '@ngrx/store';
import { setSelectedCountry } from '../../../core/state/app.action';
import { Country } from '../../../core/enums/country.enum';


@Component({
  selector: 'app-topbar',
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})

export class TopbarComponent implements OnInit{
  private store = inject(Store);
  selectedCountry!: { name: string, flag: string};

  countries = [
    { name: 'USA', flag: 'https://flagcdn.com/w40/us.png' },
    { name: 'India', flag: 'https://flagcdn.com/w40/in.png' },
    { name: 'UK', flag: 'https://flagcdn.com/w40/gb.png' },
    { name: 'Canada', flag: 'https://flagcdn.com/w40/ca.png' },
  ];
  isOpen = false; // Control the visibility of the dropdown

  ngOnInit(): void{
      const storedCountry = localStorage.getItem('selectedCountry') || Country.USA;
      this.selectedCountry = this.countries.find(c => c.name === storedCountry) || this.countries[0];
      this.store.dispatch(setSelectedCountry({ country: storedCountry}))
  }

  // Select a country
  selectCountry(country: {name: string, flag: string}): void {
    this.selectedCountry = country;
    this.store.dispatch(setSelectedCountry({ country: this.selectedCountry.name }))
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

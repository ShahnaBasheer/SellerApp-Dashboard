import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { icons } from '../../../core/enums/icons.enums';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-theme-toggle',
  imports: [ CommonModule, SvgIconComponent ],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})

export class ThemeToggleComponent {
    lightIcon = icons.LightTheme;
    darkIcon = icons.DarkTheme;
    isChecked: boolean = true;


    constructor() {
      // Check user's preference from localStorage or system preference
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        this.isChecked = storedTheme === 'light';
      } else {
        this.isChecked = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      this.applyTheme();
    }

    onToggleTheme() {
      this.isChecked = !this.isChecked;

      this.applyTheme();
    }

    applyTheme() {
      const theme = this.isChecked ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', !this.isChecked);
      localStorage.setItem('theme', theme);
    }

}

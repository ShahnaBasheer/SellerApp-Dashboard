import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from "./shared/components/loader/loader.component";
import { selectLoader } from './core/state/app.selectors';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'frontend';
  private store = inject(Store);
  isLoading$!: Observable<boolean>;

ngOnInit(): void {
    this.isLoading$ = this.store.select(selectLoader);
  }
}

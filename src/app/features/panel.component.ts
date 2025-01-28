import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from "../shared/components/topbar/topbar.component";

@Component({
  selector: 'app-panel',
  imports: [RouterOutlet, SidebarComponent, CommonModule, TopbarComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})


export class PanelComponent {
  isExpanded = false;


  toggleExpand(value: boolean){
     this.isExpanded = value;
  }
}

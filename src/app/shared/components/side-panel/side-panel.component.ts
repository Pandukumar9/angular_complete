import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidepanel',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss'
})
export class SidePanelComponent {
  isSidebarVisible: boolean = true;

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('main-content');
    if (sidebar && content) {
      this.isSidebarVisible = !this.isSidebarVisible;
      if (this.isSidebarVisible) {
        sidebar.style.width = '250px';
        content.style.marginLeft = '250px';
      } else {
        sidebar.style.width = '0';
        content.style.marginLeft = '0';
      }
    }
  }
}

import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidePanelComponent } from './shared/components/side-panel/side-panel.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FooterComponent,SidePanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_complete';
}

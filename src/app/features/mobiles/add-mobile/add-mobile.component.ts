import { Component } from '@angular/core';
import { ReuseDialogComponent } from '../../../shared/components/reuse-dialog/reuse-dialog.component';

@Component({
  selector: 'app-add-mobile',
  imports: [ReuseDialogComponent],
  templateUrl: './add-mobile.component.html',
  styleUrl: './add-mobile.component.scss'
})
export class AddMobileComponent {
  handleModalClose() {
    console.log('Modal closed');
  }
}

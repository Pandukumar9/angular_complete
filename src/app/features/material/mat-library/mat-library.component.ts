import { Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogTestComponent } from '../mat-dialog-test/mat-dialog-test.component';

@Component({
  selector: 'app-mat-library',
  imports: [MatDialogModule,MatFormFieldModule,FormsModule],
  templateUrl: './mat-library.component.html',
  styleUrl: './mat-library.component.scss'
})
export class MatLibraryComponent {
  readonly dialog = inject(MatDialog);

  users = [
    {id:1, name:'madhu' , city: 'wgl'},
    {id:2, name:'karthik' , city: 'hnk'},
    {id:3, name:'prudvi' , city: 'hyd.'},
  ];
  title = 'Hello users'
  openDialog(): void {
    const dialogRef = this.dialog.open(MatDialogTestComponent, {
      data: {
        userdata: this.users,
        title: this.title,
        isactive: true
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        console.log('Dialog result:', result);
      }
    });
  }
}

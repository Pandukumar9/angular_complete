import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialog-test',
  imports: [],
  templateUrl: './mat-dialog-test.component.html',
  styleUrl: './mat-dialog-test.component.scss'
})
export class MatDialogTestComponent {
  constructor(
    public dialogRef: MatDialogRef<MatDialogTestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userdata: any[]; title: string; isactive: boolean }
  ) {}

  // Method to close dialog and optionally pass back a result
  closeDialog(): void {
    this.dialogRef.close('Some Result Data');
  }
}

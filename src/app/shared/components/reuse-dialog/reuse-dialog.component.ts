import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reuse-dialog',
  imports: [CommonModule],
  templateUrl: './reuse-dialog.component.html',
  styleUrl: './reuse-dialog.component.scss'
})
export class ReuseDialogComponent {
  @Input() title: string = 'Modal Title';
  @Input() body: string = 'Modal body content';
  @Output() onClose: EventEmitter<void> = new EventEmitter();

  close() {
    this.onClose.emit();
  }
}

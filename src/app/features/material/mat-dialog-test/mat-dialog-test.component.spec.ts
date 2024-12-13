import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogTestComponent } from './mat-dialog-test.component';

describe('MatDialogTestComponent', () => {
  let component: MatDialogTestComponent;
  let fixture: ComponentFixture<MatDialogTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialogTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

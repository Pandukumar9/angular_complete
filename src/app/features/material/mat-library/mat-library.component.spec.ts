import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatLibraryComponent } from './mat-library.component';

describe('MatLibraryComponent', () => {
  let component: MatLibraryComponent;
  let fixture: ComponentFixture<MatLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

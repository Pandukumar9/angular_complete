import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyTestComponent } from './formly-test.component';

describe('FormlyTestComponent', () => {
  let component: FormlyTestComponent;
  let fixture: ComponentFixture<FormlyTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormlyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropImgComponent } from './crop-img.component';

describe('CropImgComponent', () => {
  let component: CropImgComponent;
  let fixture: ComponentFixture<CropImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovedPictureQualityComponent } from './improved-picture-quality.component';

describe('ImprovedPictureQualityComponent', () => {
  let component: ImprovedPictureQualityComponent;
  let fixture: ComponentFixture<ImprovedPictureQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovedPictureQualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovedPictureQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

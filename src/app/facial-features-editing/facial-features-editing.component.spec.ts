import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialFeaturesEditingComponent } from './facial-features-editing.component';

describe('FacialFeaturesEditingComponent', () => {
  let component: FacialFeaturesEditingComponent;
  let fixture: ComponentFixture<FacialFeaturesEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacialFeaturesEditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialFeaturesEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

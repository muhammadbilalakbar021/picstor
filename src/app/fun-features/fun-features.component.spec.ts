import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFeaturesComponent } from './fun-features.component';

describe('FunFeaturesComponent', () => {
  let component: FunFeaturesComponent;
  let fixture: ComponentFixture<FunFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

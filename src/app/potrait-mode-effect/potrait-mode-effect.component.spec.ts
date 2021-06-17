import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotraitModeEffectComponent } from './potrait-mode-effect.component';

describe('PotraitModeEffectComponent', () => {
  let component: PotraitModeEffectComponent;
  let fixture: ComponentFixture<PotraitModeEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotraitModeEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotraitModeEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

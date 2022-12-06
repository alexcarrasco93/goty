import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalBarGraphicComponent } from './horizontal-bar-graphic.component';

describe('HorizontalBarGraphicComponent', () => {
  let component: HorizontalBarGraphicComponent;
  let fixture: ComponentFixture<HorizontalBarGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalBarGraphicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalBarGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

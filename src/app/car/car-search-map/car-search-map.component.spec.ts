import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSearchMapComponent } from './car-search-map.component';

describe('CarSearchMapComponent', () => {
  let component: CarSearchMapComponent;
  let fixture: ComponentFixture<CarSearchMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarSearchMapComponent]
    });
    fixture = TestBed.createComponent(CarSearchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

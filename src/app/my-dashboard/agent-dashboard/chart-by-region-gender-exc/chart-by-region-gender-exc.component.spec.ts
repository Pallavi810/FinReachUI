import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartByRegionGenderExcComponent } from './chart-by-region-gender-exc.component';

describe('ChartByRegionGenderExcComponent', () => {
  let component: ChartByRegionGenderExcComponent;
  let fixture: ComponentFixture<ChartByRegionGenderExcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartByRegionGenderExcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartByRegionGenderExcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartByRegionComponent } from './chart-by-region.component';

describe('ChartByRegionComponent', () => {
  let component: ChartByRegionComponent;
  let fixture: ComponentFixture<ChartByRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartByRegionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

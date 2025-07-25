import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartByOccupationComponent } from './chart-by-occupation.component';

describe('ChartByOccupationComponent', () => {
  let component: ChartByOccupationComponent;
  let fixture: ComponentFixture<ChartByOccupationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartByOccupationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartByOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartByAgeComponent } from './chart-by-age.component';

describe('ChartByAgeComponent', () => {
  let component: ChartByAgeComponent;
  let fixture: ComponentFixture<ChartByAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartByAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

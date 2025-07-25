import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartByLocationComponent } from './chart-by-location.component';

describe('ChartByLocationComponent', () => {
  let component: ChartByLocationComponent;
  let fixture: ComponentFixture<ChartByLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartByLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

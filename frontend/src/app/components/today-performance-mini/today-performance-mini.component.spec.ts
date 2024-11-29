import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayPerformanceMiniComponent } from './today-performance-mini.component';

describe('TodayPerformanceMiniComponent', () => {
  let component: TodayPerformanceMiniComponent;
  let fixture: ComponentFixture<TodayPerformanceMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayPerformanceMiniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodayPerformanceMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

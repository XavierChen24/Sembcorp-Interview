import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyEnergyGeneratedComponent } from './daily-energy-generated.component';

describe('DailyEnergyGeneratedComponent', () => {
  let component: DailyEnergyGeneratedComponent;
  let fixture: ComponentFixture<DailyEnergyGeneratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyEnergyGeneratedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyEnergyGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

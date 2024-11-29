import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetMiniComponent } from './asset-mini.component';

describe('AssetMiniComponent', () => {
  let component: AssetMiniComponent;
  let fixture: ComponentFixture<AssetMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetMiniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

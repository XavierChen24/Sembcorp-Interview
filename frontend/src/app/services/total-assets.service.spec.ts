import { TestBed } from '@angular/core/testing';

import { TotalAssetsService } from './total-assets.service';

describe('TotalAssetsService', () => {
  let service: TotalAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

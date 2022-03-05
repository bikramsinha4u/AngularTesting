import { TestBed } from '@angular/core/testing';

import { SvcEngineService } from './svc-engine.service';

describe('SvcEngineService', () => {
  let service: SvcEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvcEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

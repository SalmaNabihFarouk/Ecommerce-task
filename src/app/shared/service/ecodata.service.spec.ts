import { TestBed } from '@angular/core/testing';

import { EcodataService } from './ecodata.service';

describe('EcodataService', () => {
  let service: EcodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

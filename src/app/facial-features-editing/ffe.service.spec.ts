import { TestBed } from '@angular/core/testing';

import { FfeService } from './ffe.service';

describe('FfeService', () => {
  let service: FfeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FfeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

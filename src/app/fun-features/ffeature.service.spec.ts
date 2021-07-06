import { TestBed } from '@angular/core/testing';

import { FfeatureService } from './ffeature.service';

describe('FfeatureService', () => {
  let service: FfeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FfeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

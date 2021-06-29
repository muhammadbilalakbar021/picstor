import { TestBed } from '@angular/core/testing';

import { IpqService } from './ipq.service';

describe('IpqService', () => {
  let service: IpqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

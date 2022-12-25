import { TestBed } from '@angular/core/testing';

import { AryaloService } from './aryalo.service';

describe('AryaloService', () => {
  let service: AryaloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AryaloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

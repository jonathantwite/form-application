import { TestBed } from '@angular/core/testing';

import { NewElectorService } from './new-elector.service';

describe('NewElectorService', () => {
  let service: NewElectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewElectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

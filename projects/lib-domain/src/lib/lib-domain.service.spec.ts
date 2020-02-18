import { TestBed } from '@angular/core/testing';

import { LibDomainService } from './lib-domain.service';

describe('LibDomainService', () => {
  let service: LibDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

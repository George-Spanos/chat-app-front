import { TestBed } from '@angular/core/testing';

import { LibModelService } from './lib-model.service';

describe('LibModelService', () => {
  let service: LibModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

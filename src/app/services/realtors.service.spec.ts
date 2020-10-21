import { TestBed } from '@angular/core/testing';

import { RealtorsService } from './realtors.service';

describe('RealtorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealtorsService = TestBed.get(RealtorsService);
    expect(service).toBeTruthy();
  });
});

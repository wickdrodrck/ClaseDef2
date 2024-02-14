import { TestBed } from '@angular/core/testing';

import { PelimediaService } from './pelimedia.service';

describe('PelimediaService', () => {
  let service: PelimediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PelimediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

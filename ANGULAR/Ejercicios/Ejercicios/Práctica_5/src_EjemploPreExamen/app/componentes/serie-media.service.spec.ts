import { TestBed } from '@angular/core/testing';

import { SerieMediaService } from './serie-media.service';

describe('SerieMediaService', () => {
  let service: SerieMediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerieMediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

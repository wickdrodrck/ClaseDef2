import { TestBed } from '@angular/core/testing';

import { ServiciolibrosService } from './serviciolibros.service';

describe('ServiciolibrosService', () => {
  let service: ServiciolibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciolibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

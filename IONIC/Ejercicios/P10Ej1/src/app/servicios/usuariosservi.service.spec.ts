import { TestBed } from '@angular/core/testing';

import { UsuariosserviService } from './usuariosservi.service';

describe('UsuariosserviService', () => {
  let service: UsuariosserviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosserviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

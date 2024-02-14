import { TestBed } from '@angular/core/testing';

import { TraerPeliculasService } from './traer-peliculas.service';

describe('TraerPeliculasService', () => {
  let service: TraerPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraerPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

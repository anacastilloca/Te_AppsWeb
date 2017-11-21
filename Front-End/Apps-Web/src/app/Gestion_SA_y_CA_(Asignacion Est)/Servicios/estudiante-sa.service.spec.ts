import { TestBed, inject } from '@angular/core/testing';

import { EstudianteSaService } from './estudiante-sa.service';

describe('EstudianteSaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstudianteSaService]
    });
  });

  it('should be created', inject([EstudianteSaService], (service: EstudianteSaService) => {
    expect(service).toBeTruthy();
  }));
});

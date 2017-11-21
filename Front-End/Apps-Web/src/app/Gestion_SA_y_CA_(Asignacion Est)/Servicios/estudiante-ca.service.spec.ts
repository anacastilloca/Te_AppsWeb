import { TestBed, inject } from '@angular/core/testing';

import { EstudianteCaService } from './estudiante-ca.service';

describe('EstudianteCaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstudianteCaService]
    });
  });

  it('should be created', inject([EstudianteCaService], (service: EstudianteCaService) => {
    expect(service).toBeTruthy();
  }));
});

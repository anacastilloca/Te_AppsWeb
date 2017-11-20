import { TestBed, inject } from '@angular/core/testing';

import { SecueniaAccionesService } from './secuenia-acciones.service';

describe('SecueniaAccionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecueniaAccionesService]
    });
  });

  it('should be created', inject([SecueniaAccionesService], (service: SecueniaAccionesService) => {
    expect(service).toBeTruthy();
  }));
});

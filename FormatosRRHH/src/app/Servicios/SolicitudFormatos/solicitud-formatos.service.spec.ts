import { TestBed } from '@angular/core/testing';

import { SolicitudFormatosService } from './solicitud-formatos.service';

describe('SolicitudFormatosService', () => {
  let service: SolicitudFormatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudFormatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

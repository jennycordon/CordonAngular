import { TestBed } from '@angular/core/testing';

import { EmpleadoDataServiceService } from './empleado-data-service.service';

describe('EmpleadoDataServiceService', () => {
  let service: EmpleadoDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

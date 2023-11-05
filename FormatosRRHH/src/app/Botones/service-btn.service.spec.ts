import { TestBed } from '@angular/core/testing';

import { ServiceBTNService } from './service-btn.service';

describe('ServiceBTNService', () => {
  let service: ServiceBTNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBTNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

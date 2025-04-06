import { TestBed } from '@angular/core/testing';

import { HttpGatewayServiceService } from './http-gateway-service.service';

describe('HttpGatewayServiceService', () => {
  let service: HttpGatewayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGatewayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

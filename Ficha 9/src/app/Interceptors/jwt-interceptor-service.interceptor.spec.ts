import { TestBed } from '@angular/core/testing';

import { JwtInterceptorServiceInterceptor } from './jwt-interceptor-service.interceptor';

describe('JwtInterceptorServiceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtInterceptorServiceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtInterceptorServiceInterceptor = TestBed.inject(JwtInterceptorServiceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

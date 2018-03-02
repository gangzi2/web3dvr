import { TestBed, inject } from '@angular/core/testing';

import { LoadingScriptService } from './loading-script.service';

describe('LoadingScriptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingScriptService]
    });
  });

  it('should be created', inject([LoadingScriptService], (service: LoadingScriptService) => {
    expect(service).toBeTruthy();
  }));
});

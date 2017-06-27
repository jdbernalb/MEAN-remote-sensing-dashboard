import { TestBed, inject } from '@angular/core/testing';

import { YahooService } from './yahoo.service';

describe('YahooService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YahooService]
    });
  });

  it('should be created', inject([YahooService], (service: YahooService) => {
    expect(service).toBeTruthy();
  }));
});

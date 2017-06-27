import { TestBed, inject } from '@angular/core/testing';

import { FirebService } from './fireb.service';

describe('FirebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebService]
    });
  });

  it('should be created', inject([FirebService], (service: FirebService) => {
    expect(service).toBeTruthy();
  }));
});

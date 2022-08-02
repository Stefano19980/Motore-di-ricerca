import { TestBed } from '@angular/core/testing';

import { ParolaService } from './parola.service';

describe('ParolaService', () => {
  let service: ParolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

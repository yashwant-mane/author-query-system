import { TestBed } from '@angular/core/testing';

import { ReadjsonService } from './readjson.service';

describe('ReadjsonService', () => {
  let service: ReadjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

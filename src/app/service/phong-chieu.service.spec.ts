import { TestBed } from '@angular/core/testing';

import { PhongChieuService } from './phong-chieu.service';

describe('PhongChieuService', () => {
  let service: PhongChieuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhongChieuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

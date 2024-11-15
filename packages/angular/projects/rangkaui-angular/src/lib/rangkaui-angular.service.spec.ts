import { TestBed } from '@angular/core/testing';

import { RangkauiAngularService } from './rangkaui-angular.service';

describe('RangkauiAngularService', () => {
  let service: RangkauiAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RangkauiAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

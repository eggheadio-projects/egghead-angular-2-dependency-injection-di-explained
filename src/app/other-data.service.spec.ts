/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OtherDataService } from './other-data.service';

describe('Service: OtherData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtherDataService]
    });
  });

  it('should ...', inject([OtherDataService], (service: OtherDataService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { UsersPaginationService } from './users-pagination.service';

describe('UsersPaginationService', () => {
  let service: UsersPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

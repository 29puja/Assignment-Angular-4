import { TestBed } from '@angular/core/testing';

import { ViewIssueDetailsGuard } from './view-issue-details.guard';

describe('ViewIssueDetailsGuard', () => {
  let guard: ViewIssueDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ViewIssueDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ProposalService } from './proposal.service';

describe('ProposalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProposalService = TestBed.get(ProposalService);
    expect(service).toBeTruthy();
  });
});

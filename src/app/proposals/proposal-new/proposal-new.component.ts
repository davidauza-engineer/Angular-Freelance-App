import { Component, OnInit } from '@angular/core';
import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['./proposal-new.component.css'],
  providers: [ProposalService]
})
export class ProposalNewComponent implements OnInit {
  proposal = new Proposal();
  submitted = false;

  constructor(
    private proposalService: ProposalService
  ) { }

  ngOnInit() {
  }

  createProposal(proposal) {
    this.submitted = true;
    this.proposalService.createProposal(proposal)
      .subscribe(data => true);
  }
}

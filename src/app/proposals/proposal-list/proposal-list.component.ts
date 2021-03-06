import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css'],
  providers: [ProposalService]
})
export class ProposalListComponent implements OnInit {
  proposals: Proposal[];

  constructor(
    private proposalService: ProposalService,
    private router: Router
  ) { }

  ngOnInit() {
    const timeVar = timer(0, 5000);
    timeVar.subscribe(() => this.getProposals());
  }

  getProposals() {
    this.proposalService.getProposals()
      .subscribe(
        proposals => this.proposals = proposals
      );
  }

  goToShow(proposal: Proposal): void {
    const link = ['/proposals', proposal.id];
    this.router.navigate(link);
  }
}

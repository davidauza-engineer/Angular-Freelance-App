import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';

import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposal-show.component.css'],
  providers: [ProposalService]
})
export class ProposalShowComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private proposalService: ProposalService,
    private route: ActivatedRoute
  ) { }

  @Input()
  proposal: Proposal;

  ngOnInit(): void {
    const proposalRequest = this.route.params
      .pipe(
        mergeMap( params => this.proposalService.getProposal(+params.id))
      );
    proposalRequest.subscribe(response => this.proposal = response as Proposal);
  }
}

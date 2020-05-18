import { Component, OnInit } from '@angular/core';
import { Proposal } from '../proposal';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  proposalOne: Proposal = new Proposal(15, 'Abc Company',
    'http://davidauza.engineer', 'Ruby on Rails',
    150, 120, 15,
    'davidauza01@gmail.com');
  proposalTwo: Proposal = new Proposal(99, 'XYZ Company',
    'http://davidauza.engineer', 'Ruby on Rails',
    150, 120, 15,
    'davidauza01@gmail.com');
  proposalThree: Proposal = new Proposal(300, 'Something Company',
    'http://davidauza.engineer', 'Ruby on Rails',
    150, 120, 15,
    'davidauza01@gmail.com');
  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ];

  constructor() { }

  ngOnInit() {
  }

}

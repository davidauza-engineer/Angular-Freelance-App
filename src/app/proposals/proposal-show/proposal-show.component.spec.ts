import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalShowComponent } from './proposal-show.component';

describe('ProposalShowComponent', () => {
  let component: ProposalShowComponent;
  let fixture: ComponentFixture<ProposalShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

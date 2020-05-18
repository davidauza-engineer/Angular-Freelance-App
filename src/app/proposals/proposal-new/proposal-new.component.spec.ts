import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalNewComponent } from './proposal-new.component';

describe('ProposalNewComponent', () => {
  let component: ProposalNewComponent;
  let fixture: ComponentFixture<ProposalNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

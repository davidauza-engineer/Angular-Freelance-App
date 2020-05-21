import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Document } from './document';
import { DocumentsService } from './documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  providers: [DocumentsService]
})
export class DocumentsComponent implements OnInit {
  pageTitle = 'Document Dashboard';
  documents: Document[];

  constructor(
    private documentService: DocumentsService
  ) { }

  ngOnInit() {
    const timerVar = timer(0, 5000);
    timerVar.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
      .subscribe(
        documents => this.documents = documents
      );
  }
}

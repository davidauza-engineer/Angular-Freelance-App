import {Component, OnInit} from '@angular/core';
import {Document} from './document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  pageTitle = 'Document Dashboard';
  documents: Document[] = [
    {
      title: 'My First Doc',
      description: 'My first descriptipn',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://google.com'
    },
    {
      title: 'My Second Doc',
      description: 'My first descriptipn',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://google.com'
    },
    {
      title: 'My Last Doc',
      description: 'My first descriptipn',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://google.com'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

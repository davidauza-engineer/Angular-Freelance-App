import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Document } from './document';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  private documentsUrl = 'http://localhost:3000/freelance_documents';

  constructor(
    private http: HttpClient
  ) { }

  getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(this.documentsUrl).
      pipe(
        catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error ocurred. Handle ir accordingly.
      console.error('An error occured: ', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error (
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

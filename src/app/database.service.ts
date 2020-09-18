import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PasswordEntry } from './password-entry';
import { backendUrl } from './urls';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private backendUrl = backendUrl;
  private jsonHttpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  updateRecord (record: PasswordEntry): Observable<any> {
    return this.http.post(`${this.backendUrl}/update`, record, this.jsonHttpOptions)
      .pipe(
        catchError(this.handleError<any>("DatabaseService.updateRecord"))
      );
  }

  getAllRecords (): Observable<PasswordEntry[]> {
    return this.http.get<PasswordEntry[]>(`${this.backendUrl}/getall`)
      .pipe(
        catchError(this.handleError<PasswordEntry[]>("DatabaseService.getAllRecords"))
      );
  }

  private handleError<T> (operation="operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

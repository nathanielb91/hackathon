import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeeTimesService {

  constructor(
    private http: HttpClient
  ) { }

  url = 'https://ss7o2jzimh.execute-api.us-east-2.amazonaws.com/test';
  

  getTeeTimes() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('TableName', 'TeeTime');
    let httpOptions = new HttpHeaders();
    httpOptions = httpOptions.append('Content-Type', 'application/json');
    httpOptions = httpOptions.append('httpMethod', 'GET');
    httpOptions = httpOptions.append("Access-Control-Allow-Origin", "*");
    httpOptions = httpOptions.append('Access-Control-Allow-Headers','Origin, Content-Type, X-Auth-Token');
    return this.http.get(this.url, {params: queryParams, headers: httpOptions })
    .pipe(
      catchError(this.handleError)
    );


  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }



}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewElector } from './forms/new-elector';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewElectorService {
  _url = 'https://echo.zuplo.io';
  constructor(private _http: HttpClient) { }

  submit(newElector: NewElector){
    return this._http.post<NewElector>(this._url, newElector)
      .pipe(catchError(this.errorHandler));
  }

  
  errorHandler(error: HttpErrorResponse){
    return throwError(() => error);
  }
}

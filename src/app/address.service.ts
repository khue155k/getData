import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { find, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { province } from './provinces';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private provinceUrl = 'https://ttkh.vnpthanam.vn/v1/api/address/provinces';

  getHeroes(): Observable<province[]> {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlciIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IiIsImV4cCI6MTcyOTAyNzkzMCwiaXNzIjoiaHR0cDovLzEwLjMwLjMwLjEyMDo2NjY2IiwiYXVkIjoiaHR0cDovLzEwLjMwLjMwLjEyMDo2NjY2In0.HtdBLbnXZMCeBmnICtamW6_sUzxOqzI0X66ovIwXam4";

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<province[]>(this.provinceUrl,{ headers })
      .pipe(
        tap(_ => this.log("fetched province")),
        catchError(this.handleError<province[]>('getProvince', []))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

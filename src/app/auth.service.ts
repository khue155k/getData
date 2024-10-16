import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {};

  private apiLogin = "https://ttkh.vnpthanam.vn/api/Authenticate/Login";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  login(username: string,password: string): Observable<boolean>{
    const body = { username, password };
    console.log(body);
    return this.http.post<{ message: string, token:string}>(this.apiLogin, body, this.httpOptions).pipe(
      map((response) => { 
        if (response.message === 'Success'){
          this.saveToken(response.token);
          return true;
        }
        else {
          return false;
        }
      }),
      catchError((error) => {
        console.error('Login failed', error);
        return of(false);
      })
    );
  }

  saveToken(token: string): void{
    localStorage.setItem('authToken',token);
  }

  getToken():string | null{
    return localStorage.getItem('authToken');
  }

}

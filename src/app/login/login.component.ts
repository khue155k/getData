import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginResponse } from '../login.response';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) { }
  onSubmit() {
      this.authService.login('user', 'Vnpt@2024').subscribe(response => {
        if (response) {
          console.log('Đăng nhập thành công!');
        }
        else
          console.log('Đăng nhập thất bại!');
        // this.authService.login('user','Vnpt@2024').pipe(
        //   catchError(this.handleError<any>('addHero'))
        // );
      })
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
}

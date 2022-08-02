import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, ReplaySubject, Subject, tap, throwError } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat/app';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  private tokenExpirationTimer: any;
  user = new BehaviorSubject<User>(null);


  constructor(private http: HttpClient, private router: Router, public afAuth: AngularFireAuth) {
    //this.userData = afAuth.authState;
  }


  /*GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider:any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }*/





  /*signup(user,password){
    return this.http
      .post<AuthResponseData>(
        'http://localhost:3000/auth/login',
        {
          email: user,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }*/


  login(user, password) {
    return this.http
      .post<any>(
        'http://localhost:3000/auth/login',
        {
          user: user,
          password: password,
        }
      ).pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      ).subscribe(
        resData => {
          console.log(resData.access_token);
          //this.isLoading = false;
          this.token = resData.access_token;
        },
        errorMessage => {
          console.log(errorMessage);
          //this.error = errorMessage;
          //this.isLoading = false;
        }
      );

  }

  /*SignUp(email: string, password: string) {
    this.afAuth
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
    console.log('You are Successfully signed up!', res);
    })
    .catch(error => {
    console.log('Something is wrong:', error.message);
    });
    }
  
  
  SignIn(email: string, password: string) {
  this.afAuth
  .signInWithEmailAndPassword(email, password)
  .then(res => {
  console.log('You are Successfully logged in!');
  })
  .catch(err => {
  console.log('Something is wrong:',err.message);
  });
  }*/


  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }


  logout() {
    this.user.next(null);
    //this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
    this.router.navigate(['']);
  }

}

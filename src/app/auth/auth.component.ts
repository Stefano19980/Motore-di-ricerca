import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  error = null;
  token: string;

  ngOnInit() {

  }

  constructor(public authService: AuthService, private router: Router) { }


  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email, password);
    form.reset();
    this.router.navigate(['']);
  }


  logout() {
    this.authService.logout();
  }

 /* google() {
    this.authService.GoogleAuth();
  }*/

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Parola } from './parola.model';
import { AuthService } from '../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-barra-ricerca',
  templateUrl: './barra-ricerca.component.html',
  styleUrls: ['./barra-ricerca.component.css']
})
export class BarraRicercaComponent implements OnInit {

  elementi: Parola[];
  isAuthenticated = false;
  private userSub: Subscription;
  error = null;
  utente: Parola | undefined

  constructor(private http: HttpClient, public authService: AuthService, public afAuth: AngularFireAuth) {
  }


  ngOnInit() {

    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });

  }


  search(search: string): void {
    this.http.get<Parola[]>(`http://localhost:3000/ricerca?q=${search}`).subscribe(elementi => this.elementi = elementi)
  }


}

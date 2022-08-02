import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Parola } from '../barra-ricerca/parola.model';

import { ParolaService } from '../parola.service';
import { AuthService } from '../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-myarea',
  templateUrl: './myarea.component.html',
  styleUrls: ['./myarea.component.css']
})
export class MyareaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


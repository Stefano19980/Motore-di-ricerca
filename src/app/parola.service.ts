import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Parola } from './barra-ricerca/parola.model';
import { User } from './auth/user.model';
import { AuthService } from './auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ParolaService {


  url = 'http://localhost:3000/ricerca';


  constructor(private http: HttpClient, private service: AuthService) { }


  delete(id: number) {
    return this.http.delete<number>('http://localhost:3000/ricerca' + "/" + id, {
      headers: new HttpHeaders().set('Authorization', 'Bearer' + ' ' + this.service.token)
    });
  }

  


  getUtente(id: number): Observable<Parola> {
    const url = `${'http://localhost:3000/ricerca'}/${id}`;
    return this.http.get<Parola>(url);
  }


  update(parola: Parola,id): Observable<any> {
    return this.http.put('http://localhost:3000/ricerca' + "/" + id, parola,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer' + ' ' + this.service.token)
      }
    );
  }

  add(titolo, descrizione, chiavi, url): Observable<Parola> {
    return this.http.post<Parola>('http://localhost:3000/ricerca', { titolo: titolo, descrizione: descrizione, chiavi: chiavi, url: url }, {
      headers: new HttpHeaders().set('Authorization', 'Bearer' + ' ' + this.service.token)
    }
    )
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Parola } from '../barra-ricerca/parola.model';
import { ParolaService } from '../parola.service';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {


  elementi: Parola[];

  constructor(private http: HttpClient, private parolaService: ParolaService) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.http.get<Parola[]>('http://localhost:3000/ricerca').subscribe(elementi => this.elementi = elementi)

  }



  deleteElemento(id: number) {
    this.parolaService.delete(id)
      .subscribe(elem => {
        this.get();
      })
  }

}

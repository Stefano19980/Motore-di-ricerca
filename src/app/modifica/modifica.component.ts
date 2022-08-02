import { Component, OnInit } from '@angular/core';
import { Parola } from '../barra-ricerca/parola.model';
import { Location } from '@angular/common';
import { ParolaService } from '../parola.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {

  parola: Parola | undefined;
  utenti: Parola[] = [];

  reactiveForm = new FormGroup({
    id: new FormControl(''),
    titolo: new FormControl(''),
    descrizione: new FormControl(''),
    chiavi: new FormControl(''),
    url: new FormControl(''),
  });

  constructor(private location: Location, private service: ParolaService, private parolaService: ParolaService, private http: HttpClient, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getUser()
  }

  goBack(): void {
    this.location.back();
  }

  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.service.getUtente(id)
      .subscribe(elem => this.parola = elem);
  }

  save(): void {
    console.log("Form...", this.reactiveForm.value);
    let elemento: Parola = this.reactiveForm.value;

    this.service.update(elemento,elemento.id)
      .subscribe(() => this.goBack());

  }

}

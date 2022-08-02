import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { Parola } from '../barra-ricerca/parola.model';
import { ParolaService } from '../parola.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {

  parola:Parola | undefined;
  utente:Parola

  constructor(private location: Location,private service:ParolaService, private parolaService:ParolaService,private route: ActivatedRoute,) { }


  ngOnInit(): void {
    this.getUser()
  }

  goBack(): void {
    this.location.back();
  }

  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.service.getUtente(id)
      .subscribe(part => this.parola = part);
  }
}

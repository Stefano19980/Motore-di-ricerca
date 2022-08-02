import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ParolaService } from '../parola.service';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css']
})
export class AggiungiComponent implements OnInit {

  titolo: string;
  descrizione: string;
  chiavi: string;
  url: string;

  constructor(private service: ParolaService, private authService: AuthService) {

  }

  ngOnInit(): void {
    //console.log(this.authService.token)
  }

  addUtente(titolo, descrizione, chiavi, url) {
    this.service.add(titolo, descrizione, chiavi, url).subscribe(elementi => {
      console.log(elementi);
      //this.caricaUser();
    });
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggiungiComponent } from './aggiungi/aggiungi.component';
import { AuthGuard } from './auth/auth-guard';
import { AuthComponent } from './auth/auth.component';
import { BarraRicercaComponent } from './barra-ricerca/barra-ricerca.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { ModificaComponent } from './modifica/modifica.component';
import { MyareaComponent } from './myarea/myarea.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'aggiungi', component: AggiungiComponent },
  { path: '', component: BarraRicercaComponent },
  { path: 'myarea', component: MyareaComponent, canActivate: [AuthGuard] },
  { path: 'modifica/:id', component: ModificaComponent },
  { path: 'detail/:id', component: DettaglioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

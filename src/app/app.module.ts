import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BarraRicercaComponent } from './barra-ricerca/barra-ricerca.component';
import { AreaLoginComponent } from './area-login/area-login.component';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MyareaComponent } from './myarea/myarea.component';
import { ElencoComponent } from './elenco/elenco.component';
import { ModificaComponent } from './modifica/modifica.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { AggiungiComponent } from './aggiungi/aggiungi.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    BarraRicercaComponent,
    AreaLoginComponent,
    MyareaComponent,
    ElencoComponent,
    ModificaComponent,
    DettaglioComponent,
    AggiungiComponent
  ],
  imports: [
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { ApiService } from './services/api.service';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistroComponent } from './components/pages/registro/registro.component';
import { EstudianteComponent } from './components/pages/estudiante/estudiante.component';
import { InicioEstudianteComponent } from './components/pages/estudiante/inicio-estudiante/inicio-estudiante.component';
import { PerfilEstudianteComponent } from './components/pages/estudiante/perfil-estudiante/perfil-estudiante.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    EstudianteComponent,
    InicioEstudianteComponent,
    PerfilEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

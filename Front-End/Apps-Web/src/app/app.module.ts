import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from "./app.routing"
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


import { AppComponent } from './app.component';
import { LoginComponent } from './Gestion_Usuarios/Componentes/login/login.component';
import { GestionTerapeutaComponent } from './Gestion_Usuarios/Componentes/gestion-terapeuta/gestion-terapeuta.component';
import { GestionEstudianteComponent } from './Gestion_Usuarios/Componentes/gestion-estudiante/gestion-estudiante.component';
import { PrincipalComponent } from './Gestion_Usuarios/Componentes/principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GestionTerapeutaComponent,
    GestionEstudianteComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

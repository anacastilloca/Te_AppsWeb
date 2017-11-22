import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from "./app.routing"
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";


//Importar los modulos
import { UsersModule } from "./Gestion_Usuarios/Componentes/principal/users-module";
import { SaCaModule } from "./Gestion_SA_y_CA_(Asignacion Est)/principal-sa-ca/sa-ca-module"
import {JuegosModule} from "./Juegos/principal-juegos/juegos-module";

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './Gestion_Usuarios/Componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    routing,
    UsersModule,
    SaCaModule,
    JuegosModule
  ],
  providers: [
    appRoutingProviders,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

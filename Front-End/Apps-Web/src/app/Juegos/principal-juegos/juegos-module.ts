import  { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
import { FormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http";
import {JuegosRoutingModule} from "./juegos-routing-module";

//Componentes
import {PrincipalJuegosComponent} from "./principal-juegos.component";
import {JuegoCaComponent} from "../Componentes/juego-ca/juego-ca.component";
import {Nivel1Component} from "../Componentes/juego-sa/Niveles/nivel1/nivel1.component";
import {Nivel2Component} from "../Componentes/juego-sa/Niveles/nivel2/nivel2.component";
import {Nivel3Component} from "../Componentes/juego-sa/Niveles/nivel3/nivel3.component";
import {Nivel4Component} from "../Componentes/juego-sa/Niveles/nivel4/nivel4.component";
import {ContenidoCaComponent} from "../Componentes/juego-ca/Contenido Campo Semántico/contenido-ca/contenido-ca.component";


@NgModule({
  declarations: [
    PrincipalJuegosComponent,
    JuegoCaComponent,
    Nivel1Component,
    Nivel2Component,
    Nivel3Component,
    Nivel4Component,
    ContenidoCaComponent,

  ],
  imports:[
    FormsModule,
    CommonModule,
    HttpModule,
    JuegosRoutingModule,

  ],
  exports:[
    PrincipalJuegosComponent,
    JuegoCaComponent,
    Nivel1Component,
    Nivel2Component,
    Nivel3Component,
    Nivel4Component,
    ContenidoCaComponent,
  ],
  providers:[
  ]
})

export class JuegosModule{}

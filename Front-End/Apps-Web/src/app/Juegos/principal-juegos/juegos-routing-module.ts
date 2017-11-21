import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";


//Componentes
import {PrincipalJuegosComponent} from "./principal-juegos.component";
import {JuegoCaComponent} from "../Componentes/juego-ca/juego-ca.component";
import {Nivel1Component} from "../Componentes/juego-sa/Niveles/nivel1/nivel1.component";
import {Nivel2Component} from "../Componentes/juego-sa/Niveles/nivel2/nivel2.component";
import {Nivel3Component} from "../Componentes/juego-sa/Niveles/nivel3/nivel3.component";
import {Nivel4Component} from "../Componentes/juego-sa/Niveles/nivel4/nivel4.component";

const juegos_sa_ca_Routes:Routes=[
  {
    path:'juegos',
    component: PrincipalJuegosComponent,
    children:[
      { path:'',redirectTo: 'saN1',pathMatch: 'full'  },
      { path:'saN1', component: Nivel1Component },
      { path:'saN2', component: Nivel2Component },
      { path:'saN3', component: Nivel3Component },
      { path:'saN4', component: Nivel4Component },
      { path:'comAlt',component: JuegoCaComponent },
    ]
  },
];

@NgModule({
  imports:[
    RouterModule.forChild(juegos_sa_ca_Routes)
  ],
  exports:[
    RouterModule
  ]
})

export class JuegosRoutingModule{}

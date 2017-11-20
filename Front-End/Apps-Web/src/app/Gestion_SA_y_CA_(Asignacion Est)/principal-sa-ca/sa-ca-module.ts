import  { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
import { FormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http";
import { SaCaRoutingModule } from "./sa-ca-routing-module"

//Componentes
import {PrincipalSaCaComponent} from "./principal-sa-ca.component"
import {GestionCaComponent} from "../Componentes/gestion-ca/gestion-ca.component"
import {GestionSaComponent} from "../Componentes/gestion-sa/gestion-sa.component"
import {AsignacionEstudianteSaCaComponent} from "../Componentes/asignacion-estudiante-sa-ca/asignacion-estudiante-sa-ca.component"

@NgModule({
  declarations: [
    PrincipalSaCaComponent,
    GestionCaComponent,
    GestionSaComponent,
    AsignacionEstudianteSaCaComponent,
  ],
  imports:[
    FormsModule,
    CommonModule,
    HttpModule,
    SaCaRoutingModule,
  ],
  exports:[
    PrincipalSaCaComponent,
    GestionCaComponent,
    GestionSaComponent,
    AsignacionEstudianteSaCaComponent,
  ],
  providers:[  ]
})

export class SaCaModule{}

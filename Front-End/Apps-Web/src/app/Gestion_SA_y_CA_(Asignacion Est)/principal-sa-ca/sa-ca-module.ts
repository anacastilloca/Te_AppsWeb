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
import {AgregarSaComponent} from "../Componentes/gestion-sa/pop-ups/agregar-sa/agregar-sa.component"
import {EditarSaComponent} from "../Componentes/gestion-sa/pop-ups/editar-sa/editar-sa.component"
import {VerSaComponent} from "../Componentes/gestion-sa/pop-ups/ver-sa/ver-sa.component"
import {EliminarSaComponent} from "../Componentes/gestion-sa/pop-ups/eliminar-sa/eliminar-sa.component"
import {AsignacionSaComponent} from "../Componentes/asignacion-estudiante-sa-ca/pop-ups/asignacion-sa/asignacion-sa.component"
import {AsignacionCaComponent} from "../Componentes/asignacion-estudiante-sa-ca/pop-ups/asignacion-ca/asignacion-ca.component"
import {VerInfoEstComponent} from "../Componentes/asignacion-estudiante-sa-ca/pop-ups/ver-info-est/ver-info-est.component"

//Servicios
import {SecueniaAccionesService} from "../Servicios/secuenia-acciones.service"
import {ComunicacionAlternativaService} from "../Servicios/comunicacion-alternativa.service"
import {EstudianteSaService} from "../Servicios/estudiante-sa.service"

//Pipes
import {BusquedaSaPipe} from "../Componentes/gestion-sa/pipes/busqueda-sa.pipe"
import {BusquedaAsigEstPipe} from "../Componentes/asignacion-estudiante-sa-ca/pipes/busqueda-asig-est.pipe"

@NgModule({
  declarations: [
    PrincipalSaCaComponent,
    GestionCaComponent,
    GestionSaComponent,
    AsignacionEstudianteSaCaComponent,
    AgregarSaComponent,
    EditarSaComponent,
    VerSaComponent,
    EliminarSaComponent,
    BusquedaSaPipe,
    BusquedaAsigEstPipe,
    AsignacionSaComponent,
    AsignacionCaComponent,
    VerInfoEstComponent,
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
    AsignacionEstudianteSaCaComponent,
    AgregarSaComponent,
    EditarSaComponent,
    VerSaComponent,
    EliminarSaComponent,
    AsignacionSaComponent,
    AsignacionCaComponent,
    VerInfoEstComponent,
  ],
  providers:[
    SecueniaAccionesService,
    ComunicacionAlternativaService,
    EstudianteSaService,
  ]
})

export class SaCaModule{}

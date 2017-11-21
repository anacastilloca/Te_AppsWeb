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
import {AgregarCaComponent} from "../Componentes/gestion-ca/pop-ups/agregar-ca/agregar-ca.component";
import {EditarCaComponent} from "../Componentes/gestion-ca/pop-ups/editar-ca/editar-ca.component";
import {VerCaComponent} from "../Componentes/gestion-ca/pop-ups/ver-ca/ver-ca.component";
import {EliminarCaComponent} from "../Componentes/gestion-ca/pop-ups/eliminar-ca/eliminar-ca.component";

//Servicios
import {SecueniaAccionesService} from "../Servicios/secuenia-acciones.service"
import {ComunicacionAlternativaService} from "../Servicios/comunicacion-alternativa.service"
import {EstudianteSaService} from "../Servicios/estudiante-sa.service"
import {EstudianteCaService} from "../Servicios/estudiante-ca.service";

//Pipes
import {BusquedaSaPipe} from "../Componentes/gestion-sa/pipes/busqueda-sa.pipe"
import {BusquedaAsigEstPipe} from "../Componentes/asignacion-estudiante-sa-ca/pipes/busqueda-asig-est.pipe"
import {BusquedaCaPipe} from "../Componentes/gestion-ca/pipes/busqueda-ca.pipe";

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
    BusquedaCaPipe,
    AgregarCaComponent,
    EditarCaComponent,
    VerCaComponent,
    EliminarCaComponent,
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
    AgregarCaComponent,
    EditarCaComponent,
    VerCaComponent,
    EliminarCaComponent,
  ],
  providers:[
    SecueniaAccionesService,
    ComunicacionAlternativaService,
    EstudianteSaService,
    EstudianteCaService
  ]
})

export class SaCaModule{}

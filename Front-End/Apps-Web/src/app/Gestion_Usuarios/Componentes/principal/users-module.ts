import  { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
import { FormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http";
import { UsersRoutingModule } from "./users-routing.module";

//Componentes
import { GestionTerapeutaComponent } from "../gestion-terapeuta/gestion-terapeuta.component";
import { GestionEstudianteComponent } from "../gestion-estudiante/gestion-estudiante.component";
import { PrincipalComponent } from "./principal.component";
import { AgregarPopUpComponent } from "../gestion-terapeuta/pop-up/agregar-pop-up/agregar-pop-up.component";
import { EditarPopUpComponent } from "../gestion-terapeuta/pop-up/editar-pop-up/editar-pop-up.component";
import { VerPopUpComponent } from "../gestion-terapeuta/pop-up/ver-pop-up/ver-pop-up.component";
import { EliminarPopUpComponent } from "../gestion-terapeuta/pop-up/eliminar-pop-up/eliminar-pop-up.component"
import { AgregarEstudianteComponent } from "../gestion-estudiante/pop-up/agregar-estudiante/agregar-estudiante.component"
import { EditarEstudianteComponent } from "../gestion-estudiante/pop-up/editar-estudiante/editar-estudiante.component"
import { VerEstudianteComponent } from "../gestion-estudiante/pop-up/ver-estudiante/ver-estudiante.component"
import { EliminarEstudianteComponent } from "../gestion-estudiante/pop-up/eliminar-estudiante/eliminar-estudiante.component"

//Servicios
import {TokenService} from "../token.service";
import {AuthOrganizacionService} from "../../Servicios/auth-organizacion.service";
import {AuthTerapeutaService} from "../../Servicios/auth-terapeuta.service";
import {AuthEstudianteService} from "../../Servicios/auth-estudiante.service";
import {UrlService} from "../../Servicios/url.service";
import {AuthService} from "../../Servicios/auth.service";
import { TerapeutaService } from "../../Servicios/terapeuta.service";

//Pipes
import { BusquedaPipe } from "../gestion-terapeuta/pipes/busqueda.pipe"
import {BusquedaEstudiantePipe} from "../gestion-estudiante/pipes/busqueda-estudiante.pipe"

@NgModule({
  declarations: [
    PrincipalComponent,
    GestionTerapeutaComponent,
    GestionEstudianteComponent,
    AgregarPopUpComponent,
    EditarPopUpComponent,
    VerPopUpComponent,
    EliminarPopUpComponent,
    AgregarEstudianteComponent,
    VerEstudianteComponent,
    EditarEstudianteComponent,
    EliminarEstudianteComponent,
    BusquedaPipe,
    BusquedaEstudiantePipe
  ],
  imports:[
    FormsModule,
    CommonModule,
    HttpModule,
    UsersRoutingModule
  ],
  exports:[
    PrincipalComponent,
    GestionTerapeutaComponent,
    GestionEstudianteComponent,
    AgregarPopUpComponent,
    EditarPopUpComponent,
    VerPopUpComponent,
    EliminarPopUpComponent,
  ],
  providers:[
    TokenService,
    AuthEstudianteService,
    AuthOrganizacionService,
    AuthTerapeutaService,
    UrlService,
    AuthService,
    TerapeutaService

  ]
})

export class UsersModule{}

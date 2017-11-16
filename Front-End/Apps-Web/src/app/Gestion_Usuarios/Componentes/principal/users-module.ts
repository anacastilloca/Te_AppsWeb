import  { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
import { FormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http";
import { UsersRoutingModule } from "./users-routing.module";

//Componentes
import { GestionTerapeutaComponent } from "../gestion-terapeuta/gestion-terapeuta.component";
import { GestionEstudianteComponent } from "../gestion-estudiante/gestion-estudiante.component";
import { PrincipalComponent } from "./principal.component";

//Servicios
import { TerapeutaService } from "../../Servicios/terapeuta.service";

@NgModule({
  declarations: [
    PrincipalComponent,
    GestionTerapeutaComponent,
    GestionEstudianteComponent
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
    GestionEstudianteComponent
  ],
  providers:[
    TerapeutaService
  ]
})

export class UsersModule{}

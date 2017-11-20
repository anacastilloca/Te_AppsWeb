import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

//Componentes
import {PrincipalSaCaComponent} from "./principal-sa-ca.component";
import {GestionSaComponent} from "../Componentes/gestion-sa/gestion-sa.component";
import {GestionCaComponent} from "../Componentes/gestion-ca/gestion-ca.component";
import {AsignacionEstudianteSaCaComponent} from "../Componentes/asignacion-estudiante-sa-ca/asignacion-estudiante-sa-ca.component";

const sa_ca_asignacionRoutes:Routes=[
  {
    path:'saca',
    component: PrincipalSaCaComponent,
    children:[
      { path:'',redirectTo: 'sa',pathMatch: 'full'  },
      { path:'sa',component: GestionSaComponent },
      { path:'ca',component: GestionCaComponent },
      { path:'asignar',component: AsignacionEstudianteSaCaComponent }
    ]
  },
];

@NgModule({
  imports:[
    RouterModule.forChild(sa_ca_asignacionRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class SaCaRoutingModule{}

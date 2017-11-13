import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

//Componentes
import { GestionTerapeutaComponent } from "../gestion-terapeuta/gestion-terapeuta.component";
import { GestionEstudianteComponent } from "../gestion-estudiante/gestion-estudiante.component";
import { PrincipalComponent } from "./principal.component";

const userRoutes:Routes=[
  {
    path:'adm',
    component: PrincipalComponent,
    children:[
      { path:'',redirectTo: 'terapeuta',pathMatch: 'full'  },
      { path:'terapeuta',component: GestionTerapeutaComponent },
      { path:'estudiante',component: GestionEstudianteComponent }
    ]
  },
  //{ path:'**',component: GestionTerapeutaComponent  }
];

@NgModule({
  imports:[
    RouterModule.forChild(userRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class UsersRoutingModule{}

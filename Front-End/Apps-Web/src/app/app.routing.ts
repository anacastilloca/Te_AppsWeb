import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { LoginComponent } from './Gestion_Usuarios/Componentes/login/login.component';
import { GestionTerapeutaComponent } from './Gestion_Usuarios/Componentes/gestion-terapeuta/gestion-terapeuta.component';
import { GestionEstudianteComponent } from './Gestion_Usuarios/Componentes/gestion-estudiante/gestion-estudiante.component';
import { PrincipalComponent } from './Gestion_Usuarios/Componentes/principal/principal.component';

const appRoutes:Routes = [

  { path:'',component: GestionTerapeutaComponent  },
  { path:'',redirectTo: 'terapeuta',pathMatch: 'full'  },
  { path:'terapeuta',component: GestionTerapeutaComponent },

  { path:'estudiante',component: GestionEstudianteComponent },

  { path:'**',component: GestionTerapeutaComponent  }
]

export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes )


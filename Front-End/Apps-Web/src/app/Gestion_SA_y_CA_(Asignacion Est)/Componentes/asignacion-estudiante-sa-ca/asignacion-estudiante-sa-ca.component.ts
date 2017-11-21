import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {EstudianteService} from "../../../Gestion_Usuarios/Servicios/estudiante.service";
import {EstudianteClass} from "../../../Gestion_Usuarios/Modelos/Estudiante/EstudianteClass";

@Component({
  selector: 'app-asignacion-estudiante-sa-ca',
  templateUrl: './asignacion-estudiante-sa-ca.component.html',
  styleUrls: ['./asignacion-estudiante-sa-ca.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AsignacionEstudianteSaCaComponent implements OnInit {

  estudiante:EstudianteClass;
  estudiantes:EstudianteClass[]=[];

  busquedaPorNombre:string;
  validacionModal=false;

  constructor(private _estudianteService:EstudianteService) {
    console.log(localStorage.getItem('idTerapeutaLog'));
  }

  ngOnInit() {
    this._estudianteService.buscarVariosPorTerapeutaEstudiante(localStorage.getItem('idTerapeutaLog'))
      .subscribe(
        (estudiantes:EstudianteClass[]) => {
          this.estudiantes = estudiantes.map(
            (estudiante:EstudianteClass)=>{
              estudiante.editar = false;

              return estudiante;
            }
          );
        },
        error=>{
          console.log("Error: ",error)
        }
      )
  }

  modalasignacionSAModal(indice){
    this.validacionModal=true;
    this.estudiante=this.estudiantes[indice];
    console.log(this.estudiante)
  }
}

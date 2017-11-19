import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {EstudianteClass} from "../../Modelos/Estudiante/EstudianteClass";
import {EstudianteService} from "../../Servicios/estudiante.service";

@Component({
  selector: 'app-gestion-estudiante',
  templateUrl: './gestion-estudiante.component.html',
  styleUrls: ['./gestion-estudiante.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GestionEstudianteComponent implements OnInit {

  busquedaPorNombre:string

  estudiante:EstudianteClass;
  estudiantes:EstudianteClass[]=[];

  constructor(private _estudianteService:EstudianteService) {
    this.estudiante= new EstudianteClass("");
    console.log(localStorage.getItem('idOrganizacionLog'));
  }

  ngOnInit() {
    this._estudianteService.buscarVariosPorOrganizacion(localStorage.getItem('idOrganizacionLog'))
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

  modalVer(indice){
    this.estudiante=this.estudiantes[indice];
  }

  modalEditar(indice){
    this.estudiante=this.estudiantes[indice];
  }

  modalEliminar(indice){
    this.estudiante=this.estudiantes[indice];
  }

  presentacionActualizadaAgregar(evento){
    //console.log(evento)
    this.estudiantes.push(evento);
  }

  presentacionActualizadaEliminar(evento){
    let indice = this.estudiantes.indexOf(evento);
    this.estudiantes.splice(indice,1);
  }


}

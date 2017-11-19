import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {EstudianteClass} from "../../../../Modelos/Estudiante/EstudianteClass";
import {EstudianteService} from "../../../../Servicios/estudiante.service";

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditarEstudianteComponent implements OnInit {

  @Input() estudiante:EstudianteClass;

  constructor(private _estudianteService:EstudianteService) {
    this.estudiante=new EstudianteClass("");
  }

  ngOnInit() {
  }

  actualizarEstudiante(estudiante:EstudianteClass,cedula?: string, nombre?: string, edad?: number,
                      contrasenia?: string,nombreRepresentante?: string,celularRepresentante?: number,
                       direccionRepresentante?:string,idTerapeuta?:number){
    estudiante.cedula=cedula;
    estudiante.nombre=nombre;
    estudiante.edad=edad;
    estudiante.contrasenia=contrasenia;
    estudiante.nombreRepresentante=nombreRepresentante;
    estudiante.celularRepresentante=celularRepresentante;
    estudiante.direccionRepresentante=direccionRepresentante;
    estudiante.idTerapeuta=idTerapeuta;

    this._estudianteService.editarEstudiante(estudiante).
    subscribe(
      (estudianteEditado:EstudianteClass)=>{
        this.estudiante.cedula=cedula;
        this.estudiante.nombre=nombre;
        this.estudiante.edad=edad;
        this.estudiante.contrasenia=contrasenia;
        this.estudiante.nombreRepresentante=nombreRepresentante;
        this.estudiante.celularRepresentante=celularRepresentante;
        this.estudiante.direccionRepresentante=direccionRepresentante;
        this.estudiante.idTerapeuta=idTerapeuta;
        this.estudiante.editar=!this.estudiante.editar;
      },
      error =>{
        console.log("No se pudo editar",error)
      }
    )

  }

}

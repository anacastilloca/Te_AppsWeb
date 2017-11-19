import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {EstudianteClass} from "../../../../Modelos/Estudiante/EstudianteClass";
import {EstudianteService} from "../../../../Servicios/estudiante.service";

@Component({
  selector: 'app-eliminar-estudiante',
  templateUrl: './eliminar-estudiante.component.html',
  styleUrls: ['./eliminar-estudiante.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EliminarEstudianteComponent implements OnInit {

  @Input() estudiante:EstudianteClass;
  @Output() eliminarEstudiantes = new  EventEmitter();

  constructor(private _estudianteService:EstudianteService) { }

  ngOnInit() {
  }

  eliminarEstudiante(){
    console.log(this.estudiante)
    this._estudianteService.borrarEstudiante(this.estudiante)
      .subscribe(
        ingreso => {
          this.eliminarEstudiantes.emit(this.estudiante)
        },
        error => {
          console.log("Error",error);
        }
      )
  }

}

import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {EstudianteClass} from "../../../../Modelos/Estudiante/EstudianteClass";
import {EstudianteService} from "../../../../Servicios/estudiante.service";

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgregarEstudianteComponent implements OnInit {

  //terapeuta:TerapeutaClass;
  @Output() actualizacionTablaEstudiantes = new EventEmitter();

  estudianteNuevo:EstudianteClass;

  constructor(private _estudianteServicio:EstudianteService) {
    this.estudianteNuevo=new  EstudianteClass("");
    console.log(localStorage.getItem('idOrganizacionLog'));
  }

  ngOnInit() {
  }

  agregarEstudiante(){
    let aux:any;
    aux=this.estudianteNuevo;
    aux.idOrganizacion=parseInt(localStorage.getItem('idOrganizacionLog'));

    console.log(this.estudianteNuevo)

    this._estudianteServicio.ingresoEstudiante(aux)
      .subscribe(
        (estdudianteCreado:EstudianteClass) => {
          estdudianteCreado = new EstudianteClass();
          this.actualizacionTablaEstudiantes.emit(this.estudianteNuevo)
        },
        error => {
          console.log("Error",error);
        }
      )
  }

}

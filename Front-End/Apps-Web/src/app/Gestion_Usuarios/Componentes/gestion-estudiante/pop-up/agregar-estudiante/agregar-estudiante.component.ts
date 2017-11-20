import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {EstudianteClass} from "../../../../Modelos/Estudiante/EstudianteClass";
import {EstudianteService} from "../../../../Servicios/estudiante.service";
import {TerapeutaClass} from "../../../../Modelos/Terapeuta/TerapeutaClass";
import {TerapeutaService} from "../../../../Servicios/terapeuta.service";

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgregarEstudianteComponent implements OnInit {

  //Para obtener los terapeutas
  terapeutaSeleccionado:string
  terapeutas:TerapeutaClass[];

  //terapeuta:TerapeutaClass;
  @Output() actualizacionTablaEstudiantes = new EventEmitter();

  estudianteNuevo:EstudianteClass;

  constructor(private _estudianteServicio:EstudianteService,private _terapeutaService:TerapeutaService) {
    this.estudianteNuevo=new  EstudianteClass("");
    console.log(localStorage.getItem('idOrganizacionLog'));

    //this.terapeutas=JSON.parse(localStorage.getItem('terapeutas'));
  }

  ngOnInit() {
    this._terapeutaService.buscarVariosPorOrganizacion(localStorage.getItem('idOrganizacionLog'))
      .subscribe(
        (terapeutas:TerapeutaClass[]) => {
          //localStorage.setItem('terapeutas',JSON.stringify(terapeutas))
          this.terapeutas = terapeutas.map(
            (terapeuta:TerapeutaClass)=>{
              terapeuta.editar = false;
              return terapeuta;
            }
          );
        },
        error=>{
          console.log("Error: ",error)
        }
      )
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

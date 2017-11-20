import {Component, DoCheck, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {EstudianteClass} from "../../../../Modelos/Estudiante/EstudianteClass";
import {EstudianteService} from "../../../../Servicios/estudiante.service";
import {TerapeutaClass} from "../../../../Modelos/Terapeuta/TerapeutaClass";
import {TerapeutaService} from "../../../../Servicios/terapeuta.service";

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditarEstudianteComponent implements OnInit, DoCheck {

  @Input() estudiante:EstudianteClass;
  terapeutas:TerapeutaClass[];
  nombreTerapeuta:string;

  constructor(private _estudianteService:EstudianteService,private _terapeutaService:TerapeutaService) {
    this.estudiante=new EstudianteClass("");

  }

  ngOnInit() {
   // console.log('Estudiante',this.estudiante)
    this.nombreTerapeuta=this.estudiante.idTerapeuta['nombre'];
    //console.log('IDD',this.nombreTerapeuta)
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
  ngDoCheck(){
    console.log('Estudiante',this.estudiante)
    console.log('IDD',this.estudiante.idTerapeuta['nombre'])
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

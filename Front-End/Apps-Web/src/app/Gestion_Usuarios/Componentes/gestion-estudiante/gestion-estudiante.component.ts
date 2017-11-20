import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {EstudianteClass} from "../../Modelos/Estudiante/EstudianteClass";
import {EstudianteService} from "../../Servicios/estudiante.service";
import {TerapeutaClass} from "../../Modelos/Terapeuta/TerapeutaClass";
import {TerapeutaService} from "../../Servicios/terapeuta.service";

@Component({
  selector: 'app-gestion-estudiante',
  templateUrl: './gestion-estudiante.component.html',
  styleUrls: ['./gestion-estudiante.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GestionEstudianteComponent implements OnInit {

  aux=false;

  //Para obtener los terapeutas
  nombreTerapeuta:any;

  //Para el pipe
  busquedaPorNombre:string

  //Para consumir el servicio
  estudiante:EstudianteClass;
  estudiantes:EstudianteClass[]=[];

  constructor(private _estudianteService:EstudianteService, private _terapeutaService:TerapeutaService) {
    this.estudiante= new EstudianteClass("");
    console.log(localStorage.getItem('idOrganizacionLog'));

    //this.terapeutas.push(JSON.parse(localStorage.getItem('terapeutas')))
    //this.terapeutas=JSON.parse(localStorage.getItem('terapeutas'));
    //console.log(this.terapeutas)
   //console.log(JSON.parse(localStorage.getItem('terapeutas')).length)
   // console.log(this.terapeutas[1])
    //console.log(this.terapeutas[1].cedula)

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
    this.aux=true;
    this.estudiante=this.estudiantes[indice];
   // console.log(this.estudiantes[indice])
   //this.nombreTerapeuta=(this.estudiante.idTerapeuta['nombre']);
    console.log(this.estudiante.idTerapeuta['nombre'])
  }

  modalEditar(indice){
    this.aux=true;
    this.estudiante=this.estudiantes[indice];

  }

  modalEliminar(indice){
    this.aux=true;
    this.estudiante=this.estudiantes[indice];
  }

  presentacionActualizadaAgregar(evento){
    this.aux=true;
    //console.log(evento)
    this.estudiantes.push(evento);
  }

  presentacionActualizadaEliminar(evento){
    this.aux=true;
    let indice = this.estudiantes.indexOf(evento);
    this.estudiantes.splice(indice,1);
  }

 }

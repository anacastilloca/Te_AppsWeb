import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {SecueniaAccionesService} from "../../../../Servicios/secuenia-acciones.service";
import {SecuenaAccionesClass} from "../../../../Modelos/SA/SecuenaAccionesClass";
import {EstudianteClass} from "../../../../../Gestion_Usuarios/Modelos/Estudiante/EstudianteClass";
import {EstudianteSaService} from "../../../../Servicios/estudiante-sa.service";
import {Estudiante_SAClass} from "../../../../Modelos/Estudiante_SA/Estudiante_SAClass";

@Component({
  selector: 'app-asignacion-sa',
  templateUrl: './asignacion-sa.component.html',
  styleUrls: ['./asignacion-sa.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AsignacionSaComponent implements OnInit {

  @Input() estudiante:EstudianteClass;

  //Para efectuar la busqueda de todas las secuencia de acciones de un determinado terapeuta
  secuenciaAcciones:SecuenaAccionesClass;
  secuenciasAcciones:SecuenaAccionesClass[];

  //Para asignar y quitar SA a un estudiante
  estudianteSA:Estudiante_SAClass;
  auxESA:any;

  constructor(private __secuenciaAccionesService:SecueniaAccionesService, private _estudianteSA_Service:EstudianteSaService) {
    this.secuenciaAcciones=new SecuenaAccionesClass("");
    this.estudianteSA=new Estudiante_SAClass(0);
  }

  ngOnInit() {
    this.__secuenciaAccionesService.buscarVariosPorTerapeutaSA(localStorage.getItem('idTerapeutaLog'))
      .subscribe(
        (secuenciasAcciones:SecuenaAccionesClass[]) => {
          this.secuenciasAcciones = secuenciasAcciones.map(
            (secuenciaAcciones:SecuenaAccionesClass)=>{
              secuenciaAcciones.editar = false;
              return secuenciaAcciones;
            }
          );
        },
        error=>{
          console.log("Error: ",error)
        }
      )
  }

  asignarEstudiante_SA(){
    let aux:any;
    //aux.idTerapeuta=parseInt(localStorage.getItem('idTerapeutaLog'));

    this._estudianteSA_Service.ingresoEstudianteSecuenciAcciones(this.estudianteSA)
      .subscribe(
        (estudianteSecuenciaAccionesCreado:SecuenaAccionesClass) => {
          estudianteSecuenciaAccionesCreado = new Estudiante_SAClass();
          console.log('Ver que llega',this.estudianteSA)
        },
        error => {
          console.log("Error",error);
        }
      )
  }

  onChange(sa,estu,evento){
    if(evento.target.checked){
      this.auxESA=this.estudianteSA
      this.auxESA.idEstudiante=estu;
      this.auxESA.idSecuenciaAcciones=sa;

      this._estudianteSA_Service.ingresoEstudianteSecuenciAcciones(this.auxESA)
        .subscribe(
          (estudianteSecuenciaAccionesCreado:SecuenaAccionesClass) => {
            estudianteSecuenciaAccionesCreado = new Estudiante_SAClass();
            console.log('Ver que llega',this.estudianteSA)
          },
          error => {
            console.log("Error",error);
          }
        )
     console.log("Dato creado", this.estudianteSA)

    }else if(!evento.target.checked) {
      console.log("Eliminarrr")
    }

    console.log('SA',sa);
    console.log('Estudiante',estu);
    console.log('Evento',evento.target.checked);

    //console.log(e.target.checked)
  }



  eliminarEstudianteSecuenciaAcciones(){
    //console.log(this.secuenciaAcciones)
    this._estudianteSA_Service.borrarEstudianteSecuenciaAcciones(this.estudianteSA)
      .subscribe(
        ingreso => {
          console.log(this.estudianteSA)
        },
        error => {
          console.log("Error",error);
        }
      )
  }

}

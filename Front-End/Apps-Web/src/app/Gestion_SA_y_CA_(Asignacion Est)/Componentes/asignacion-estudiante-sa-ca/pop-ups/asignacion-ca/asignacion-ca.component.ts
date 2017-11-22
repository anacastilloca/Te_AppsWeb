import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {EstudianteClass} from "../../../../../Gestion_Usuarios/Modelos/Estudiante/EstudianteClass";
import {ComunicacionAlternativaClass} from "../../../../Modelos/CA/ComunicacionAlternativaClass";
import {Estudiante_CAClass} from "../../../../Modelos/Estudiante_CA/Estudiante_CAClass";
import {ComunicacionAlternativaService} from "../../../../Servicios/comunicacion-alternativa.service";
import {EstudianteSaService} from "../../../../Servicios/estudiante-sa.service";

@Component({
  selector: 'app-asignacion-ca',
  templateUrl: './asignacion-ca.component.html',
  styleUrls: ['./asignacion-ca.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AsignacionCaComponent implements OnInit {

  @Input() estudiante:EstudianteClass;

  auxECA:any;

  comunicacionAlternativa:ComunicacionAlternativaClass;
  comunicacionesAlternativas:ComunicacionAlternativaClass[]=[];

  //Para asignar y quitar CA a un estudiante
  estudianteCA:Estudiante_CAClass


  constructor(private _comunicacionAlternativa:ComunicacionAlternativaService, private _estudianteSA_Service:EstudianteSaService) {
    this.comunicacionAlternativa= new ComunicacionAlternativaClass("")
    this.estudianteCA=new Estudiante_CAClass(0);
  }

  ngOnInit() {
    this._comunicacionAlternativa.buscarVariosPorTerapeutaCA(localStorage.getItem('idTerapeutaLog'))
      .subscribe(
        (comunicacionesAlternativas:ComunicacionAlternativaClass[]) => {
          this.comunicacionesAlternativas = comunicacionesAlternativas.map(
            (comunicacionAlternativa:ComunicacionAlternativaClass)=>{
              comunicacionAlternativa.editar = false;
              return comunicacionAlternativa;
            }
          );
        },
        error=>{
          console.log("Error: ",error)
        }
      )
  }

  onChange(ca,estu,evento){
    if(evento.target.checked){
      this.auxECA=this.estudianteCA
      this.auxECA.idEstudiante=estu;
      this.auxECA.idComunicacionAlternativa=ca;

      this._comunicacionAlternativa.ingresoComunicacionAlternativa(this.auxECA)
        .subscribe(
          (estudianteComunicacionAlternativaCreado:Estudiante_CAClass) => {
            estudianteComunicacionAlternativaCreado = new Estudiante_CAClass();
            console.log('Ver que llega',this.estudianteCA)
          },
          error => {
            console.log("Error",error);
          }
        )
      console.log("Dato creado", this.estudianteCA)

    }
  }

}

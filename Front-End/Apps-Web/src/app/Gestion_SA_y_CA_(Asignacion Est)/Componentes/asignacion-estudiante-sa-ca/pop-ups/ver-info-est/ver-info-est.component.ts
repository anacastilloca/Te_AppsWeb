import {Component, DoCheck, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {EstudianteClass} from "../../../../../Gestion_Usuarios/Modelos/Estudiante/EstudianteClass";
import {EstudianteSaService} from "../../../../Servicios/estudiante-sa.service";
import {EstudianteCaService} from "../../../../Servicios/estudiante-ca.service";
import {Estudiante_SAClass} from "../../../../Modelos/Estudiante_SA/Estudiante_SAClass";
import {Estudiante_CAClass} from "../../../../Modelos/Estudiante_CA/Estudiante_CAClass";

@Component({
  selector: 'app-ver-info-est',
  templateUrl: './ver-info-est.component.html',
  styleUrls: ['./ver-info-est.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VerInfoEstComponent implements OnInit, DoCheck {

  @Input() estudiante:EstudianteClass;

  estudiantesSAs:Estudiante_SAClass[]=[];
  estudiantesCAs:Estudiante_CAClass[]=[];

  auxSA=false;
  auxCA=false;

  constructor(private _estudianteSAService:EstudianteSaService, private _estudianteCAService:EstudianteCaService) {
    //console.log(this.estudiante.id)
  }

  ngDoCheck(){
    //console.log(this.estudiante.id)
    //this.aux=this.estudiante.id
  }

  ngOnInit() {

  }

  verSA(id){
    this.auxSA=true;
    this._estudianteSAService.buscarSAsPorEstudianteSA(id)
      .subscribe(
        (estudiantesSAs:Estudiante_SAClass[]) => {
          //localStorage.setItem('terapeutas',JSON.stringify(terapeutas))
          this.estudiantesSAs = estudiantesSAs.map(
            (estudianteSA:Estudiante_SAClass)=>{

              estudianteSA.editar = false;
              //console.log(estudianteSA.idSecuenciaAcciones['nombre'])
              return estudianteSA;
            }
          );
        },
        error=>{
          console.log("Error: ",error)
        }
      )
  }

  verCA(id){
    this.auxCA=true;
    this._estudianteCAService.buscarSAsPorEstudianteCA(id)
      .subscribe(
        (estudiantesCAs:Estudiante_CAClass[]) => {
          //localStorage.setItem('terapeutas',JSON.stringify(terapeutas))
          this.estudiantesCAs = estudiantesCAs.map(
            (estudianteCA:Estudiante_CAClass)=>{
              estudianteCA.editar = false;
              return estudianteCA;
            }
          );
        },
        error=>{
          console.log("Error: ",error)
        }
      )
  }

}

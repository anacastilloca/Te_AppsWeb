import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {EstudianteSaService} from "../../../../../Gestion_SA_y_CA_(Asignacion Est)/Servicios/estudiante-sa.service";
import {Estudiante_SAClass} from "../../../../../Gestion_SA_y_CA_(Asignacion Est)/Modelos/Estudiante_SA/Estudiante_SAClass";

@Component({
  selector: 'app-nivel1',
  templateUrl: './nivel1.component.html',
  styleUrls: ['./nivel1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Nivel1Component implements OnInit {

  estudianteSA:Estudiante_SAClass;
  estudiantesSAs:Estudiante_SAClass[]=[];

  primerSAaPresentar=0;
  validacionImg1:string;
  validacionImg2:string
  validacionImg3:string

  constructor(private _estudiantesSAsService:EstudianteSaService) {
    console.log(localStorage.getItem('idEstudianteLog'));
  }

  ngOnInit() {
    this._estudiantesSAsService.buscarSAsPorEstudianteSA(localStorage.getItem('idEstudianteLog'))
      .subscribe(
        (estudiantesSAs:Estudiante_SAClass[]) => {
          this.estudiantesSAs = estudiantesSAs.map(
            (estudianteSA:Estudiante_SAClass)=>{
              estudianteSA.editar = false;
              console.log(estudianteSA)
              return estudianteSA;
            }
          );
        },
        error=>{
          console.log("Error: ",error)
        }
      )
  }

  onChange(img1,img2,img3){
    console.log('Img 1',img1)
    console.log('Img 2',img2)
    console.log('Img 3',img3)
  }

  validacionImg(img1, img2, img3){
    this.validacionImg1=img1

    console.log('Img 1',img1)
    console.log('Img 2',img2)
    console.log('Img 3',img3)
  }

}

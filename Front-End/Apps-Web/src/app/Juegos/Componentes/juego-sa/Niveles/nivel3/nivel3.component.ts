import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Estudiante_SAClass} from "../../../../../Gestion_SA_y_CA_(Asignacion Est)/Modelos/Estudiante_SA/Estudiante_SAClass";
import {EstudianteSaService} from "../../../../../Gestion_SA_y_CA_(Asignacion Est)/Servicios/estudiante-sa.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nivel3',
  templateUrl: './nivel3.component.html',
  styleUrls: ['./nivel3.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Nivel3Component implements OnInit {

  estudianteSA:Estudiante_SAClass;
  estudiantesSAs:Estudiante_SAClass[]=[];

  primerSAaPresentar=0;
  validacionImg1:string;
  validacionImg2:string
  validacionImg3:string
  validacionImg4:string
  validacionImg5:string

  img1Val=false;
  img2Val=false;
  img3Val=false;
  img4Val=false;
  img5Val=false;


  constructor(private _estudiantesSAsService:EstudianteSaService,private _router:Router) {

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


  valImg1(img){
    this.img1Val=true
    this.validacionImg1=img
    console.log('Img 1',img)
  }

  valImg2(img){
    this.img2Val=true
    this.validacionImg2=img
    console.log('Img 2',img)
  }

  valImg3(img){
    this.img3Val=true
    this.validacionImg3=img
    console.log('Img 3',img)
  }

  valImg4(img){
    this.img4Val=true
    this.validacionImg4=img
    console.log('Img 4',img)
  }

  valImg5(img){
    this.img5Val=true
    this.validacionImg5=img
    console.log('Img 5',img)
  }

  nivel4(){
    this._router.navigate(['juegos/saN4']);
  }

}

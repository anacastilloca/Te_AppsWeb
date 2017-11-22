import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Estudiante_CAClass} from "../../../Gestion_SA_y_CA_(Asignacion Est)/Modelos/Estudiante_CA/Estudiante_CAClass";
import {EstudianteCaService} from "../../../Gestion_SA_y_CA_(Asignacion Est)/Servicios/estudiante-ca.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-juego-ca',
  templateUrl: './juego-ca.component.html',
  styleUrls: ['./juego-ca.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JuegoCaComponent implements OnInit {

  estudiantesCAs:Estudiante_CAClass[]=[];
  presentarCA1=false;
  presentarCA2=false;
  presentarCA3=false;
  presentarCA4=false;
  presentarCA5=false;
  presentarCA6=false;

  campoSemantico=true;
  contenidoCampoSemantico=false;

  imgCA1="assets/Imagenes/CA/conjugacionQuerer.jpg";
  imgCA2="assets/Imagenes/CA/verboJuegar.jpg"
  imgCA3="assets/Imagenes/CA/sustantivo.jpg"
  imgCA4="assets/Imagenes/CA/verboCantar.jpg"
  imgCA5="assets/Imagenes/CA/verboBeber.jpg"
  imgCA6="assets/Imagenes/CA/verboComer.jpg"

  constructor(private _estudiantesCAsService:EstudianteCaService,private _router:Router) {

  }

  ngOnInit() {
    this._estudiantesCAsService.buscarSAsPorEstudianteCA(localStorage.getItem('idEstudianteLog'))
      .subscribe(
        (estudiantesCAs:Estudiante_CAClass[]) => {
          console.log(estudiantesCAs.length)
          this.estudiantesCAs = estudiantesCAs.map(
            (estudianteCA:Estudiante_CAClass)=>{
              estudianteCA.editar = false;
              console.log(estudianteCA)
              return estudianteCA;
            }
          );
        },
        error=>{
          console.log("Error: ",error)
        }
      )
  }

  envioImg1(){
    this.presentarCA1=true;
  }

  envioImg2(){
    this.presentarCA2=true;
  }
  envioImg3(){
    this.presentarCA3=true;
  }
  envioImg4(){
    this.presentarCA4=true;
  }
  envioImg5(){
    this.presentarCA5=true;
  }
  envioImg6(){
    this.presentarCA6=true;
  }

  irCampoSemantico(){
    this.contenidoCampoSemantico=true
    this.campoSemantico=false
    //this._router.navigate(['juegos/camSe']);
  }


}

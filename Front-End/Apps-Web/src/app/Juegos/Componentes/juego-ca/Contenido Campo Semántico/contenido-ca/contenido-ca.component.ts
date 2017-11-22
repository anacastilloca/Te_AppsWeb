import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contenido-ca',
  templateUrl: './contenido-ca.component.html',
  styleUrls: ['./contenido-ca.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContenidoCaComponent implements OnInit {

  imgCA1="assets/Imagenes/CA/conjugacionQuerer.jpg";
  imgCA2="assets/Imagenes/CA/verboJuegar.jpg"
  imgCA3="assets/Imagenes/CA/sustantivo.jpg"
  imgCA4="assets/Imagenes/CA/verboCantar.jpg"
  imgCA5="assets/Imagenes/CA/verboBeber.jpg"
  imgCA6="assets/Imagenes/CA/verboComer.jpg"

  volver=true;
  principal=false

  constructor() { }

  ngOnInit() {
  }

  volverPR(){
    this.volver=false;
    this.principal=true;
  }
}

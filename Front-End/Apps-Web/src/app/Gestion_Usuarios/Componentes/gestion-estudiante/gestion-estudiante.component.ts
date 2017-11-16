import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TerapeutaClass} from "../../Modelos/Terapeuta/TerapeutaClass";

@Component({
  selector: 'app-gestion-estudiante',
  templateUrl: './gestion-estudiante.component.html',
  styleUrls: ['./gestion-estudiante.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GestionEstudianteComponent implements OnInit {

  terapeuta:TerapeutaClass;
  constructor() {
    this.terapeuta= new TerapeutaClass("");
  }

  ngOnInit() {
  }

}

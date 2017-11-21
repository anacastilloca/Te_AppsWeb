import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {EstudianteClass} from "../../../../../Gestion_Usuarios/Modelos/Estudiante/EstudianteClass";
import {ComunicacionAlternativaClass} from "../../../../Modelos/CA/ComunicacionAlternativaClass";

@Component({
  selector: 'app-asignacion-ca',
  templateUrl: './asignacion-ca.component.html',
  styleUrls: ['./asignacion-ca.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AsignacionCaComponent implements OnInit {

  @Input() estudiante:EstudianteClass;

  comunicacionAlternativa:ComunicacionAlternativaClass;
  comunicacionesAlternativas:ComunicacionAlternativaClass[]=[];


  constructor() { }

  ngOnInit() {
  }

}

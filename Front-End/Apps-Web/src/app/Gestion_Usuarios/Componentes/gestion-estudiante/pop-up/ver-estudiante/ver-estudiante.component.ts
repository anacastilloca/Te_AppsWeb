import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {EstudianteClass} from "../../../../Modelos/Estudiante/EstudianteClass";

@Component({
  selector: 'app-ver-estudiante',
  templateUrl: './ver-estudiante.component.html',
  styleUrls: ['./ver-estudiante.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VerEstudianteComponent implements OnInit {

  @Input() estudiante:EstudianteClass;
  constructor() {
    this.estudiante= new EstudianteClass("");
  }

  ngOnInit() {
  }

}

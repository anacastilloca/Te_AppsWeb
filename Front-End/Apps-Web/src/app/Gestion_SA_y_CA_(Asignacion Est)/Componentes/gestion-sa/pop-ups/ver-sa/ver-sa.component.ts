import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {SecuenaAccionesClass} from "../../../../Modelos/SA/SecuenaAccionesClass";

@Component({
  selector: 'app-ver-sa',
  templateUrl: './ver-sa.component.html',
  styleUrls: ['./ver-sa.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VerSaComponent implements OnInit {

  @Input() secuenciaAcciones:SecuenaAccionesClass;

  numImagenes = new Array(6);

  constructor() { }

  ngOnInit() {
  }

}

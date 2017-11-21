import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ComunicacionAlternativaClass} from "../../../../Modelos/CA/ComunicacionAlternativaClass";

@Component({
  selector: 'app-ver-ca',
  templateUrl: './ver-ca.component.html',
  styleUrls: ['./ver-ca.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VerCaComponent implements OnInit {

  @Input() comunicacionAlternativa:ComunicacionAlternativaClass;

  constructor() { }

  ngOnInit() {
  }

}

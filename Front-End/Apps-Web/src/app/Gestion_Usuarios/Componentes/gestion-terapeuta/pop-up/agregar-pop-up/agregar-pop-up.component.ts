import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TerapeutaClass} from "../../../../Modelos/Terapeuta/TerapeutaClass";

@Component({
  selector: 'app-agregar-pop-up',
  templateUrl: './agregar-pop-up.component.html',
  styleUrls: ['./agregar-pop-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgregarPopUpComponent implements OnInit {

  @Input() terapeuta:TerapeutaClass;

  constructor() { }

  ngOnInit() {
  }

}

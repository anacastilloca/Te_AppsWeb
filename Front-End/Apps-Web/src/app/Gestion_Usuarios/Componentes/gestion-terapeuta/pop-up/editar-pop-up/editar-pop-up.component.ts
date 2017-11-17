import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TerapeutaClass} from "../../../../Modelos/Terapeuta/TerapeutaClass";

@Component({
  selector: 'app-editar-pop-up',
  templateUrl: './editar-pop-up.component.html',
  styleUrls: ['./editar-pop-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditarPopUpComponent implements OnInit {

  @Input() terapeuta:TerapeutaClass;
  constructor() { }

  ngOnInit() {
  }

}

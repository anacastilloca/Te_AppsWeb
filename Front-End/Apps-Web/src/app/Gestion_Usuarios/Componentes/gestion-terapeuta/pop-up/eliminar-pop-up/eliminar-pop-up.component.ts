import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TerapeutaClass} from "../../../../Modelos/Terapeuta/TerapeutaClass";
import {TerapeutaService} from "../../../../Servicios/terapeuta.service";

@Component({
  selector: 'app-eliminar-pop-up',
  templateUrl: './eliminar-pop-up.component.html',
  styleUrls: ['./eliminar-pop-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EliminarPopUpComponent implements OnInit {

  @Input() terapeuta:TerapeutaClass;
  @Output() eliminarTerapeutas = new EventEmitter();

  constructor(private _terapeutaService:TerapeutaService) { }

  ngOnInit() {
  }

  eliminarTerapeuta(){
    console.log(this.terapeuta)
    this._terapeutaService.borrarTerapeuta(this.terapeuta)
      .subscribe(
        ingreso => {
          this.eliminarTerapeutas.emit(this.terapeuta)
        },
        error => {
          console.log("Error",error);
        }
      )
  }

}

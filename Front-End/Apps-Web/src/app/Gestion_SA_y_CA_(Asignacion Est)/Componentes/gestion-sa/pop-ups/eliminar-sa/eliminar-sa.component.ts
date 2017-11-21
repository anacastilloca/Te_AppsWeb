import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {SecuenaAccionesClass} from "../../../../Modelos/SA/SecuenaAccionesClass";
import {SecueniaAccionesService} from "../../../../Servicios/secuenia-acciones.service";

@Component({
  selector: 'app-eliminar-sa',
  templateUrl: './eliminar-sa.component.html',
  styleUrls: ['./eliminar-sa.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EliminarSaComponent implements OnInit {

  @Input() secuenciaAcciones:SecuenaAccionesClass;
  @Output() eliminarsecuenciaAcciones = new EventEmitter();

  constructor(private _secuenciaAccionesService:SecueniaAccionesService) { }

  ngOnInit() {
  }

  eliminarSecuenciaAcciones(){
    //console.log(this.secuenciaAcciones)
    this._secuenciaAccionesService.borrarSecuenciaAcciones(this.secuenciaAcciones)
      .subscribe(
        ingreso => {
          this.eliminarsecuenciaAcciones.emit(this.secuenciaAcciones)
        },
        error => {
          console.log("Error",error);
        }
      )
  }
}

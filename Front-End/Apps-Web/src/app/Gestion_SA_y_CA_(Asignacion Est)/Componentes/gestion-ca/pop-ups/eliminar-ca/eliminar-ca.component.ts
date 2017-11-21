import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ComunicacionAlternativaClass} from "../../../../Modelos/CA/ComunicacionAlternativaClass";
import {ComunicacionAlternativaService} from "../../../../Servicios/comunicacion-alternativa.service";

@Component({
  selector: 'app-eliminar-ca',
  templateUrl: './eliminar-ca.component.html',
  styleUrls: ['./eliminar-ca.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EliminarCaComponent implements OnInit {

  @Input() comunicacionAlternativa:ComunicacionAlternativaClass;
  @Output() eliminarcomunicacionAlternativa = new EventEmitter();

  constructor(private _comunicacionAlternativaService:ComunicacionAlternativaService) { }

  ngOnInit() {
  }
  eliminarSecuenciaAcciones(){
    //console.log(this.secuenciaAcciones)
    this._comunicacionAlternativaService.borrarComunicacionAlternativa(this.comunicacionAlternativa)
      .subscribe(
        ingreso => {
          this.eliminarcomunicacionAlternativa.emit(this.comunicacionAlternativa)
        },
        error => {
          console.log("Error",error);
        }
      )
  }

}

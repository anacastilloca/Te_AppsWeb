import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ComunicacionAlternativaClass} from "../../../../Modelos/CA/ComunicacionAlternativaClass";
import {ComunicacionAlternativaService} from "../../../../Servicios/comunicacion-alternativa.service";

@Component({
  selector: 'app-agregar-ca',
  templateUrl: './agregar-ca.component.html',
  styleUrls: ['./agregar-ca.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgregarCaComponent implements OnInit {

  @Output() actualizacionTablaCA = new EventEmitter();
  comunicacionAlternativaNueva:ComunicacionAlternativaClass;

  constructor(private _comunicacionAlternativaService:ComunicacionAlternativaService) {
    this.comunicacionAlternativaNueva = new ComunicacionAlternativaClass("");
    console.log(localStorage.getItem('idTerapeutaLog'));

  }

  ngOnInit() {
  }

  agregarCA(){
    let aux:any;
    aux=this.comunicacionAlternativaNueva;
    aux.idTerapeuta=parseInt(localStorage.getItem('idTerapeutaLog'));

    console.log(this.comunicacionAlternativaNueva)

    this._comunicacionAlternativaService.ingresoComunicacionAlternativa(aux)
      .subscribe(
        (comunicacionAlternativaCreado:ComunicacionAlternativaClass) => {
          comunicacionAlternativaCreado = new ComunicacionAlternativaClass();
          this.actualizacionTablaCA.emit(this.comunicacionAlternativaNueva)
        },
        error => {
          console.log("Error",error);
        }
      )
  }

}

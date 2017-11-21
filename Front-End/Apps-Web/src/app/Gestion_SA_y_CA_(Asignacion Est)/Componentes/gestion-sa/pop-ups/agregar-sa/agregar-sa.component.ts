import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {SecuenaAccionesClass} from "../../../../Modelos/SA/SecuenaAccionesClass";
import {SecueniaAccionesService} from "../../../../Servicios/secuenia-acciones.service";

@Component({
  selector: 'app-agregar-sa',
  templateUrl: './agregar-sa.component.html',
  styleUrls: ['./agregar-sa.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgregarSaComponent implements OnInit {

  @Output() actualizacionTablaSA = new EventEmitter();
  secuenciaAccionesNueva:SecuenaAccionesClass;

  constructor(private _secuenciaAccionesService:SecueniaAccionesService) {
    this.secuenciaAccionesNueva = new SecuenaAccionesClass("");
    console.log(localStorage.getItem('idTerapeutaLog'));
  }

  ngOnInit() {
  }

  agregarSA(){
    let aux:any;
    aux=this.secuenciaAccionesNueva;
    aux.idTerapeuta=parseInt(localStorage.getItem('idTerapeutaLog'));

    console.log(this.secuenciaAccionesNueva)

    this._secuenciaAccionesService.ingresoSecuenciAcciones(aux)
      .subscribe(
        (secuenciaAccionesCreado:SecuenaAccionesClass) => {
          secuenciaAccionesCreado = new SecuenaAccionesClass();
          this.actualizacionTablaSA.emit(this.secuenciaAccionesNueva)
        },
        error => {
          console.log("Error",error);
        }
      )
  }
}

import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TerapeutaClass} from "../../../../Modelos/Terapeuta/TerapeutaClass";
import {TerapeutaService} from "../../../../Servicios/terapeuta.service";

@Component({
  selector: 'app-agregar-pop-up',
  templateUrl: './agregar-pop-up.component.html',
  styleUrls: ['./agregar-pop-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgregarPopUpComponent implements OnInit {

  //terapeuta:TerapeutaClass;
  @Output() actualizacionTablaTerapeutas = new EventEmitter();

  terapeutaNuevo:TerapeutaClass;

  constructor(private _terapeutaService:TerapeutaService) {
    this.terapeutaNuevo=new TerapeutaClass("");
    console.log(localStorage.getItem('idOrganizacionLog'));
  }

  ngOnInit() {
  }

  agregarTerapeuta(){
    let aux:any;
    aux=this.terapeutaNuevo;
    aux.idOrganizacion=parseInt(localStorage.getItem('idOrganizacionLog'));

    console.log(this.terapeutaNuevo)

    this._terapeutaService.ingresoTerapeuta(aux)
      .subscribe(
        (terapeutaCreado:TerapeutaClass) => {
          terapeutaCreado = new TerapeutaClass();
          this.actualizacionTablaTerapeutas.emit(this.terapeutaNuevo)
        },
        error => {
          console.log("Error",error);
        }
      )
  }

}

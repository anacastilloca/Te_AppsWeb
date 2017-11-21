import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SecuenaAccionesClass} from "../../Modelos/SA/SecuenaAccionesClass";
import {SecueniaAccionesService} from "../../Servicios/secuenia-acciones.service";

@Component({
  selector: 'app-gestion-sa',
  templateUrl: './gestion-sa.component.html',
  styleUrls: ['./gestion-sa.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GestionSaComponent implements OnInit {

  busquedaPorNombre:string;
  secuenciaAcciones:SecuenaAccionesClass;
  secuenciasAcciones:SecuenaAccionesClass[];

  validacionModal=false;

  constructor(private _secuenciaAccionesService:SecueniaAccionesService) {
    console.log(localStorage.getItem('idTerapeutaLog'));
  }

  ngOnInit() {
    this._secuenciaAccionesService.buscarVariosPorTerapeutaSA(localStorage.getItem('idTerapeutaLog'))
      .subscribe(
        (secuenciasAcciones:SecuenaAccionesClass[]) => {
           this.secuenciasAcciones = secuenciasAcciones.map(
            (secuenciaAcciones:SecuenaAccionesClass)=>{
              secuenciaAcciones.editar = false;
              return secuenciaAcciones;
            }
          );
        },
        error=>{
          console.log("Error: ",error)
        }
      )
    console.log(this.secuenciasAcciones)
  }

  modalVer(indice){
    this.validacionModal=true;
    this.secuenciaAcciones=this.secuenciasAcciones[indice];
  }

  modalEditar(indice){
    this.validacionModal=true;
    this.secuenciaAcciones=this.secuenciasAcciones[indice];
  }

  modalEliminar(indice){
    this.validacionModal=true;
    this.secuenciaAcciones=this.secuenciasAcciones[indice];
  }

  presentacionActualizadaAgregar(evento){
    //console.log(evento)
    this.secuenciasAcciones.push(evento);
  }

  presentacionActualizadaEliminar(evento){
    this.validacionModal=true;
    let indice = this.secuenciasAcciones.indexOf(evento);
    this.secuenciasAcciones.splice(indice,1);
  }


}

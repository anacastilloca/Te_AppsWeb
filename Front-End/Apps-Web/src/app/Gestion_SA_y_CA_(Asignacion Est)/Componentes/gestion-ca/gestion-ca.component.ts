import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ComunicacionAlternativaClass} from "../../Modelos/CA/ComunicacionAlternativaClass";
import {ComunicacionAlternativaService} from "../../Servicios/comunicacion-alternativa.service";

@Component({
  selector: 'app-gestion-ca',
  templateUrl: './gestion-ca.component.html',
  styleUrls: ['./gestion-ca.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GestionCaComponent implements OnInit {

  busquedaPorNombre:string;
  comunicacionAlternativa:ComunicacionAlternativaClass;
  comunicacionesAlternativas:ComunicacionAlternativaClass[]=[];
  validacionModal=false;

  constructor(private _comunicacionAlternativaService:ComunicacionAlternativaService) {
    this.comunicacionAlternativa=new ComunicacionAlternativaClass("");
    console.log(localStorage.getItem('idTerapeutaLog'));

  }

  ngOnInit() {
    this._comunicacionAlternativaService.buscarVariosPorTerapeutaCA(localStorage.getItem('idTerapeutaLog'))
      .subscribe(
        (comunicacionesAlternativas:ComunicacionAlternativaClass[]) => {
          this.comunicacionesAlternativas = comunicacionesAlternativas.map(
            (comunicacionAlternativa:ComunicacionAlternativaClass)=>{
              comunicacionAlternativa.editar = false;
              return comunicacionAlternativa;
            }
          );
        },
        error=>{
          console.log("Error: ",error)
        }
      )
    console.log(this.comunicacionesAlternativas)
  }

  modalVer(indice){
    this.validacionModal=true;
    this.comunicacionAlternativa=this.comunicacionesAlternativas[indice];
  }

  modalEditar(indice){
    this.validacionModal=true;
    this.comunicacionAlternativa=this.comunicacionesAlternativas[indice];
  }

  modalEliminar(indice){
    this.validacionModal=true;
    this.comunicacionAlternativa=this.comunicacionesAlternativas[indice];
  }

  presentacionActualizadaAgregar(evento){
    //console.log(evento)
    this.comunicacionesAlternativas.push(evento);
  }

  presentacionActualizadaEliminar(evento){
    this.validacionModal=true;
    let indice = this.comunicacionesAlternativas.indexOf(evento);
    this.comunicacionesAlternativas.splice(indice,1);
  }

}

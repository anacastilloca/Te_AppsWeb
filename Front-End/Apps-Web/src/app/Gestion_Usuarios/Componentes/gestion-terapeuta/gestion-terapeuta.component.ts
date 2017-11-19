import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TerapeutaClass} from "../../Modelos/Terapeuta/TerapeutaClass";
import {ActivatedRoute, Router} from "@angular/router";
import {TerapeutaService} from "../../Servicios/terapeuta.service";

@Component({
  selector: 'app-gestion-terapeuta',
  templateUrl: './gestion-terapeuta.component.html',
  styleUrls: ['./gestion-terapeuta.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GestionTerapeutaComponent implements OnInit {

  busquedaPorNombre:string;

  terapeuta:TerapeutaClass= new TerapeutaClass("");
  terapeutas:TerapeutaClass[]=[];

  //Para pasar al pop-up ver
  idTerapeuta:number


  constructor(private _terapeutaService:TerapeutaService) {
    console.log(localStorage.getItem('idOrganizacionLog'));

  }

  ngOnInit() {
    this._terapeutaService.buscarUnoPorOrganizacion(localStorage.getItem('idOrganizacionLog'))
      .subscribe(
        (terapeutas:TerapeutaClass[]) => {
          this.terapeutas = terapeutas.map(
            (terapeuta:TerapeutaClass)=>{
              terapeuta.editar = false;

               return terapeuta;
            }
          );
        },
        error=>{
          console.log("Error: ",error)
        }
      )
  }

  modalVer(indice){
    this.terapeuta=this.terapeutas[indice];
  }

  modalEditar(indice){
    this.terapeuta=this.terapeutas[indice];
  }

  modalEliminar(indice){
    this.terapeuta=this.terapeutas[indice];
  }

  presentacionActualizadaAgregar(evento){
    //console.log(evento)
    this.terapeutas.push(evento);
  }

  presentacionActualizadaEliminar(evento){
    let indice = this.terapeutas.indexOf(evento);
    this.terapeutas.splice(indice,1);
  }





}

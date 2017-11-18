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

  //Obtener el valor del idOrganización Legeado
  idOrganizacionLegeada:number;

  terapeuta:TerapeutaClass= new TerapeutaClass("");
  terapeutas:TerapeutaClass[]=[];

  //Para pasar al pop-up ver
  idTerapeuta:number

  //terapeutas=new Array(1);

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

}

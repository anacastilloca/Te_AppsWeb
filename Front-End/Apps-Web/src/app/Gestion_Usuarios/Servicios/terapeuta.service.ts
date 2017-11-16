import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import { UrlService } from "./url.service";
import {TerapeutaClass} from "../Modelos/Terapeuta/TerapeutaClass";


@Injectable()
export class TerapeutaService {

  public url:string;
  modelo="Terapeuta"

  constructor(private _http:Http, private _urlService:UrlService) {
    this.url=this._urlService.url+this.modelo;
  }

  ingresoTerapeura(terapeuta:TerapeutaClass){
    let datosEnviar={
      cedula:terapeuta.cedula,
      nombre:terapeuta.nombre,
      correo:terapeuta.correo,
      contrasenia:terapeuta.contrasenia,
      direccion:terapeuta.direccion,
      celular:terapeuta.celular,
      idOrganizacion:terapeuta.idOrganizacion
    };
    return this._http.post(this.url,datosEnviar)
      .map(res => {
        return res.json()
      })

  }
}

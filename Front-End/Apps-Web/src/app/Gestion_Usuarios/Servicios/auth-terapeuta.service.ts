import { Injectable } from '@angular/core';
import { UrlService } from "./url.service";
import {Http} from "@angular/http";

@Injectable()
export class AuthTerapeutaService {
  url:string;
  modelo='AuthTerapeuta';

  constructor(private _http:Http, private _urlPrincipal:UrlService) {
    this.url=this._urlPrincipal.url+this.modelo;
  }

  logIn(cedula:number, contrasenia:string){
    let metodo='/logIn';
    let datosEnviar={
      cedula,
      contrasenia:contrasenia
    };
    return this._http.post(this.url+metodo,datosEnviar)
  }

}

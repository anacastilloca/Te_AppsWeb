import { Injectable } from '@angular/core';
import { UrlService } from "./url.service";
import {Http} from "@angular/http";

@Injectable()
export class AuthOrganizacionService {
  url:string;
  modelo='Auth';

  constructor(private _http:Http, private _urlPrincipal:UrlService) {
    this.url=this._urlPrincipal.url+this.modelo;
  }

  logIn(ruc:string,contrasenia:string){
    let metodo= '/logIn';
    let datosEnviar ={
      ruc,
      contrasenia:contrasenia
    };
    return this._http.post(this.url+metodo,datosEnviar);
  }
}

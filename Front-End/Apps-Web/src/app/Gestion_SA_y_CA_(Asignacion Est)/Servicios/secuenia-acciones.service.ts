import { Injectable } from '@angular/core';
import {UrlService} from "../../Gestion_Usuarios/Servicios/url.service";
import {Headers, Http} from "@angular/http";
import {TokenService} from "../../Gestion_Usuarios/Componentes/token.service";
import {SecuenaAccionesClass} from "../Modelos/SA/SecuenaAccionesClass";

@Injectable()
export class SecueniaAccionesService {

  url:string;
  modelo='Secuencia_Acciones'
  headers:Headers

  constructor(private _usrService:UrlService, private _http:Http,private _tokenService:TokenService) {
    this.url=this._usrService.url+this.modelo;
    this.headers=new Headers();
    this.headers.append('Authorization', 'Bearer '+ this._tokenService.token);
  }

  ingresoSecuenciAcciones(secuenciaAcciones:SecuenaAccionesClass){
    //console.log(secuenciaAcciones)
    let datosEnviar={
      nombre:secuenciaAcciones.nombre,
      imagen1:secuenciaAcciones.imagen1,
      imagen2:secuenciaAcciones.imagen2,
      imagen3:secuenciaAcciones.imagen3,
      imagen4:secuenciaAcciones.imagen4,
      imagen5:secuenciaAcciones.imagen5,
      imagen6:secuenciaAcciones.imagen6,
      idTerapeuta:secuenciaAcciones.idTerapeuta,

    };
    return this._http.post(this.url,datosEnviar,{headers:this.headers})
      .map(res =>{
        return res.json();
      })
  }

  editarSecuenciAcciones(secuenciaAcciones:SecuenaAccionesClass){
    let datosEnviar={
      nombre:secuenciaAcciones.nombre,
      imagen1:secuenciaAcciones.imagen1,
      imagen2:secuenciaAcciones.imagen2,
      imagen3:secuenciaAcciones.imagen3,
      imagen4:secuenciaAcciones.imagen4,
      imagen5:secuenciaAcciones.imagen5,
      imagen6:secuenciaAcciones.imagen6,
    };
    return this._http.put(this.url+`/${secuenciaAcciones.id}`,datosEnviar)
      .map(res =>{
        return res.json();
      })
  }

  borrarSecuenciaAcciones(secuenaAcciones:SecuenaAccionesClass){
    return this._http.delete(this.url+`/${secuenaAcciones.id}`)
      .map(res =>{
        return res.json();
      })
  }

  //Buscar por Terapeuta
  buscarVariosPorTerapeutaSA(id:string){
    return this._http
      .get(this.url+'?idTerapeuta='+`${id}`)
      .map(res => {
        return res.json()
      })
  }

}

import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {UrlService} from "../../Gestion_Usuarios/Servicios/url.service";
import {TokenService} from "../../Gestion_Usuarios/Componentes/token.service";
import {ComunicacionAlternativaClass} from "../Modelos/CA/ComunicacionAlternativaClass";

@Injectable()
export class ComunicacionAlternativaService {

  url:string;
  modelo='Comunicacion_Alternativa'
  headers:Headers

  constructor(private _http:Http, private _urlService:UrlService, private _tokenService:TokenService) {
    this.url=this._urlService.url+this.modelo;
    this.headers= new Headers();
    this.headers.append('Authorization', 'Bearer '+ this._tokenService.token);
  }

  ingresoComunicacionAlternativa(comunicacionAlternativa:ComunicacionAlternativaClass){
    //console.log(comunicacionAlternativa)
    let datosEnviar={
      nombre:comunicacionAlternativa.nombre,
      imagen1:comunicacionAlternativa.imagen1,
      imagen2:comunicacionAlternativa.imagen2,
      imagen3:comunicacionAlternativa.imagen3,
      imagen4:comunicacionAlternativa.imagen4,
      imagen5:comunicacionAlternativa.imagen5,
      imagen6:comunicacionAlternativa.imagen6,
      imagen7:comunicacionAlternativa.imagen7,
      imagen8:comunicacionAlternativa.imagen8,
      imagen9:comunicacionAlternativa.imagen9,
      imagen10:comunicacionAlternativa.imagen10,
      imagen11:comunicacionAlternativa.imagen11,
      imagen12:comunicacionAlternativa.imagen12,
      imagen13:comunicacionAlternativa.imagen13,
      imagen14:comunicacionAlternativa.imagen14,
      imagen15:comunicacionAlternativa.imagen15,
      imagen16:comunicacionAlternativa.imagen16,
      imagen17:comunicacionAlternativa.imagen17,
      imagen18:comunicacionAlternativa.imagen18,
      imagen19:comunicacionAlternativa.imagen19,
      imagen20:comunicacionAlternativa.imagen20,
      imagen21:comunicacionAlternativa.imagen21,
      imagen22:comunicacionAlternativa.imagen22,
      imagen23:comunicacionAlternativa.imagen23,
      imagen24:comunicacionAlternativa.imagen24,
      imagen25:comunicacionAlternativa.imagen25,
      imagen26:comunicacionAlternativa.imagen26,
      idTerapeuta:comunicacionAlternativa.idTerapeuta,

    };
    return this._http.post(this.url,datosEnviar,{headers:this.headers})
      .map(res =>{
        return res.json();
      })
  }

  editarComunicacionAlternativa(comunicacionAlternativa:ComunicacionAlternativaClass){
    let datosEnviar={
      nombre:comunicacionAlternativa.nombre,
      imagen1:comunicacionAlternativa.imagen1,
      imagen2:comunicacionAlternativa.imagen2,
      imagen3:comunicacionAlternativa.imagen3,
      imagen4:comunicacionAlternativa.imagen4,
      imagen5:comunicacionAlternativa.imagen5,
      imagen6:comunicacionAlternativa.imagen6,
      imagen7:comunicacionAlternativa.imagen7,
      imagen8:comunicacionAlternativa.imagen8,
      imagen9:comunicacionAlternativa.imagen9,
      imagen10:comunicacionAlternativa.imagen10,
      imagen11:comunicacionAlternativa.imagen11,
      imagen12:comunicacionAlternativa.imagen12,
      imagen13:comunicacionAlternativa.imagen13,
      imagen14:comunicacionAlternativa.imagen14,
      imagen15:comunicacionAlternativa.imagen15,
      imagen16:comunicacionAlternativa.imagen16,
      imagen17:comunicacionAlternativa.imagen17,
      imagen18:comunicacionAlternativa.imagen18,
      imagen19:comunicacionAlternativa.imagen19,
      imagen20:comunicacionAlternativa.imagen20,
      imagen21:comunicacionAlternativa.imagen21,
      imagen22:comunicacionAlternativa.imagen22,
      imagen23:comunicacionAlternativa.imagen23,
      imagen24:comunicacionAlternativa.imagen24,
      imagen25:comunicacionAlternativa.imagen25,
      imagen26:comunicacionAlternativa.imagen26,
    };
    return this._http.put(this.url+`/${comunicacionAlternativa.id}`,datosEnviar)
      .map(res =>{
        return res.json();
      })
  }

  borrarComunicacionAlternativa(comunicacionAlternativa:ComunicacionAlternativaClass){
    return this._http.delete(this.url+`/${comunicacionAlternativa.id}`)
      .map(res =>{
        return res.json();
      })
  }

  //Buscar por Terapeuta
  buscarVariosPorTerapeutaCA(id:string){
    return this._http
      .get(this.url+'?idTerapeuta='+`${id}`)
      .map(res => {
        return res.json()
      })
  }


}

import { Injectable } from '@angular/core';
import {UrlService} from "../../Gestion_Usuarios/Servicios/url.service";
import {Headers, Http} from "@angular/http";
import {TokenService} from "../../Gestion_Usuarios/Componentes/token.service";
import {Estudiante_SAClass} from "../Modelos/Estudiante_SA/Estudiante_SAClass";

@Injectable()
export class EstudianteSaService {

  url:string;
  modelo='Estudiante_SA'
  headers:Headers

  constructor(private _usrService:UrlService, private _http:Http,private _tokenService:TokenService) {
    this.url=this._usrService.url+this.modelo;
    this.headers=new Headers();
    this.headers.append('Authorization', 'Bearer '+ this._tokenService.token);
  }

  ingresoEstudianteSecuenciAcciones(estudiante_secuenciaAcciones:Estudiante_SAClass){
    //console.log(secuenciaAcciones)
    let datosEnviar={
      idEstudiante:estudiante_secuenciaAcciones.idEstudiante,
      idSecuenciaAcciones:estudiante_secuenciaAcciones.idSecuenciaAcciones,

    };
    return this._http.post(this.url,datosEnviar,{headers:this.headers})
      .map(res =>{
        return res.json();
      })
  }

  editarEstudianteSecuenciAcciones(estudiante_secuenciaAcciones:Estudiante_SAClass){
    let datosEnviar={
      idEstudiante:estudiante_secuenciaAcciones.idEstudiante,
      idSecuenciaAcciones:estudiante_secuenciaAcciones.idSecuenciaAcciones,
    };
    return this._http.put(this.url+`/${estudiante_secuenciaAcciones.id}`,datosEnviar)
      .map(res =>{
        return res.json();
      })
  }

  borrarEstudianteSecuenciaAcciones(estudiante_secuenciaAcciones:Estudiante_SAClass){
    return this._http.delete(this.url+`/${estudiante_secuenciaAcciones.id}`)
      .map(res =>{
        return res.json();
      })
  }

  //Buscar por Estudiante
  buscarSAsPorEstudianteSA(id:number){
    return this._http
      .get(this.url+'?idEstudiante='+`${id}`)
      .map(res => {
        return res.json()
      })
  }

}

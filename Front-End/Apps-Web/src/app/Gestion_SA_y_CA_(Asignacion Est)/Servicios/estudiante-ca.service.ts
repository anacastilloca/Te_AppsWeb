import { Injectable } from '@angular/core';
import {UrlService} from "../../Gestion_Usuarios/Servicios/url.service";
import {Headers, Http} from "@angular/http";
import {TokenService} from "../../Gestion_Usuarios/Componentes/token.service";
import {Estudiante_CAClass} from "../Modelos/Estudiante_CA/Estudiante_CAClass";

@Injectable()
export class EstudianteCaService {

  url:string;
  modelo='Estudiante_CA'
  headers:Headers

  constructor(private _usrService:UrlService, private _http:Http,private _tokenService:TokenService) {
    this.url=this._usrService.url+this.modelo;
    this.headers=new Headers();
    this.headers.append('Authorization', 'Bearer '+ this._tokenService.token);
  }

  ingresoEstudianteComunicacionAlternativa(estudiante_comunicacionAlternativa:Estudiante_CAClass){
    //console.log(secuenciaAcciones)
    let datosEnviar={
      idEstudiante:estudiante_comunicacionAlternativa.idEstudiante,
      idComunicacionAlternativa:estudiante_comunicacionAlternativa.idComunicacionAlternativa,

    };
    return this._http.post(this.url,datosEnviar,{headers:this.headers})
      .map(res =>{
        return res.json();
      })
  }

  editarEstudianteComunicacionAlternativa(estudiante_comunicacionAlternativa:Estudiante_CAClass){
    let datosEnviar={
      idEstudiante:estudiante_comunicacionAlternativa.idEstudiante,
      idComunicacionAlternativa:estudiante_comunicacionAlternativa.idComunicacionAlternativa,
    };
    return this._http.put(this.url+`/${estudiante_comunicacionAlternativa.id}`,datosEnviar)
      .map(res =>{
        return res.json();
      })
  }

  borrarEstudianteComunicacionAlternativa(estudiante_comunicacionAlternativa:Estudiante_CAClass){
    return this._http.delete(this.url+`/${estudiante_comunicacionAlternativa.id}`)
      .map(res =>{
        return res.json();
      })
  }

  //Buscar por Estudiante
  buscarSAsPorEstudianteCA(id:number){
    return this._http
      .get(this.url+'?idEstudiante='+`${id}`)
      .map(res => {
        return res.json()
      })
  }

}

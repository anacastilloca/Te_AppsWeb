import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {Headers, Http} from "@angular/http";
import {UrlService} from "./url.service";
import {TokenService} from "../Componentes/token.service";
import {EstudianteClass} from "../Modelos/Estudiante/EstudianteClass";

@Injectable()
export class EstudianteService {

  url:string;
  modelo='Estudiante';
  headers:Headers

  constructor(private _http:Http, private _urlService:UrlService,
              private _tokenService:TokenService) {
    this.url=this._urlService.url+this.modelo;
    this.headers= new Headers();
    this.headers.append('Authorization', 'Bearer '+ this._tokenService.token);
  }

  ingresoEstudiante(estudiante:EstudianteClass){
    //console.log(estudiante)
    let datosEnviar={
      cedula:estudiante.cedula,
      nombre:estudiante.nombre,
      edad:estudiante.edad,
      contrasenia:estudiante.contrasenia,
      nombreRepresentante:estudiante.nombreRepresentante,
      celularRepresentante:estudiante.celularRepresentante,
      direccionRepresentante:estudiante.direccionRepresentante,
      idTerapeuta:estudiante.idTerapeuta,
      idOrganizacion:estudiante.idOrganizacion
    };
    return this._http.post(this.url,datosEnviar,{headers:this.headers})
      .map(res =>{
        return res.json();
      })
  }

  editarEstudiante(estudiante:EstudianteClass){
    let datosEnviar={
      cedula:estudiante.cedula,
      nombre:estudiante.nombre,
      edad:estudiante.edad,
      contrasenia:estudiante.contrasenia,
      nombreRepresentante:estudiante.nombreRepresentante,
      celularRepresentante:estudiante.celularRepresentante,
      direccionRepresentante:estudiante.direccionRepresentante,
      idTerapeuta:estudiante.idTerapeuta
    };
    return this._http.put(this.url+`/${estudiante.id}`,datosEnviar)
      .map(res =>{
        return res.json();
      })
  }

  borrarEstudiante(estudiante:EstudianteClass){
    return this._http.delete(this.url+`/${estudiante.id}`)
      .map(res =>{
        return res.json();
      })
  }

  //Por organizacion
  buscarVariosPorOrganizacion(id:string){
    return this._http
      .get(this.url+'?idOrganizacion='+`${id}`)
      .map(res => {
        return res.json()
      })
  }

  //Por terapeuta
  buscarVariosPorTerapeutaEstudiante(id:string){
    return this._http
      .get(this.url+'?idTerapeuta='+`${id}`)
      .map(res => {
        return res.json()
      })
  }

  //Por ID
  buscarUnoPorId(id:number){
    return this._http
      .get(this.url+`/${id}`)
      .map(res => {
        return res.json()
      })
  }

  buscarTodos(){
    return this._http
      .get(this.url)
      .map(res => {
        return res.json()
      })
  }


}

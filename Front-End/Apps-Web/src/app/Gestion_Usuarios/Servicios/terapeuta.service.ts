import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/map'
import { UrlService } from "./url.service";
import {TerapeutaClass} from "../Modelos/Terapeuta/TerapeutaClass";
import {TokenService} from "../Componentes/token.service";


@Injectable()
export class TerapeutaService {

  url:string;
  modelo="Terapeuta";
  headers:Headers;

  constructor(private _http:Http,private _urlService:UrlService,
              private _tokenService:TokenService){

    this.url=this._urlService.url+this.modelo;
    this.headers=new Headers();
    this.headers.append('Authorization', 'Bearer '+ this._tokenService.token);
  }

  ingresoTerapeuta(terapeuta:TerapeutaClass){
    //console.log(terapeuta)
    let datosEnviar={
      cedula:terapeuta.cedula,
      nombre:terapeuta.nombre,
      correo:terapeuta.correo,
      contrasenia:terapeuta.contrasenia,
      direccion:terapeuta.direccion,
      celular:terapeuta.celular,
      idOrganizacion:terapeuta.idOrganizacion
    };
    return this._http.post(this.url,datosEnviar,{headers:this.headers})
      .map(res =>{
        return res.json();
      })
  }

  editarTerapeuta(terapeuta:TerapeutaClass){
    let datosEnviar={
      cedula:terapeuta.cedula,
      nombre:terapeuta.nombre,
      correo:terapeuta.correo,
      contrasenia:terapeuta.contrasenia,
      direccion:terapeuta.direccion,
      celular:terapeuta.celular
    };
    return this._http.put(this.url+`/${terapeuta.id}`,datosEnviar)
      .map(res =>{
        return res.json();
      })
  }

  borrarTerapeuta(terapeuta:TerapeutaClass){
    return this._http.delete(this.url+`/${terapeuta.id}`)
      .map(res =>{
        return res.json();
    })
  }

  //Por organizacion
  buscarUnoPorOrganizacion(id:string){
    return this._http
      .get(this.url+'?idOrganizacion='+`${id}`)
      .map(res => {
        return res.json()
      })
  }

  //Por nombre
  bucarUnoPorNombre(nombre:string){
    return this._http
      .get(this.url+'?nombre='+`${nombre}`)
      .map(res=>{
        return res.json();
        }
      )
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

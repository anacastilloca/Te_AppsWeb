import { Injectable } from '@angular/core';
import { AuthOrganizacionService } from "./auth-organizacion.service";
import { AuthEstudianteService } from "./auth-estudiante.service";
import { AuthTerapeutaService } from "./auth-terapeuta.service";
import {TokenService} from "../Componentes/token.service";

@Injectable()
export class AuthService {

  estaLogeado:boolean=false;

  constructor(private _authOrganizacion:AuthOrganizacionService,
              private _authTerapeuta:AuthTerapeutaService,
              private _authEstudiante:AuthEstudianteService,
              private _tokenService:TokenService) {

  }

  hacerLoginOrg(ruc,contrasenia){
    this._authOrganizacion.logIn(ruc,contrasenia).
    subscribe(
      token=>{
        console.log(token.text());
        this._tokenService.token=token.text();
        this.estaLogeado=true;
      },
      errorServidor=>{
        console.log('Error',errorServidor);
        this.estaLogeado=false;
      }
    )

  }

  hacerLoginTera(cedula,contrasenia){
    this._authTerapeuta.logIn(cedula,contrasenia).
    subscribe(
      token=>{
        console.log(token.text());
        this._tokenService.token=token.text();
        this.estaLogeado=true;
      },
      errorServidor=>{
        console.log('Error',errorServidor)
      }
    )
  }

  hacerLoginEst(cedula,contrasenia){
    this._authEstudiante.logIn(cedula,contrasenia).
    subscribe(
      token=>{
        console.log(token.text());
        this._tokenService.token=token.text();
        this.estaLogeado=true;
      },
      errorServidor=>{
        console.log('Error',errorServidor)
      }
    )
  }

  hacerLogOut(){
    this._tokenService.token="";
    this.estaLogeado=false;
  }

}

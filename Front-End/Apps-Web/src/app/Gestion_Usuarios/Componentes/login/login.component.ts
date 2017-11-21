import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TokenService} from "../token.service";
import {AuthService} from "../../Servicios/auth.service";
import {AuthOrganizacionService} from "../../Servicios/auth-organizacion.service";
import {Router} from "@angular/router";
import {AuthTerapeutaService} from "../../Servicios/auth-terapeuta.service";
import {AuthEstudianteService} from "../../Servicios/auth-estudiante.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  //Paso del id y nombre de la Organización Logeada
  idOrganizacionLog:string;
  nombreOrganizacion:string;

  //Paso del id y nombre del terapeuta Logeado
  idTerapeutaLog:string;
  nombreTerapeuta:string;

  //Paso del id y nombre del estudiante Logeado
  idEstudianteLog:string;
  nombreEstudiante:string;

  //Para el llenado del combobox
  usersSeleccionado:string;
  tipoUsers = [{id:1,rol:'Administrador' }, {id:2, rol:'Terapeuta' },  {id:3,rol:'Estudiante' } ];

  //Para realizar las validaciones de ingreso
  ruc_cedula:string;
  contrasenia:string;

  constructor(private _authService:AuthService,
              private _authOrganizacion:AuthOrganizacionService,
              private _authTerapeuta:AuthTerapeutaService,
              private _authEstudiante:AuthEstudianteService,
              private _router:Router) {

  }

  ngOnInit() {

  }

  onChange(userSelec){
    this.usersSeleccionado=userSelec;
  }

  ingresarUsuario(){
    console.log(this.usersSeleccionado);
    //console.log('Hacer login ',this._authService.hacerLoginOrg(this.ruc_cedula,this.contrasenia));

    if(!this.usersSeleccionado.localeCompare("Administrador") ){
      console.log("Es administrador");
      this._authOrganizacion.logIn(this.ruc_cedula,this.contrasenia)
        .map(res => res.json())
        .subscribe(
          token=>{
            console.log(token);
            console.log(token.idOrganizacion);
            this.idOrganizacionLog=(token.idOrganizacion).toString();
            this.nombreOrganizacion=token.nombreOrganizacion;
            localStorage.setItem('idOrganizacionLog',this.idOrganizacionLog);
            localStorage.setItem('nombreOrganizacion',this.nombreOrganizacion)
            this._router.navigate(['adm/terapeuta']);
          },
          errorServidor=>{
            alert("El usuario o la contraseña son incorrectos");
          })

    }else if (!this.usersSeleccionado.localeCompare("Terapeuta")){
      console.log("Es terapeuta");
      this._authTerapeuta.logIn(this.ruc_cedula,this.contrasenia)
        .map(res => res.json())
        .subscribe(
          token=>{
            //console.log(token);
            console.log(token.idTerapeuta);
            this.idTerapeutaLog=(token.idTerapeuta).toString();
            this.nombreTerapeuta=token.nombreTerapeuta;
            localStorage.setItem('idTerapeutaLog',this.idTerapeutaLog);
            localStorage.setItem('nombreTerapeuta',this.nombreTerapeuta)
            this._router.navigate(['saca/sa']);
          },
          errorServidor=>{
            alert("El usuario o la contraseña son incorrectos");
          })

    }else {
      console.log("Es estudiante");
      this._authEstudiante.logIn(this.ruc_cedula,this.contrasenia)
        .map(res => res.json())
        .subscribe(
          token=>{
            //console.log(token);
            console.log(token.idEstudiante);
            this.idEstudianteLog=(token.idEstudiante).toString();
            this.nombreEstudiante=token.nombreEstudiante;
            localStorage.setItem('idEstudianteLog',this.idEstudianteLog);
            localStorage.setItem('nombreEstudiante',this.nombreEstudiante)
            this._router.navigate(['juegos/saN1']);
          },
          errorServidor=>{
            alert("El usuario o la contraseña son incorrectos");
          })
    }

    //localStorage.setItem('ruc_cedula',this.ruc_cedula);



  }


}

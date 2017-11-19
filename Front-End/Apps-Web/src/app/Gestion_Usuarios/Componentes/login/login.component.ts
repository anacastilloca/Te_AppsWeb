import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TokenService} from "../token.service";
import {AuthService} from "../../Servicios/auth.service";
import {AuthOrganizacionService} from "../../Servicios/auth-organizacion.service";
import {Router} from "@angular/router";

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

  //Para el llenado del combobox
  usersSeleccionado:string;
  tipoUsers = [{id:1,rol:'Administrador' }, {id:2, rol:'Terapeuta' },  {id:3,rol:'Estudiante' } ];

  //Para realizar las validaciones de ingreso
  ruc_cedula:string;
  contrasenia:string;

  constructor(private _tokenService:TokenService,
              private _authService:AuthService,
              private _authOrganizacion:AuthOrganizacionService,
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
      console.log("Es tera");
      this._authService.hacerLoginTera(this.ruc_cedula, this.contrasenia)
    }else {
      console.log("Es estu");
      this._authService.hacerLoginEst(this.ruc_cedula,this.contrasenia)
    }

    //localStorage.setItem('ruc_cedula',this.ruc_cedula);



  }


}

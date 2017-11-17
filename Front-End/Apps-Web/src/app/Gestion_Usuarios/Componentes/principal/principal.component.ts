import { Component, OnInit, DoCheck, ViewEncapsulation } from '@angular/core';
import {AuthService} from "../../Servicios/auth.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PrincipalComponent implements OnInit,DoCheck {

  cedula_ruc:string;

  constructor(private _authService:AuthService) { }

  ngOnInit() {
    this.cedula_ruc=localStorage.getItem('nombreUsuario');
    //console.log(localStorage.getItem('nombreUsuario'));
  }

  ngDoCheck(){
    this.cedula_ruc=localStorage.getItem('nombreUsuario');
  }


  desLogearse(){
    this._authService.hacerLogOut();
  }

}

import { Component, OnInit, DoCheck, ViewEncapsulation } from '@angular/core';
import {AuthService} from "../../Servicios/auth.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PrincipalComponent implements OnInit,DoCheck {

  nombreOrganizacion:string;

  constructor(private _authService:AuthService) { }

  ngOnInit() {
    this.nombreOrganizacion=localStorage.getItem('nombreOrganizacion');
    //console.log(localStorage.getItem('nombreUsuario'));
  }

  ngDoCheck(){
    this.nombreOrganizacion=localStorage.getItem('nombreOrganizacion');
  }


  desLogearse(){
    this._authService.hacerLogOut();
  }

}

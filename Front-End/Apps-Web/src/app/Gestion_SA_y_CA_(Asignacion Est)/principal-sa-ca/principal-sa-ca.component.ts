import {Component, DoCheck, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../Gestion_Usuarios/Servicios/auth.service";

@Component({
  selector: 'app-principal-sa-ca',
  templateUrl: './principal-sa-ca.component.html',
  styleUrls: ['./principal-sa-ca.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PrincipalSaCaComponent implements OnInit, DoCheck {

  nombreTerapeuta:string;

  constructor(private _authService:AuthService) {

  }

  ngOnInit() {
    this.nombreTerapeuta=localStorage.getItem('nombreTerapeuta');
  }

  ngDoCheck(){
    this.nombreTerapeuta=localStorage.getItem('nombreTerapeuta');
  }


  desLogearse(){
    this._authService.hacerLogOut();
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthService} from "../../Gestion_Usuarios/Servicios/auth.service";

@Component({
  selector: 'app-principal-juegos',
  templateUrl: './principal-juegos.component.html',
  styleUrls: ['./principal-juegos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PrincipalJuegosComponent implements OnInit {

  nombreEstudiante:string

  constructor(private _authService:AuthService) {

  }

  ngOnInit() {
    this.nombreEstudiante=localStorage.getItem('nombreEstudiante')
  }

  desLogearse(){
    this._authService.hacerLogOut();
  }

}

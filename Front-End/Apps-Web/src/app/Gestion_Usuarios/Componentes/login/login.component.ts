import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  nombreUsuario:string;
  llamadoComponentePrincipal:boolean;
  ocultarLogin=true;

  constructor() { }

  ngOnInit() {
  }

  ingresarUsuario(){
    localStorage.setItem('nombreUsuario',this.nombreUsuario);
    this.llamadoComponentePrincipal=true;
    this.ocultarLogin=false;
    //console.log(localStorage.getItem('nombreUsuario'));
  }
}

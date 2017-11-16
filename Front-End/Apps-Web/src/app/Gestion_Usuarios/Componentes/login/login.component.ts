import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  usersSeleccionado:string;
  tipoUsers = [{id:1,rol:'Administrador' }, {id:2, rol:'Terapeuta' },  {id:3,rol:'Estudiante' } ];

  nombreUsuario:string;
  llamadoComponentePrincipal:boolean;
  ocultarLogin=true;

  constructor() {

  }

  ngOnInit() {

  }

  ingresarUsuario(){
    localStorage.setItem('nombreUsuario',this.nombreUsuario);
    //console.log(localStorage.getItem('usersSeleccionado'));

    this.llamadoComponentePrincipal=true;
    this.ocultarLogin=false;

  }

  onChange(userSelec){
    console.log(!userSelec.localeCompare("Administrador"));
    if(!userSelec.localeCompare("Administrador")){
      console.log("Es administrador");
    }else if (!userSelec.localeCompare("Terapeuta")){
      console.log("Es tera");
    }else {
      console.log("Es estu");
    }

  }
}

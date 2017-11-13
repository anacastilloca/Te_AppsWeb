import { Component, OnInit, DoCheck, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PrincipalComponent implements OnInit,DoCheck {

  nombreUsurio:string;

  constructor() { }

  ngOnInit() {
    this.nombreUsurio=localStorage.getItem('nombreUsuario');
    //console.log(localStorage.getItem('nombreUsuario'));
  }

  ngDoCheck(){
    this.nombreUsurio=localStorage.getItem('nombreUsuario');
  }

}

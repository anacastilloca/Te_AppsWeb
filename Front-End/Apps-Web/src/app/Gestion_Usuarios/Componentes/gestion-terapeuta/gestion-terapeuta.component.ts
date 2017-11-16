import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TerapeutaClass} from "../../Modelos/Terapeuta/TerapeutaClass";
import {ActivatedRoute, Router} from "@angular/router";
import {TerapeutaService} from "../../Servicios/terapeuta.service";

@Component({
  selector: 'app-gestion-terapeuta',
  templateUrl: './gestion-terapeuta.component.html',
  styleUrls: ['./gestion-terapeuta.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GestionTerapeutaComponent implements OnInit {


  terapeuta:TerapeutaClass;

  terapeutas=new Array(1);

  constructor(private _route:ActivatedRoute,private _router:Router) {
    this.terapeuta= new TerapeutaClass("");
  }

  ngOnInit() {

  }

}

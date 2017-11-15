import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-gestion-terapeuta',
  templateUrl: './gestion-terapeuta.component.html',
  styleUrls: ['./gestion-terapeuta.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GestionTerapeutaComponent implements OnInit {
  terapeutas=new Array(1);
  constructor() { }

  ngOnInit() {
  }

}

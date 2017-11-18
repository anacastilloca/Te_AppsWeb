import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TerapeutaClass} from "../../../../Modelos/Terapeuta/TerapeutaClass";
import {TerapeutaService} from "../../../../Servicios/terapeuta.service";

@Component({
  selector: 'app-editar-pop-up',
  templateUrl: './editar-pop-up.component.html',
  styleUrls: ['./editar-pop-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditarPopUpComponent implements OnInit {

  terapeuta:TerapeutaClass;
  @Input() idTerapeuta:number;


  constructor(private _terapeutaService:TerapeutaService) {
    this.terapeuta=new TerapeutaClass("");
  }

  ngOnInit() {
    this._terapeutaService.buscarUnoPorId(this.idTerapeuta)
      .subscribe(
        (terapeuta:TerapeutaClass)=>{
          terapeuta.editar = false;
          console.log(terapeuta)
          this.terapeuta=terapeuta;
        },
        error=>{
          console.log("Error: ",error)
        }
      )
  }

}

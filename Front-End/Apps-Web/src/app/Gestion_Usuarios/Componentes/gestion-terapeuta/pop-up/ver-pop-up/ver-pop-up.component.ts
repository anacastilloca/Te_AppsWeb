import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TerapeutaClass} from "../../../../Modelos/Terapeuta/TerapeutaClass";
import {TerapeutaService} from "../../../../Servicios/terapeuta.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-ver-pop-up',
  templateUrl: './ver-pop-up.component.html',
  styleUrls: ['./ver-pop-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VerPopUpComponent implements OnInit {

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

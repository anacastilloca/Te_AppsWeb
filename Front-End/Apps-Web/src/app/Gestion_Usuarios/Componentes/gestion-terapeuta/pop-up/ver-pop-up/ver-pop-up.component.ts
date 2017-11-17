import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TerapeutaClass} from "../../../../Modelos/Terapeuta/TerapeutaClass";
import {TerapeutaService} from "../../../../Servicios/terapeuta.service";

@Component({
  selector: 'app-ver-pop-up',
  templateUrl: './ver-pop-up.component.html',
  styleUrls: ['./ver-pop-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VerPopUpComponent implements OnInit {

  @Input() terapeuta:TerapeutaClass;
  @Input() terapeutas:TerapeutaClass[];
  @Input() idTerapeuta:number;

  constructor(private _terapeutaService:TerapeutaService) { }

  ngOnInit() {
    this._terapeutaService.buscarUnoPorId(this.idTerapeuta)
      .subscribe(
        (terapeutas:TerapeutaClass[]) => {
          this.terapeutas = terapeutas.map(
            (terapeuta:TerapeutaClass)=>{
              terapeuta.editar = false;
              return terapeuta;
            }
          );
        },
        error=>{
          console.log("Error: ",error)
        }
      )
  }

}

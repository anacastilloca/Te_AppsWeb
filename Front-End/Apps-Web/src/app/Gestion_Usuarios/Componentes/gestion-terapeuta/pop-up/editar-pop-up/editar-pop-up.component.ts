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

  @Input() terapeuta:TerapeutaClass;

  constructor(private _terapeutaService:TerapeutaService) {
    this.terapeuta=new TerapeutaClass("");
  }

  ngOnInit() {

  }

  actualizarTerapeuta(terapeuta:TerapeutaClass,cedula?: string,
                      nombre?: string, correo?: string,
                      contrasenia?: string,direccion?: string,
                      celular?: number,){
    terapeuta.cedula=cedula;
    terapeuta.nombre=nombre;
    terapeuta.correo=correo;
    terapeuta.contrasenia=contrasenia;
    terapeuta.direccion=direccion;
    terapeuta.celular=celular;

    this._terapeutaService.editarTerapeuta(terapeuta).
    subscribe(
      (terapeutaEditado:TerapeutaClass)=>{
        this.terapeuta.cedula=cedula;
        this.terapeuta.nombre=nombre;
        this.terapeuta.correo=correo;
        this.terapeuta.contrasenia=contrasenia;
        this.terapeuta.direccion=direccion;
        this.terapeuta.celular=celular;
        this.terapeuta.editar=!this.terapeuta.editar;
      },
      error =>{
        console.log("No se pudo editar",error)
      }
    )

  }

}

import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {SecuenaAccionesClass} from "../../../../Modelos/SA/SecuenaAccionesClass";
import {SecueniaAccionesService} from "../../../../Servicios/secuenia-acciones.service";

@Component({
  selector: 'app-editar-sa',
  templateUrl: './editar-sa.component.html',
  styleUrls: ['./editar-sa.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditarSaComponent implements OnInit {

  @Input() secuenciaAcciones:SecuenaAccionesClass;

  constructor(private _secuenciaAccionesService:SecueniaAccionesService) {
    this.secuenciaAcciones=new SecuenaAccionesClass("");
  }

  ngOnInit() {
  }

  actualizarSecuenciaAcciones(secuenciaAcciones:SecuenaAccionesClass,nombre?: string, imagen1?: string,
                              imagen2?: string,imagen3?: string,imagen4?: string,imagen5?: string,imagen6?: string){
    secuenciaAcciones.nombre=nombre;
    secuenciaAcciones.imagen1=imagen1;
    secuenciaAcciones.imagen2=imagen2;
    secuenciaAcciones.imagen3=imagen3;
    secuenciaAcciones.imagen4=imagen4;
    secuenciaAcciones.imagen5=imagen5;
    secuenciaAcciones.imagen6=imagen6;

    this._secuenciaAccionesService.editarSecuenciAcciones(secuenciaAcciones).
    subscribe(
      (secuenciaAccionesEditado:SecuenaAccionesClass)=>{
        this.secuenciaAcciones.nombre=nombre;
        this.secuenciaAcciones.imagen1=imagen1;
        this.secuenciaAcciones.imagen2=imagen2;
        this.secuenciaAcciones.imagen3=imagen3;
        this.secuenciaAcciones.imagen4=imagen4;
        this.secuenciaAcciones.imagen5=imagen5;
        this.secuenciaAcciones.imagen6=imagen6;
        this.secuenciaAcciones.editar=!this.secuenciaAcciones.editar;
      },
      error =>{
        console.log("No se pudo editar",error)
      }
    )

  }

}

import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ComunicacionAlternativaClass} from "../../../../Modelos/CA/ComunicacionAlternativaClass";
import {ComunicacionAlternativaService} from "../../../../Servicios/comunicacion-alternativa.service";

@Component({
  selector: 'app-editar-ca',
  templateUrl: './editar-ca.component.html',
  styleUrls: ['./editar-ca.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditarCaComponent implements OnInit {

  @Input() comunicacionAlternativa:ComunicacionAlternativaClass;

  constructor(private _comunicacionAlternativaService:ComunicacionAlternativaService) {
    this.comunicacionAlternativa=new ComunicacionAlternativaClass("");
  }

  ngOnInit() {
  }

  actualizarComunicacionAlternativa(comunicacionAlternativa:ComunicacionAlternativaClass,nombre?: string, imagen1?: string,
                              imagen2?: string,imagen3?: string,imagen4?: string,imagen5?: string,imagen6?: string,imagen7?: string,imagen8?: string){
    comunicacionAlternativa.nombre=nombre;
    comunicacionAlternativa.imagen1=imagen1;
    comunicacionAlternativa.imagen2=imagen2;
    comunicacionAlternativa.imagen3=imagen3;
    comunicacionAlternativa.imagen4=imagen4;
    comunicacionAlternativa.imagen5=imagen5;
    comunicacionAlternativa.imagen6=imagen6;
    comunicacionAlternativa.imagen7=imagen7;
    comunicacionAlternativa.imagen8=imagen8;

    this._comunicacionAlternativaService.editarComunicacionAlternativa(comunicacionAlternativa).
    subscribe(
      (comunicacionAlternativaEditado:ComunicacionAlternativaClass)=>{
        this.comunicacionAlternativa.nombre=nombre;
        this.comunicacionAlternativa.imagen1=imagen1;
        this.comunicacionAlternativa.imagen2=imagen2;
        this.comunicacionAlternativa.imagen3=imagen3;
        this.comunicacionAlternativa.imagen4=imagen4;
        this.comunicacionAlternativa.imagen5=imagen5;
        this.comunicacionAlternativa.imagen6=imagen6;
        this.comunicacionAlternativa.imagen7=imagen7;
        this.comunicacionAlternativa.imagen8=imagen8;
        this.comunicacionAlternativa.editar=!this.comunicacionAlternativa.editar;
      },
      error =>{
        console.log("No se pudo editar",error)
      }
    )

  }

}

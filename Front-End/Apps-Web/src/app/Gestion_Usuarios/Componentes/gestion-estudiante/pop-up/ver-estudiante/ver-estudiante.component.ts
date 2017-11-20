import {Component, DoCheck, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {EstudianteClass} from "../../../../Modelos/Estudiante/EstudianteClass";
import {TerapeutaService} from "../../../../Servicios/terapeuta.service";
import {TerapeutaClass} from "../../../../Modelos/Terapeuta/TerapeutaClass";

@Component({
  selector: 'app-ver-estudiante',
  templateUrl: './ver-estudiante.component.html',
  styleUrls: ['./ver-estudiante.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VerEstudianteComponent implements OnInit, DoCheck {

  @Input() estudiante:EstudianteClass;
  terapeutas:TerapeutaClass[];

  constructor(private _terapeutaServicio:TerapeutaService, private _terapeutaService:TerapeutaService) {
   this.estudiante= new EstudianteClass("");
    //this.nombreTerapeuta=localStorage.getItem('nombreTerapeuta');

  }

  ngOnInit() {
    this._terapeutaService.buscarVariosPorOrganizacion(localStorage.getItem('idOrganizacionLog'))
      .subscribe(
        (terapeutas:TerapeutaClass[]) => {
          //localStorage.setItem('terapeutas',JSON.stringify(terapeutas))
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

  ngDoCheck(){
    //console.log(this.estudiante.idTerapeuta)

  }


}

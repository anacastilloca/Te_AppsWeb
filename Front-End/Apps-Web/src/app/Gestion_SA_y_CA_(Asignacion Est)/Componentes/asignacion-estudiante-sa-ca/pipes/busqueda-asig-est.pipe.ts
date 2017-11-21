import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaAsigEst'
})
export class BusquedaAsigEstPipe implements PipeTransform {

  transform(listElements: any, termBusqueda?: any): any {
    if(termBusqueda === undefined){
      return listElements;
    }
    return listElements.filter(function (listElements) {
      return listElements.nombre.toLowerCase().includes(termBusqueda.toLowerCase())
    })
  }

}

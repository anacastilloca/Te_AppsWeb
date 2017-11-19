import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaEstudiante'
})
export class BusquedaEstudiantePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

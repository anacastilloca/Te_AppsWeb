import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaCa'
})
export class BusquedaCaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

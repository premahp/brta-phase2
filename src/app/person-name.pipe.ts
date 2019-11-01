import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personName'
})
export class PersonNamePipe implements PipeTransform {

  transform(value: any, exponent?: number): any {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}

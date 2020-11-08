import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class UpperPipe implements PipeTransform {

    transform(value: any): string  {

        return value.toUpperCase;
    }

}

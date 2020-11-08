import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class Upper implements PipeTransform {

    transform(value: any): string  {

        return value.toUpperCase;
    }

}

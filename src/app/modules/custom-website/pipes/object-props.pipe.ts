import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'objectProps'
})
export class ObjectPropsPipe implements PipeTransform {

  transform(value: object): string[] {
    console.log(value);
    if (!value) {
      return [];
    }

    return Object.keys(value);
  }

}

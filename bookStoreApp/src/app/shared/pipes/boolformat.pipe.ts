import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolformat'
})
export class BoolformatPipe implements PipeTransform {

  transform(value: unknown): unknown {
    // console.log(value)
    return value ? 'yes published !' : 'nope not onthe market';
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    let temp = '';
    for( let i =1; i<= args; i++){
      temp +=  value + ' ';
    }
    return temp ;
  }

}

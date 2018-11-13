import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(arr: any[], term2: string): any {
    if (term2 == null) {
      return arr;
    }
    return arr.filter(el => {
      if (el.tara.includes(term2)) {
        return el;
      }
      return null;
    });
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], term: string, term2: string): any {

    if (term == null) {
      return arr;
    }
    return arr.filter(el => {
      if (el.title.toUpperCase().includes(term)) {
        return el;
      }
      if (el.tara.includes(term2)) {
        return el;
      }
      return null;
    });
  }
}

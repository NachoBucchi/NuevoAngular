import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPerLetter',
})
export class FilterPerLetterPipe implements PipeTransform {

  transform(items: any[], value: string): any {
    if (items.length === 0 || !items) {
      return items;
    }

    return items.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(items: any[], text: string): any[] {
    if (!items) { return []; }
    if (!text) { return items; }
    text = text.toLowerCase();
    return items.filter(x => {
      return x.toLowerCase().includes(text);
    });
  }

}

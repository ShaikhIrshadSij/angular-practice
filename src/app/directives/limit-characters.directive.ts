import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appLimitCharacters]'
})
export class LimitCharactersDirective {

  @Input() sliceLength: number = 50

  constructor(el: ElementRef) {
    setTimeout(() => {
      const dataLength = el.nativeElement.innerText?.length
      if (dataLength > 50) {
        el.nativeElement.innerText = el.nativeElement.innerText.slice(0, this.sliceLength - 3) + '...'
      }
    }, 50)
  }

}

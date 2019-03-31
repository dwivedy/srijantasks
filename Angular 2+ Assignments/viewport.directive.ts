import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appViewport]'
})
export class ViewportDirective {

  constructor(el: ElementRef) {

    const bounding = el.nativeElement.getBoundingClientRect();
    let top = bounding.top >= 0;
    let right = bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
    let left =  bounding.left >= 0;
    let bottom = bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight);

//  element in viewport
    if (top && right && left && bottom){

      console.log(JSON.stringify({
        inview: true,
        isClipped: true,
        parts: { top: top, right: right, left: left, bottom: bottom }
        }));

    } else {
      // element not in viewport
      console.log(JSON.stringify({
        inview: false,
        isClipped: false,
        parts: { top: top, right: right, left: left, bottom: bottom }
        }));

    }
  }

}

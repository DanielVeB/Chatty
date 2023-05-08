import { Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextareaAutoresize]'
})
export class ResizableTextAreaDirective {

  constructor(private elementRef: ElementRef) {}

  resize() {

    const textarea = this.elementRef.nativeElement;
    const currentRows = textarea.value.split('\n').length;
    const newRows = Math.min(currentRows + 1, 10);

    textarea.rows = newRows;
    console.log('updated row size: ' + this.elementRef.nativeElement.rows)
  }
  
  @HostListener(':input')
  onInput() {
    this.resize();
  }
}

import { Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextareaAutoresize]'
})
export class ResizableTextAreaDirective {

  constructor(private elementRef: ElementRef) {}

  resize() {
  
    const textarea = this.elementRef.nativeElement;
    if(textarea.value == null){
      textarea.rows = 2
      return
    } 
   
    const currentRows = textarea.value.split('\n').length;
    const newRows = Math.min(currentRows + 1, 10);

    textarea.rows = newRows;
  }

  clear() {
    const textarea = this.elementRef.nativeElement;
    textarea.rows = 2;

  }
  
  @HostListener('input', ['$event'])
  onInput(event: Event) {
    this.resize();
  }
  
}

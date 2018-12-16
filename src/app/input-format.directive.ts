import { Directive,HostListener,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('format') format;
  constructor(private el: ElementRef) { }
  @HostListener('onBlur') onBlur(){
    console.log("Event clicked");
    let value:string = this.el.nativeElement.value;
    if(this.format=='lowercase')
    this.el.nativeElement.value= value.toLowerCase();
    else 
    this.el.nativeElement.value= value.toUpperCase();
  }

}

import {Directive, HostBinding, HostListener, ElementRef, Renderer, Input, Output} from '@angular/core';
import {formatSize} from "@angular-devkit/build-angular/src/angular-cli-files/utilities/stats";
import {setStyle} from "@angular/core/src/render3/styling/class_and_style_bindings";

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective {
  constructor(private el: ElementRef){

  }
  @Input('font_size')
  set font_size(value){
    this.biggerSize = value ;
  }

  @HostBinding('style.font-size.px') biggerSize;

  @HostListener('dblclick', ['$event']) makeBigger(event){
    this.biggerSize =  parseInt(this.biggerSize) + 2 ;
  }

}

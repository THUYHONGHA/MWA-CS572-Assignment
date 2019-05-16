import {Directive, HostBinding, HostListener, OnInit, Input} from "@angular/core";

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective implements OnInit {
  @Input() isVisible: boolean;

  @HostBinding('style.visibility') visibility;

  ngOnInit(): void {
    this.visibility = this.isVisible? 'visible': 'hidden';

  }

}

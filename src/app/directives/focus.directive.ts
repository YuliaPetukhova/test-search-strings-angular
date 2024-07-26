import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appFocus]',
  standalone: true
})

export class FocusDirective {
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement): void {
    const clickInside = this.elementRef.nativeElement.contains(targetElement)
      || document.getElementsByClassName('cdk-overlay-container')[0].contains(targetElement);
    const clickCloseBtn: boolean = targetElement.classList.contains('cancel-search-btn');

    if (!clickInside || clickCloseBtn) {
      this.clickOutside.emit();
    }
  }
}

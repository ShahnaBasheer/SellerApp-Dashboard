import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})

export class ClickOutsideDirective {

  @Input() appClickOutside!: () => void;

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Check if the click is outside of the element
    if (!this.el.nativeElement.contains(target)) {
      if (this.appClickOutside) {
        this.appClickOutside(); // Trigger the provided method
      }
    }
  }


}

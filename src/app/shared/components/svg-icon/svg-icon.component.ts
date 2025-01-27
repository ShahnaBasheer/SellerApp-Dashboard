import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  imports: [],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.css'
})

export class SvgIconComponent {
  @Input({ required: true }) width!: string;
  @Input({ required: true }) height!: string;
  @Input() svgClass: string = '';
  sanitizedPath: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  @Input() set path(value: string) {
    this.sanitizedPath = this.sanitizer.bypassSecurityTrustHtml(value);
  }
}

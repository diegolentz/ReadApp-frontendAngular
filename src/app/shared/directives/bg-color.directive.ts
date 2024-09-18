import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgColor]',
  standalone: true
})
export class BgColorDirective implements OnInit{

  @Input() backgroundColor: string = '--color-header';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Solo se ejecuta en el navegador
      const rootStyleVariable = getComputedStyle(document.documentElement).getPropertyValue(this.backgroundColor);

      this.renderer.setStyle(this.el.nativeElement, 'background-color', rootStyleVariable);
    }
  }
}


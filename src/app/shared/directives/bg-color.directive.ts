import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgColor]',
  standalone: true
})
export class BgColorDirective implements OnInit{

  @Input() backgroundColor: string = '--color-header';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Al inicializar la directiva, aplica el color de fondo
  ngOnInit() {
    this.applyBackgroundColor();
  }

  /// Método para aplicar el background-color desde la variable CSS
  private applyBackgroundColor() {
    // Obtén el valor de la variable CSS desde el :root
    const backgroundColorValue = getComputedStyle(document.documentElement)
      .getPropertyValue(this.backgroundColor).trim();
    
    // Verifica si el valor no está vacío y aplícalo
    if (backgroundColorValue) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', backgroundColorValue);
    } else {
      console.warn(`No se encontró el valor para la variable CSS ${this.backgroundColor}`);
    }
  }

}


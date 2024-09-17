import { Directive, ElementRef, Input, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverBoxshadow]',
  standalone: true
})
export class HoverBoxshadowDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
//   constructor(
//     private elementRef:ElementRef, 
//     private renderer:Renderer2
//     ) { }
    
//     ngOnInit(){
//       this.color = this.defaultColor;
//     }


//     @Input() defaultColor:string = '';
//     @Input() highlight: string= 'lime';

//     @HostBinding('style.color') color:string = this.defaultColor;


//     @HostListener('mouseenter') mouseover(){
//       this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');

//       this.color=this.highlight;
//     }

//     @HostListener('mouseleave') mouseleave(){
//       this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
//       this.color=this.defaultColor;
//     }
}

import { Component} from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [SvgIconComponent, NgStyle],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css',
})
export class EncabezadoComponent {
}

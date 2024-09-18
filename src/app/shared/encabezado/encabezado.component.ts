import { Component} from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [SvgIconComponent, NgStyle, RouterLink],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css',
})
export class EncabezadoComponent {
}

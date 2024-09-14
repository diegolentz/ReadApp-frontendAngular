import { Component, Input } from '@angular/core';
import { Option } from '../dropdown-menu/dropdown-menu.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { NgStyle } from '@angular/common';
import { HoverBoxshadowDirective } from '../directives/hover-boxshadow.directive';
@Component({
  selector: 'app-option',
  standalone: true,
  imports: [SvgIconComponent, NgStyle, HoverBoxshadowDirective],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {
  @Input() option!:Option
}


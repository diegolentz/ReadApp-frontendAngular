import { Component, Input } from '@angular/core';
import { Option } from '../dropdown-menu/dropdown-menu.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [SvgIconComponent, NgStyle],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})

export class OptionComponent {
  @Input() option!:Option

  hoverColorVar: string = ''
}


import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ShorcutMyProfileComponent } from '../shorcut-my-profile/shorcut-my-profile.component';
import { OptionComponent } from '../option/option.component';
import { RouterLink } from '@angular/router';
import { HoverBoxshadowDirective } from '../directives/hover-boxshadow.directive';
import { BgColorDirective } from '../directives/bg-color.directive';
@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [ShorcutMyProfileComponent, OptionComponent, NgFor, NgIf, RouterLink, HoverBoxshadowDirective, BgColorDirective],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {
  @Input() show!:boolean

  optionLabels = ['my-profile', 'my-recommendations', 'search-books', 'log-out']
  svgs = ['profile.svg', 'recomendation.svg', 'book.svg', 'log-out.svg']
  colorDefault = 'white'
  options_shortcutMenu = this.optionLabels.map((label, i) => new Option(label, this.svgs[i], this.colorDefault, this.colorDefault));
}

export class Option{
  constructor(
    public label:string,
    public iconPath:string,
    public textColor:string,
    public iconColor:string
  ){}
}


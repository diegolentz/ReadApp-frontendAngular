import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ShorcutMyProfileComponent } from '../shorcut-my-profile/shorcut-my-profile.component';
import { OptionComponent } from '../option/option.component';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [ShorcutMyProfileComponent, OptionComponent, NgFor, NgIf],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {
  @Input() show!:boolean

  optionLabels = ['My profile', 'My recommendations', 'Search books', 'Log out']
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


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

  options_shortcutMenu = [
    new Option('profile.svg','My profile', 'white', 'white'),
    new Option('recomendation.svg','My recommendations', 'white', 'white'),
    new Option('book.svg','Search books', 'white', 'white'),
    new Option('log-out.svg','Log out', 'white', 'white'),
  ]
}


export class Option{
  constructor(
    public iconPath:string,
    public name:string,
    public iconColor:string,
    public textColor:string
  ){}
}


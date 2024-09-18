import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ShorcutMyProfileComponent } from '../shorcut-my-profile/shorcut-my-profile.component';
import { RouterLink } from '@angular/router';
import { HoverBoxshadowDirective } from '../directives/hover-boxshadow.directive';
import { BgColorDirective } from '../directives/bg-color.directive';
@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [ShorcutMyProfileComponent, NgFor, NgIf, RouterLink, HoverBoxshadowDirective, BgColorDirective],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {
  @Input() show!:boolean
}

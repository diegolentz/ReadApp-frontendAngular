import { Component } from '@angular/core';
import { MinimumUserIdentificationComponent } from '../minimum-user-identification/minimum-user-identification.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { SvgIconComponent } from 'angular-svg-icon';
@Component({
  selector: 'app-shorcut-my-profile',
  standalone: true,
  imports: [MinimumUserIdentificationComponent, DropdownMenuComponent, SvgIconComponent],
  templateUrl: './shorcut-my-profile.component.html',
  styleUrl: './shorcut-my-profile.component.css'
})
export class ShorcutMyProfileComponent {
  displayShorcut = true //False -> test. True -> debug
  users = [
    new User('','Phillipe Petank','ElPhilly95')
  ]
}

export class User{
  constructor(
    public photo:string,
    public name:string,
    public id:string,
  ){}
}
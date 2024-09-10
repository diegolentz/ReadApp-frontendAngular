import { Component } from '@angular/core';
import { MinimumUserIdentificationComponent } from '../minimum-user-identification/minimum-user-identification.component';

@Component({
  selector: 'app-shorcut-my-profile',
  standalone: true,
  imports: [MinimumUserIdentificationComponent],
  templateUrl: './shorcut-my-profile.component.html',
  styleUrl: './shorcut-my-profile.component.css'
})
export class ShorcutMyProfileComponent {
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
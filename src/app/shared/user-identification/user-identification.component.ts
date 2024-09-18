import { Component, Input } from '@angular/core';
import { User } from '../shorcut-my-profile/shorcut-my-profile.component';
@Component({
  selector: 'app-user-identification',
  standalone: true,
  imports: [],
  templateUrl: './user-identification.component.html',
  styleUrl: './user-identification.component.css'
})

export class UserIdentificationComponent {
  @Input() user!:User 
}
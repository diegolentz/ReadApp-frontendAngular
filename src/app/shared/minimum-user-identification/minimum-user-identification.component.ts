import { Component, Input } from '@angular/core';
import { User } from '../shorcut-my-profile/shorcut-my-profile.component';
@Component({
  selector: 'app-min-user-identification',
  standalone: true,
  imports: [],
  templateUrl: './minimum-user-identification.component.html',
  styleUrl: './minimum-user-identification.component.css'
})

export class MinimumUserIdentificationComponent {
  @Input() user!:User 
}
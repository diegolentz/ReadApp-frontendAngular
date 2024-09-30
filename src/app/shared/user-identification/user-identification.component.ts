import { Component, Input } from '@angular/core';
import { User } from '../../../domain/user';
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
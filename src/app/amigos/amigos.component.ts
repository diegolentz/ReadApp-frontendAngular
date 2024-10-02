import { Component, Input } from '@angular/core';
import { User } from '../../domain/user';
@Component({
  selector: 'app-amigos',
  standalone: true,
  imports: [],
  templateUrl: './amigos.component.html',
  styleUrl: './amigos.component.css'
})

export class AmigosComponent {
  @Input() userFriend!:User
}

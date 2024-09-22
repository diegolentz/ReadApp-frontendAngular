import { Component, Input } from '@angular/core';
import { Friend } from '../../domain/friend';
@Component({
  selector: 'app-amigos',
  standalone: true,
  imports: [],
  templateUrl: './amigos.component.html',
  styleUrl: './amigos.component.css'
})

export class AmigosComponent {
  @Input() friend!:Friend
}

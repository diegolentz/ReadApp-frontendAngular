import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmigosComponent } from "./amigos/amigos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AmigosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'readapp-2024-grupo-9';
}


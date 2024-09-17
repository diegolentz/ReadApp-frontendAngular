import { Component, Input} from '@angular/core';
import { Option } from '../shared/dropdown-menu/dropdown-menu.component';
import { NgFor } from '@angular/common';
import { OptionComponent } from '../shared/option/option.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-panel-perfil',
  standalone: true,
  imports: [NgFor,OptionComponent, RouterLink],
  templateUrl: './panel-perfil.component.html',
  styleUrl: './panel-perfil.component.css'
})
export class PanelPerfilComponent {
  @Input() opciones!: Option[];
}

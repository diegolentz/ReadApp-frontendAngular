import { Component, Input} from '@angular/core';
import { Option } from '../shared/shorcut-my-profile/shorcut-my-profile.component';
import { NgFor } from '@angular/common';
import { OptionComponent } from '../shared/option/option.component';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-panel-perfil',
  standalone: true,
  imports: [NgFor,OptionComponent, RouterLink],
  templateUrl: './panel-perfil.component.html',
  styleUrl: './panel-perfil.component.css'
})
export class PanelPerfilComponent {
  @Input() opciones!: Option[];
  constructor(private router:Router, private route:ActivatedRoute){}
  
  goTo(option:string){
    this.router.navigate([option], {relativeTo:this.route})
  }
}

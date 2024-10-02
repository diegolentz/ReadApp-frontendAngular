import { Component} from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-panel-perfil',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './panel-perfil.component.html',
  styleUrl: './panel-perfil.component.css'
})
export class PanelPerfilComponent {
  constructor(private router:Router, private route:ActivatedRoute){}
  
  goTo(option:string){
    this.router.navigate([option], {relativeTo:this.route})
  }
  opcionTitulos = ['Information', 'Friends', 'Books readed', 'Books to read','Recommendations to value']
  svgs = ['information.svg',
          'amigos.svg',
          'librosLeidos.svg',
          'librosALeer.svg',
          'recomendacionesAValorar.svg']
  colorDefault = ''
  colorSvg = ['#208544','#203885','#822085','#33d2c8','ff0000']
  path = ['information', 'friends', 'books-readed', 'books-to-read','recommendations-to-value']

  options = this.opcionTitulos.map((titulo, i) => new Option( titulo,this.svgs[i],  this.colorDefault,this.colorSvg[i],this.path[i]));
}

export class Option{
  constructor(
    public label:string,
    public iconPath:string,
    public textColor:string,
    public iconColor:string,
    public path : string
  ){}
}
import { Component, Input } from '@angular/core';
import { Recomendacion } from '../../home/home.component';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recomendacion',
  standalone: true,
  imports: [NgFor],
  templateUrl: './recomendacion.component.html',
  styleUrl: './recomendacion.component.css'
})
export class RecomendacionComponent{
    //Late init
    @Input() recomendacion!:Recomendacion
    constructor(private router:Router, private route:ActivatedRoute){}
  
  goTo(option:string){
    this.router.navigate([option])
  }
}

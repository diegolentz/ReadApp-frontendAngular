import { Component, Input } from '@angular/core';
import { Recomendacion } from '../../home/home.component';
import { NgFor } from '@angular/common';
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
}

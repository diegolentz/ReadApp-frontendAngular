import { Component, Input, OnInit } from '@angular/core';
import { UserIdentificationComponent } from '../user-identification/user-identification.component';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BgColorDirective } from '../directives/bg-color.directive';
import { HoverBoxshadowDirective } from '../directives/hover-boxshadow.directive';
import { User } from '../../../domain/user';

@Component({
  selector: 'app-shorcut-my-profile',
  standalone: true,
  imports: [UserIdentificationComponent, NgFor, RouterLink, BgColorDirective, HoverBoxshadowDirective, NgIf],
  templateUrl: './shorcut-my-profile.component.html',
  styleUrl: './shorcut-my-profile.component.css'
})
export class ShorcutMyProfileComponent implements OnInit{

  @Input() show!:boolean
  ngOnInit(): void {
    this.displayShorcut = false //False -> test. True -> debug
  }
  displayShorcut!:boolean
  @Input() user!:User;

  colorDefault = 'white'
  options = [
    new Option('My profile', 'profile.svg', this.colorDefault, this.colorDefault, 'my-profile'),
    new Option('My recommendations', 'recomendation.svg', this.colorDefault, this.colorDefault, 'my-recommendations'),
    new Option('Search books', 'book.svg', this.colorDefault, this.colorDefault, 'search-books'),
    new Option('Log out', 'log-out.svg', this.colorDefault, this.colorDefault, 'log-out')
    
  ]
  changeDisplay(){
    this.displayShorcut = !this.displayShorcut
  }
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
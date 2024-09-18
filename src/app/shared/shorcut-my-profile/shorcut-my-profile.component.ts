import { Component, OnInit } from '@angular/core';
import { UserIdentificationComponent } from '../user-identification/user-identification.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { AmigosComponent } from '../../amigos/amigos.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OptionComponent } from '../option/option.component';
import { BgColorDirective } from '../directives/bg-color.directive';
import { HoverBoxshadowDirective } from '../directives/hover-boxshadow.directive';

@Component({
  selector: 'app-shorcut-my-profile',
  standalone: true,
  imports: [UserIdentificationComponent, DropdownMenuComponent,OptionComponent, SvgIconComponent, NgFor, RouterLink, BgColorDirective, HoverBoxshadowDirective],
  templateUrl: './shorcut-my-profile.component.html',
  styleUrl: './shorcut-my-profile.component.css'
})
export class ShorcutMyProfileComponent implements OnInit{
  ngOnInit(): void {
    this.displayShorcut = false //False -> test. True -> debug
  }
  displayShorcut!:boolean
  user = new User('profile-pic.jpg','Phillipe Petank','@'+'phillie95')

  optionLabels = ['My profile', 'My recommendations', 'Search books', 'Log out']
  svgs = ['profile.svg', 'recomendation.svg', 'book.svg', 'log-out.svg']
  colorDefault = 'white'
  path = ['my-profile', 'my-recommendations', 'search-books', 'log-out']
  options_shortcutMenu = this.optionLabels.map((label, i) => new Option(label, this.svgs[i], this.colorDefault, this.colorDefault, this.path[i]));
  changeDisplay(){
    this.displayShorcut = !this.displayShorcut
  }
}

export class User{
  constructor(
    public photo:string,
    public name:string,
    public id:string,
  ){}
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
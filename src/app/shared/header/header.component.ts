import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { ShorcutMyProfileComponent } from '../shorcut-my-profile/shorcut-my-profile.component';

import { ServiceUser } from '../../../service/service-user.service';
import { UserBasic } from '../../../domain/tmpUser';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [EncabezadoComponent , ShorcutMyProfileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user:UserBasic = new UserBasic();
  constructor(
    private userService:ServiceUser
  ){}
  
  async ngOnInit() {
    this.user = await this.userService.getUserBasicByID(1)
    console.log(this.user)
  }
}



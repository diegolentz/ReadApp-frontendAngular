import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { ShorcutMyProfileComponent } from '../shorcut-my-profile/shorcut-my-profile.component';
import { User } from '../../../domain/user';
import { ServiceUser } from '../../../service/service-user.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [EncabezadoComponent , ShorcutMyProfileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user:User = new User()
  constructor(
    private userService:ServiceUser
  ){}
  
  async ngOnInit() {
    this.user = await this.userService.getUserByID(1)
  }
}



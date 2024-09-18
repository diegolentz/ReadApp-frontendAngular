import { Component, Input } from '@angular/core';
import { Option } from '../shorcut-my-profile/shorcut-my-profile.component';
import { SvgIconComponent } from 'angular-svg-icon';
@Component({
  selector: 'app-option',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {
  @Input() option!:Option
}


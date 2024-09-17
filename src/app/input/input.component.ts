import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})

export class InputComponent {

input = new Input

  inputType(): Tipos {
    if (this.input.textType) {
      return 'Text'
    }
    if (this.input.numberType) {
      return 'Number'
    }
    return 'Date'
  }
}

class Input {

  textType = false
  numberType = false
  dateType = false

  text() { this.textType = true}
  number() { this.numberType = true}
  date() { this.dateType = true}

} 

type Tipos = 'Text' | 'Number' | 'Date'

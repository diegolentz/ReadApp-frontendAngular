import { Component, Input } from '@angular/core';
//importo INPUT

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})

export class InputComponent {
    @Input() inputType: 'text' | 'number' = 'text';  // Input para definir el tipo de input, por defecto es 'text'
    @Input() placeholder: string = '';  // Input opcional para el placeholder
    @Input() value: string | number = '';  // Input opcional para el valor inicial del input 

    gestionarInput(Tipo: any) : void {
      Tipo.gestionarTipo()
    }
}

interface Tipo {
  gestionarTipo(){}
}

//hay que hacer una clase para cada input

class TextForm implements Tipo {
  gestionarTipo() {//aca va lo que haga este input
    }
} 
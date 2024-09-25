import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'] 
})
export class InputComponent implements OnInit {
  @Input() label: string = "";
  @Input() id: string = '';
  @Input() inputType !: string
  @Input() required: boolean = false;

  ngOnInit() {
   
  }
}
  


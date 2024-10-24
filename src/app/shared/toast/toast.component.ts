import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' | 'info' | 'warning' = 'success';
  @Input() duration: number = 5000; 

  isVisible: boolean = false;

  ngOnInit(): void {
    this.showToast();
  }

  showToast(): void {
    this.isVisible = true;
      setTimeout(() => {
        this.closeToast();
      }, this.duration);

  }

  closeToast(): void {
    this.isVisible = false;
  }
}

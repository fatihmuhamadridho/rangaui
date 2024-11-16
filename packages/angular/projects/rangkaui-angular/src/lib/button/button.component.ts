import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rangkaui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = 'Click Me!'; // Default label
  @Input() customClass: string = ''; // Custom CSS class
  @Output() buttonClick = new EventEmitter<void>(); // Event emitter for button click

  handleClick(): void {
    this.buttonClick.emit(); // Emit event on click
  }
}

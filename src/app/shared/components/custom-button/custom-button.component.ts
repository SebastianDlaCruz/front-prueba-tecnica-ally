import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
  @Input({ required: true }) text = "";
  @Input() disable = false;
  @Input({ required: true }) type = "";
}

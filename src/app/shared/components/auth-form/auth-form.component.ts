import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  imports: [],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css'
})
export class AuthFormComponent {
  @Input({ required: true }) title = "";

}

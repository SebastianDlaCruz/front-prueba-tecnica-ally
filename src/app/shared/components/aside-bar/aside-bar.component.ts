import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthHttpService } from '@core/http';

@Component({
  selector: 'app-aside-bar',
  imports: [RouterLink],
  templateUrl: './aside-bar.component.html',
  styleUrl: './aside-bar.component.css'
})
export class AsideBarComponent {
  private readonly authService = inject(AuthHttpService);

  singOut() {
    this.authService.singOut().subscribe({
      next: () => {

      }
    })
  }

}

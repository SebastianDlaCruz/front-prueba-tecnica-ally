import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { deleteTokens, LocalStoreService, Tokens } from '@core/index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-aside-bar',
  imports: [RouterLink],
  templateUrl: './aside-bar.component.html',
  styleUrl: './aside-bar.component.css'
})
export class AsideBarComponent {
  private readonly localStoreService = inject(LocalStoreService);
  private readonly store = inject<Store<Tokens>>(Store);
  private readonly router = inject(Router);
  singOut() {
    this.localStoreService.clearTokens();
    this.store.dispatch(deleteTokens());
    this.router.navigate(['/sing-in']);
  }

}

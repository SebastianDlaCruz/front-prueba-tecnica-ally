import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DashboardsService } from '@feature/dashboards/services/dashboards/dashboards.service';

@Component({
  selector: 'app-selected-country',
  imports: [AsyncPipe],
  templateUrl: './selected-country.component.html',
  styleUrl: './selected-country.component.css'
})
export class SelectedCountryComponent {

  private readonly dashboardsService = inject(DashboardsService);

  data$ = this.dashboardsService.getDataCountry();
}

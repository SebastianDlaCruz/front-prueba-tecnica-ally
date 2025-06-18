import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DashboardsService } from '@feature/dashboards/services/dashboards/dashboards.service';

@Component({
  selector: 'app-available-time-zone',
  imports: [AsyncPipe],
  templateUrl: './available-time-zone.component.html',
  styleUrl: './available-time-zone.component.css'
})
export class AvailableTimeZoneComponent {

  private readonly dashboardsService = inject(DashboardsService);

  data$ = this.dashboardsService.getCities();

  setName(name: string) {
    this.dashboardsService.setNameCountry(name);
  }
}

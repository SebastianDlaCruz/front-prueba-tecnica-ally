import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WeatherHttpService } from '@core/index';
import { DashboardsService } from '@feature/dashboards/services/dashboards/dashboards.service';

@Component({
  selector: 'app-hour',
  imports: [AsyncPipe],
  templateUrl: './hour.component.html',
  styleUrl: './hour.component.css'
})
export class HourComponent {

  private readonly weatherHttp = inject(WeatherHttpService);
  private readonly dashboardsService = inject(DashboardsService);


  data$ = this.dashboardsService.getDataCountry();


}

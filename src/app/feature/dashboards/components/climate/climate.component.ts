import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DashboardsService } from '@feature/dashboards/services/dashboards/dashboards.service';

@Component({
  selector: 'app-climate',
  imports: [AsyncPipe],
  templateUrl: './climate.component.html',
  styleUrl: './climate.component.css'
})
export class ClimateComponent {

  private readonly dashboardsService = inject(DashboardsService);

  data$ = this.dashboardsService.getDataCountry().pipe(

  );

}

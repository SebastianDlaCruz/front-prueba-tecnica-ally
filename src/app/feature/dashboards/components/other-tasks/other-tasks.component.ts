import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DashboardsService } from '@feature/dashboards/services/dashboards/dashboards.service';

@Component({
  selector: 'app-other-tasks',
  imports: [AsyncPipe],
  templateUrl: './other-tasks.component.html',
  styleUrl: './other-tasks.component.css'
})
export class OtherTasksComponent {

  private readonly dashboardService = inject(DashboardsService);

  data$ = this.dashboardService.getTask();

}

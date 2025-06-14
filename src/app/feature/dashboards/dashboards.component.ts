import { Component } from '@angular/core';
import { AsideBarComponent } from '@shared/components/aside-bar/aside-bar.component';
import { AvailableCountriesComponent } from './components/available-countries/available-countries.component';
import { AvailableTimeZoneComponent } from "./components/available-time-zone/available-time-zone.component";
import { ClimateComponent } from "./components/climate/climate.component";
import { HourComponent } from "./components/hour/hour.component";
import { OtherTasksComponent } from './components/other-tasks/other-tasks.component';
import { SelectedCountryComponent } from './components/selected-country/selected-country.component';

@Component({
  selector: 'app-dashboards',
  imports: [AsideBarComponent, ClimateComponent, AvailableCountriesComponent, OtherTasksComponent, SelectedCountryComponent, HourComponent, AvailableTimeZoneComponent, HourComponent, AvailableCountriesComponent],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.css'
})
export class DashboardsComponent {

}

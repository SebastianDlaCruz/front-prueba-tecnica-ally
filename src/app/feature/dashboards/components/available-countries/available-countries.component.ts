import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CountryHttpService } from '@core/index';
import { DashboardsService } from '@feature/dashboards/services/dashboards/dashboards.service';
import { NgIcon, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { flagAr, flagMx, flagPe } from '@ng-icons/flag-icons';
@Component({
  selector: 'app-available-countries',
  imports: [NgIcon, AsyncPipe],
  templateUrl: './available-countries.component.html',
  styleUrl: './available-countries.component.css',
  providers: [provideIcons({ flagAr, flagMx, flagPe }),
  provideNgIconsConfig({
    size: '3.6rem'
  })]
})
export class AvailableCountriesComponent {

  argIcon = flagAr;
  mxIcon = flagMx;
  peIcon = flagPe;

  private readonly countryHttp = inject(CountryHttpService);
  private readonly dashboardsService = inject(DashboardsService)

  countries$ = this.countryHttp.getCountries()


  setDate(name: string, id: number) {
    this.dashboardsService.setNameCountry(name);
    this.dashboardsService.setIdCountry(id);
  }


}

import { inject, Injectable } from '@angular/core';
import { TaskHttpService } from '@core/http/task-http/task-http.service';
import { CountryHttpService, WeatherHttpService } from '@core/index';
import { BehaviorSubject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardsService {

  private nameCountry$ = new BehaviorSubject<string>("Argentina");
  private idCountry$ = new BehaviorSubject<number>(1);

  private readonly weatherHttp = inject(WeatherHttpService);
  private readonly taskHttp = inject(TaskHttpService);
  private readonly countryHttp = inject(CountryHttpService);


  setNameCountry(name: string) {
    this.nameCountry$.next(name);
  }


  setIdCountry(id: number) {
    this.idCountry$.next(id);
  }

  getDataCountry() {
    return this.nameCountry$.pipe(
      switchMap(name => this.weatherHttp.getDataCountry(name)
      )
    )
  }

  getTask() {
    return this.idCountry$.pipe(
      switchMap(id => this.taskHttp.getTask(id))
    )

  }

  getCities() {
    return this.idCountry$.pipe(
      switchMap(id => this.countryHttp.getCities(id))
    )
  }


}

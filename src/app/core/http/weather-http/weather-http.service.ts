import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherHttpService {
  private readonly API = 'http://api.weatherapi.com/v1/current.json';
  private readonly http = inject(HttpClient);

  getDataCountry(country: string) {
    return this.http.get<any>(this.API, {
      params: {
        key: environment.WEATHER_API_KEY,
        q: country
      }
    })
  }
}

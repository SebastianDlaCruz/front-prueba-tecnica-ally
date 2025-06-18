import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseCity, ResponseCountry } from '@core/models/country.model';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CountryHttpService {

  private readonly http = inject(HttpClient);
  private readonly API = `${environment.backend_api}/county`

  getCountries() {
    return this.http.get<ResponseCountry>(`${this.API}`).pipe(
      map(res => res.data)
    )
  }

  getCities(id_county: number) {
    return this.http.get<ResponseCity>(`${this.API}/city/${id_county}`).pipe(
      map(res => res.data)
    )
  }

}

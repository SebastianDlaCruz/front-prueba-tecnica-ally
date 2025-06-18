import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponsePagination } from '@core/models';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersPaginationService {

  private readonly http = inject(HttpClient);
  private readonly API = `${environment.backend_api}/auth`;

  config(event: string) {
    return this.http.get<ResponsePagination>(`${this.API}${event}`)
  }

}

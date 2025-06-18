import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { InputsSingIn, InputsSingUp, ResponseAuth, ResponseHttp, ResponsePagination } from '@core/models';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Auth } from './interfaces/http-services.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService implements Auth {

  private readonly authClient = inject(HttpClient);
  private readonly API = `${environment.backend_api}/auth`;

  singIn(auth: InputsSingIn): Observable<ResponseAuth> {
    return this.authClient.post<ResponseAuth>(`${this.API}/sing-in`, auth).pipe(
      map(res => res)
    );
  }
  singUp(auth: InputsSingUp): Observable<ResponseHttp> {
    return this.authClient.post<ResponseHttp>(`${this.API}/sing-up`, auth)
  }
  singOut(): Observable<ResponseHttp> {
    throw new Error('Method not implemented.');
  }

  refreshToken(token: string): Observable<ResponseAuth> {
    return this.authClient.post<ResponseAuth>(`${this.API}/refresh-token`, { refreshToken: token }).pipe(
      map(res => res)
    )
  }

  getUser(page?: number, limit?: number) {
    return this.authClient.get<ResponsePagination>(`${this.API}/users`, {
      params: {
        page: page ?? 1,
        limit: limit ?? 2
      }
    }).pipe(
      map(res => res)
    )
  }

}

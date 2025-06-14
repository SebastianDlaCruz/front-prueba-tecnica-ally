import { Injectable } from '@angular/core';
import { InputsSingIn, InputsSingUp, ResponseAuth, ResponseHttp } from '@core/models';
import { Observable } from 'rxjs';
import { Auth } from '../interfaces/http-services.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService implements Auth {

  singIn(auth: InputsSingIn): Observable<ResponseAuth> {
    throw new Error('Method not implemented.');
  }
  singUp(auth: InputsSingUp): Observable<ResponseAuth> {
    throw new Error('Method not implemented.');
  }
  singOut(): Observable<ResponseHttp> {
    throw new Error('Method not implemented.');
  }


}

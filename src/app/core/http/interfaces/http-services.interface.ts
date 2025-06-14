import { InputsSingIn, InputsSingUp, ResponseAuth, ResponseHttp } from "@core/models";
import { Observable } from "rxjs";

export interface Auth {
  singIn(auth: InputsSingIn): Observable<ResponseAuth>;
  singUp(auth: InputsSingUp): Observable<ResponseAuth>;
  singOut(): Observable<ResponseHttp>
}

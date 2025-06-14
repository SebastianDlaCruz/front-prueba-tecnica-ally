import { ResponseHttp } from "./response-http.model";

export interface InputsSingIn {
  email: string;
  password: string;
}

export interface InputsSingUp extends InputsSingIn {
  name: string;
  confirmPassword: string;
}


export interface ResponseAuth extends ResponseHttp {
  token: string;
  refreshToken: string;

}

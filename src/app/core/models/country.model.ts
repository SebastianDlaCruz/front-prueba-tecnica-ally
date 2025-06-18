import { ResponseHttp } from "./response-http.model";

export interface Country {
  id: number;
  name: string;
}


export interface City extends Country { }


export interface ResponseCountry extends ResponseHttp {
  data: Country[];
}

export interface ResponseCity extends ResponseHttp {
  data: City[];
}

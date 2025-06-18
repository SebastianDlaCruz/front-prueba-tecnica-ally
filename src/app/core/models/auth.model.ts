import { ResponseHttp } from "./response-http.model";

export interface InputsSingIn {
  email: string;
  password: string;
}

export interface InputsSingUp extends InputsSingIn {
  username: string;

}


export interface ResponseAuth extends ResponseHttp {
  token: string;
  refreshToken: string;

}
export interface PaginationMeta {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}


export interface User {
  email: string;
  register_date: Date;
  session_start_date: Date;
  username: string;
  uuid: string;
}
export interface ResponsePagination extends ResponseHttp {
  data: User[];
  pagination: PaginationMeta;
}

import { ResponseHttp } from "./response-http.model";

export interface Task {
  id: number;
  id_country: number;
  task: string;
}

export interface ResponseTask extends ResponseHttp {
  data: Task[];
}

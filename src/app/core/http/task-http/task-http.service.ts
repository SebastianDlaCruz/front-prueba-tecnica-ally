import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseTask } from '@core/models/task.model';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TaskHttpService {

  private readonly API = `${environment.backend_api}/task`;
  private readonly http = inject(HttpClient);

  getTask(id_country: number) {
    return this.http.get<ResponseTask>(`${this.API}/${id_country}`).pipe(
      map(res => res.data)

    )
  }
}

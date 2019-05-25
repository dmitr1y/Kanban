import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from 'src/app/components/boards/card-detail/task/interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  delete(id: string): PromiseLike<boolean> {
    return this.httpClient.delete<{ success: boolean }>('/api/task/delete', {
      params: {
        _id: id,
      },
    })
      .pipe(map(object => object.success))
      .toPromise<boolean>();
  }

  create(task: ITask): PromiseLike<ITask> {
    return this.httpClient.put<{ task: ITask }>('/api/task/create',
      {
        task,
      })
      .pipe(map(object => object.task))
      .toPromise<ITask>();
  }

  update(task: ITask): PromiseLike<ITask> {
    return this.httpClient.put<{ task: ITask }>('/api/task/create',
      {
        task,
      })
      .pipe(map(object => object.task))
      .toPromise<ITask>();
  }
}

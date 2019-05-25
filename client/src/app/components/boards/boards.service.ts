import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IDashboard } from 'src/app/components/boards/interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getList(): PromiseLike<IDashboard[]> {
    return this.httpClient.get<{ dashboards: IDashboard[] }>('/api/dashboard/list')
      .pipe(map(object => object.dashboards))
      .toPromise<IDashboard[]>();
  }

  getBoard(boardId: string): PromiseLike<IDashboard> {
    const params: HttpParams = new HttpParams({ fromObject: { id: boardId } });

    return this.httpClient.get<{ dashboard: IDashboard }>('/api/dashboard/get', { params: params })
      .pipe(map(object => object.dashboard))
      .toPromise<IDashboard>();
  }

  update(board: IDashboard): PromiseLike<IDashboard> {
    return this.httpClient.post<{ dashboard: IDashboard }>('/api/dashboard/update', { board })
      .pipe(map(object => object.dashboard))
      .toPromise<IDashboard>();
  }

  delete(boardId: string): PromiseLike<boolean> {
    return this.httpClient.delete<{ success: boolean }>('/api/dashboard/update', { params: { boardId } })
      .pipe(map(object => object.success))
      .toPromise<boolean>();
  }
}

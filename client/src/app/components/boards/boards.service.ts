import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  public getList(): PromiseLike<IDashboard[]> {
    return this.httpClient.get<{ dashboards: IDashboard[] }>('/api/dashboard/list')
      .pipe(map(object => object.dashboards))
      .toPromise<IDashboard[]>();
  }
}

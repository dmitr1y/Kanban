import { Injectable } from '@angular/core';
import { ICard } from 'src/app/components/boards/board-detail/card/interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CardDetailService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  get(dashboardId: string, columnId: string, cardId: string): PromiseLike<ICard> {
    const params: HttpParams = new HttpParams({
      fromObject: {
        dashboardId,
        columnId,
        cardId,
      },
    });

    return this.httpClient.get<{ card: ICard }>('/api/card/get', { params: params })
      .pipe(map(object => object.card))
      .toPromise<ICard>();
  }

  create(dashboardId: string, columnId: string, card: ICard): PromiseLike<ICard> {
    return this.httpClient.put<{ card: ICard }>(
      '/api/card/create',
      {
        card,
        columnId,
        dashboardId,
      },
    )
      .pipe(map(object => object.card))
      .toPromise<ICard>();
  }

  update(dashboardId: string, columnId: string, card: ICard): PromiseLike<ICard> {
    return this.httpClient.post<{ card: ICard }>(
      '/api/card/update',
      {
        card,
        columnId,
        dashboardId,
      },
    )
      .pipe(map(object => object.card))
      .toPromise<ICard>();
  }

  delete(dashboardId: string, columnId: string, cardId: string): PromiseLike<boolean> {
    return this.httpClient.delete<{ success: boolean }>(
      '/api/card/update',
      {
        params: {
          cardId,
          columnId,
          dashboardId,
        },
      },
    )
      .pipe(map(object => object.success))
      .toPromise<boolean>();
  }
}

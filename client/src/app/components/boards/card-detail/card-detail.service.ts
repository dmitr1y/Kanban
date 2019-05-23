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

  getCard(dashboardId: string, columnId: string, cardId: string): PromiseLike<ICard> {
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
}

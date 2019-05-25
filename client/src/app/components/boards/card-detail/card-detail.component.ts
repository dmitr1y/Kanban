import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/components/boards/board-detail/card/interfaces';
import { ActivatedRoute } from '@angular/router';
import { CardDetailService } from 'src/app/components/boards/card-detail/card-detail.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit {
  public card: ICard;
  private cardId: string;

  constructor(
    private router: ActivatedRoute,
    private service: CardDetailService,
  ) {
  }

  ngOnInit() {
    this.cardId = this.router.snapshot.queryParamMap.get('id');
    let dashboardId = this.router.snapshot.queryParamMap.get('dashboardId');
    let columnId = this.router.snapshot.queryParamMap.get('columnId');
    this.service.getCard(dashboardId, columnId, this.cardId).then(
      card => {
        console.log('get card', card);
        this.card = card;
      },
      err => {
        console.log(err.message);
      },
    );
  }
}

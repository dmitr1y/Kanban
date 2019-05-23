import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/components/boards/board-detail/card/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card: ICard;
  @Input() dashboardId: string;
  @Input() columnId: string;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  openCard() {
    this.router.navigate(['/dashboard/card/view'], {
      queryParams: {
        id: this.card._id,
        dashboardId: this.dashboardId,
        columnId: this.columnId,
      },
    });
  }
}

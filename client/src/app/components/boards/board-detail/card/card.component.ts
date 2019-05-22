import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/components/boards/board-detail/card/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card: ICard;

  constructor() {
  }

  ngOnInit() {
  }

}

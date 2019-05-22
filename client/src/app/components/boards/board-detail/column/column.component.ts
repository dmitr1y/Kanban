import { Component, Input, OnInit } from '@angular/core';
import { IColumn } from 'src/app/components/boards/board-detail/column/interfaces';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent implements OnInit {
  @Input() column: IColumn;

  constructor() {
  }

  ngOnInit() {
  }

  create() {
    this.column = {
      name: '',
      cards: [],
      position: 0,
    };
  }
}

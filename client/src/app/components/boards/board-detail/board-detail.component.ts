import { Component, OnInit } from '@angular/core';
import { IDashboard } from 'src/app/components/boards/interfaces';
import { ActivatedRoute } from '@angular/router';
import { BoardsService } from 'src/app/components/boards/boards.service';
import { IColumn } from 'src/app/components/boards/board-detail/column/interfaces';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css'],
})
export class BoardDetailComponent implements OnInit {
  public board: IDashboard;
  public boardId: string;

  constructor(
    private router: ActivatedRoute,
    private service: BoardsService,
  ) {
  }

  ngOnInit() {
    this.boardId = this.router.snapshot.queryParamMap.get('id');
    this.service.getBoard(this.boardId).then(board => {
      this.board = board;
    }, err => {
      console.log('Error', err);
    });
  }

  getSortedColumns() {
    let data = this.board && this.board.columns && this.board.columns.sort((a: IColumn, b: IColumn) => {
      return a.position - b.position;
    });
    console.log(data);
    return data;
  }

  createColumn() {
    this.board.columns.push({
      name: '',
      position: this.board.columns.length,
      isEdit: true,
    });

    console.log('push', {
      name: '',
      position: this.board.columns.length,
      isEdit: true,
    });
    console.log(this.board.columns);
  }
}

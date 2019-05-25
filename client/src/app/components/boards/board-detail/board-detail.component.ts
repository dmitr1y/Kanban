import { Component, OnInit } from '@angular/core';
import { IDashboard } from 'src/app/components/boards/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardsService } from 'src/app/components/boards/boards.service';
import { IColumn } from 'src/app/components/boards/board-detail/column/interfaces';
import { MatBottomSheet } from '@angular/material';
import { ToastComponent } from 'src/app/shared/toast/toast.component';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css'],
})
export class BoardDetailComponent implements OnInit {
  public board: IDashboard;
  public boardId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: BoardsService,
    private bottomSheet: MatBottomSheet,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.boardId = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.service.getBoard(this.boardId).then(board => {
      this.board = board;
    }, err => {
      console.log('Error by getting board', err);
      this.bottomSheet.open(ToastComponent, {
        data: {
          message: 'Не удалось получить информацию о доске',
        },
      }).dismiss((result) => {
        this.router.navigate(['/dashboard/list']);
      });
    });
  }

  getSortedColumns() {
    return this.board && this.board.columns && this.board.columns.sort((a: IColumn, b: IColumn) => {
      return a.position - b.position;
    });
  }

  createColumn() {
    if (!this.board.columns) {
      this.board.columns = [];
    }

    this.board.columns.push({
      name: '',
      position: this.board.columns ? this.board.columns.length : 0,
      isEdit: true,
    });
  }
}

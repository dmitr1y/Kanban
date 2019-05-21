import { Component, OnInit } from '@angular/core';
import { IDashboard } from 'src/app/components/boards/interfaces';
import { BoardsService } from 'src/app/components/boards/boards.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit {

  public boards: IDashboard[];

  constructor(
    private boardsService: BoardsService,
  ) {
  }

  ngOnInit() {
    this.boardsService.getList().then((boards) => {
      this.boards = boards;
    });
  }

}

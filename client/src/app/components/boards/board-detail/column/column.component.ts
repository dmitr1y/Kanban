import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IColumn } from 'src/app/components/boards/board-detail/column/interfaces';
import { CreateComponent } from 'src/app/components/boards/board-detail/card/create/create.component';
import { MatDialog } from '@angular/material';
import { ICard } from 'src/app/components/boards/board-detail/card/interfaces';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent implements OnInit {
  @Input() column: IColumn;
  @Input() dashboardId: string;
  @Output() onEdit: EventEmitter<IColumn> = new EventEmitter<IColumn>();

  constructor(
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
  }

  save() {
    this.column.isEdit = false;
    this.onEdit.emit(this.column);
  }

  addCard() {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '450px',
      data: {
        card: {
          name: '',
          description: '',
          tasks: [],
          position: this.column.cards ? this.column.cards.length : 0,
        },
      },
    });

    dialogRef.afterClosed().subscribe((data: ICard) => {
      if (!this.column.cards) {
        this.column.cards = [];
      }

      this.column.cards.push(data);
    });
  }
}

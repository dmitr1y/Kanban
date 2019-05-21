import { NgModule } from '@angular/core';
import { BoardsComponent } from 'src/app/components/boards/boards.component';
import { BoardsService } from 'src/app/components/boards/boards.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ColumnComponent } from './column/column.component';
import { CardComponent } from './card/card.component';
import { TaskComponent } from './card/task/task.component';
import { BoardComponent } from './board/board.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BoardDetailComponent } from './board-detail/board-detail.component';

@NgModule({
  imports: [
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    BrowserModule,
  ],
  declarations: [
    BoardsComponent,
    ColumnComponent,
    CardComponent,
    TaskComponent,
    BoardComponent,
    BoardDetailComponent,
  ],
  entryComponents: [
    BoardsComponent,
    ColumnComponent,
    CardComponent,
    TaskComponent,
    BoardComponent,
  ],
  providers: [
    HttpClient,
    BoardsService,
  ],
  exports: [
    BoardsComponent,
  ],
})
export class BoardsModule {
}

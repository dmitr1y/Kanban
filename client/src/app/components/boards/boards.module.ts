import { NgModule } from '@angular/core';
import { BoardsComponent } from 'src/app/components/boards/boards.component';
import { BoardsService } from 'src/app/components/boards/boards.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ColumnComponent } from './board-detail/column/column.component';
import { CardComponent } from './board-detail/card/card.component';
import { BoardComponent } from './board/board.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule, MatTooltipModule,
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BoardDetailComponent } from 'src/app/components/boards/board-detail/board-detail.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { TaskComponent } from 'src/app/components/boards/card-detail/task/task.component';
import { BackButtonModule } from 'src/app/shared/back-button/back-button.module';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './board-detail/card/create/create.component';

@NgModule({
  imports: [
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    BrowserModule,
    MatCheckboxModule,
    BackButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  declarations: [
    BoardsComponent,
    ColumnComponent,
    CardComponent,
    TaskComponent,
    BoardComponent,
    BoardDetailComponent,
    CardDetailComponent,
    CreateComponent,
  ],
  entryComponents: [
    CreateComponent,
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

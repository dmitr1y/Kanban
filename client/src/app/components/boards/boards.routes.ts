import { Routes } from '@angular/router';
import { BoardsComponent } from 'src/app/components/boards/boards.component';
import { BoardDetailComponent } from 'src/app/components/boards/board-detail/board-detail.component';
import { CardDetailComponent } from 'src/app/components/boards/card-detail/card-detail.component';

export const BoardsRoutes: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard/list',
      },
      {
        path: 'list',
        component: BoardsComponent,
      },
      {
        path: 'view',
        component: BoardDetailComponent,
      },
      {
        path: 'card/view',
        component: CardDetailComponent,
      },
    ],
  },
];

import { Routes } from '@angular/router';
import { BoardsComponent } from 'src/app/components/boards/boards.component';
import { BoardDetailComponent } from 'src/app/components/boards/board-detail/board-detail.component';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

export const BoardsRoutes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: BoardsComponent,
      },
      {
        path: 'view',
        component: BoardDetailComponent,
      },
    ],
  },
];

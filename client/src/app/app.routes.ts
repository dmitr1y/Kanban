import { AuthComponent } from 'src/app/components/auth/auth.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { NotEnoughRightsComponent } from 'src/app/components/not-enough-rights/not-enough-rights.component';
import { Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
import { PreventLoggedInAccessService } from 'src/app/services/prevent-logged-in-access/prevent-logged-in-access.service';
import { BoardsComponent } from 'src/app/components/boards/boards.component';

export const AppRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: BoardsComponent,
      },
    ],
  },
  {
    path: '403',
    component: NotEnoughRightsComponent,
  },
  {
    path: 'auth',
    canActivate: [PreventLoggedInAccessService],
    component: AuthComponent,
  },
];

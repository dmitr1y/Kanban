import { AuthComponent } from 'src/app/components/auth/auth.component';
import { NotEnoughRightsComponent } from 'src/app/components/not-enough-rights/not-enough-rights.component';
import { Routes } from '@angular/router';
import { PreventLoggedInAccessService } from 'src/app/services/prevent-logged-in-access/prevent-logged-in-access.service';
import { BoardsRoutes } from 'src/app/components/boards/boards.routes';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
import { TeamsRoutes } from 'src/app/components/teams/teams.routes';

export const AppRoutes: Routes = [
  {
    path: '403',
    component: NotEnoughRightsComponent,
  },
  {
    path: 'auth',
    canActivate: [PreventLoggedInAccessService],
    component: AuthComponent,
  },
  {
    path: '',
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard/list',
      },
      ...BoardsRoutes,
      ...TeamsRoutes,
    ],
  },
];

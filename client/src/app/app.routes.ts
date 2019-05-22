import { AuthComponent } from 'src/app/components/auth/auth.component';
import { NotEnoughRightsComponent } from 'src/app/components/not-enough-rights/not-enough-rights.component';
import { Routes } from '@angular/router';
import { PreventLoggedInAccessService } from 'src/app/services/prevent-logged-in-access/prevent-logged-in-access.service';
import { BoardsRoutes } from 'src/app/components/boards/boards.routes';

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

  ...BoardsRoutes,
];

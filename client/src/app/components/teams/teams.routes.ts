import { Routes } from '@angular/router';
import { TeamsComponent } from 'src/app/components/teams/teams.component';
import { TeamDetailComponent } from 'src/app/components/teams/team-detail/team-detail.component';

export const TeamsRoutes: Routes = [
  {
    path: 'team',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/team/list',
      },
      {
        path: 'list',
        component: TeamsComponent,
      },
      {
        path: 'view',
        component: TeamDetailComponent,
      },
    ],
  },
];
